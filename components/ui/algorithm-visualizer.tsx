"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Zap, Shuffle } from "lucide-react";

type Algorithm = "bfs" | "dfs" | "dijkstra" | "astar";
type CellType = "empty" | "wall" | "start" | "end" | "visited" | "path" | "current";

interface Cell {
  row: number;
  col: number;
  type: CellType;
}

const ROWS = 16;
const COLS = 24;

export const AlgorithmVisualizer = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [algorithm, setAlgorithm] = useState<Algorithm>("bfs");
  const [speed, setSpeed] = useState(20);
  const [start] = useState({ row: 8, col: 3 });
  const [end] = useState({ row: 8, col: 20 });

  const initializeGrid = useCallback(() => {
    const newGrid: Cell[][] = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow: Cell[] = [];
      for (let col = 0; col < COLS; col++) {
        let type: CellType = "empty";
        if (row === start.row && col === start.col) type = "start";
        else if (row === end.row && col === end.col) type = "end";
        currentRow.push({ row, col, type });
      }
      newGrid.push(currentRow);
    }
    return newGrid;
  }, [start, end]);

  const generateRandomWalls = useCallback(() => {
    const newGrid = initializeGrid();
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (
          (row === start.row && col === start.col) ||
          (row === end.row && col === end.col)
        ) {
          continue;
        }
        if (Math.random() < 0.3) {
          newGrid[row][col].type = "wall";
        }
      }
    }
    setGrid(newGrid);
  }, [initializeGrid, start, end]);

  useEffect(() => {
    generateRandomWalls();
  }, [generateRandomWalls]);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const getNeighbors = (row: number, col: number): [number, number][] => {
    const neighbors: [number, number][] = [];
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (
        newRow >= 0 &&
        newRow < ROWS &&
        newCol >= 0 &&
        newCol < COLS
      ) {
        neighbors.push([newRow, newCol]);
      }
    }
    return neighbors;
  };

  const bfs = async () => {
    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const queue: [number, number][] = [[start.row, start.col]];
    const visited = new Set<string>();
    const parent = new Map<string, [number, number]>();
    visited.add(`${start.row},${start.col}`);

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;
      
      if (row === end.row && col === end.col) {
        await reconstructPath(parent, newGrid);
        return;
      }

      if (newGrid[row][col].type !== "start") {
        newGrid[row][col].type = "current";
        setGrid([...newGrid]);
        await sleep(speed);
      }

      for (const [nRow, nCol] of getNeighbors(row, col)) {
        const key = `${nRow},${nCol}`;
        if (
          !visited.has(key) &&
          newGrid[nRow][nCol].type !== "wall"
        ) {
          visited.add(key);
          parent.set(key, [row, col]);
          queue.push([nRow, nCol]);
          
          if (newGrid[nRow][nCol].type !== "end") {
            newGrid[nRow][nCol].type = "visited";
          }
        }
      }

      if (newGrid[row][col].type !== "start") {
        newGrid[row][col].type = "visited";
      }
      setGrid([...newGrid]);
    }
  };

  const dfs = async () => {
    const newGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const stack: [number, number][] = [[start.row, start.col]];
    const visited = new Set<string>();
    const parent = new Map<string, [number, number]>();

    while (stack.length > 0) {
      const [row, col] = stack.pop()!;
      const key = `${row},${col}`;

      if (visited.has(key)) continue;
      visited.add(key);

      if (row === end.row && col === end.col) {
        await reconstructPath(parent, newGrid);
        return;
      }

      if (newGrid[row][col].type !== "start") {
        newGrid[row][col].type = "current";
        setGrid([...newGrid]);
        await sleep(speed);
      }

      for (const [nRow, nCol] of getNeighbors(row, col)) {
        const nKey = `${nRow},${nCol}`;
        if (
          !visited.has(nKey) &&
          newGrid[nRow][nCol].type !== "wall"
        ) {
          parent.set(nKey, [row, col]);
          stack.push([nRow, nCol]);
          
          if (newGrid[nRow][nCol].type !== "end") {
            newGrid[nRow][nCol].type = "visited";
          }
        }
      }

      if (newGrid[row][col].type !== "start") {
        newGrid[row][col].type = "visited";
      }
      setGrid([...newGrid]);
    }
  };

  const reconstructPath = async (
    parent: Map<string, [number, number]>,
    newGrid: Cell[][]
  ) => {
    let current: [number, number] | undefined = [end.row, end.col];
    const path: [number, number][] = [];

    while (current) {
      path.push(current);
      current = parent.get(`${current[0]},${current[1]}`);
    }

    for (let i = path.length - 1; i >= 0; i--) {
      const [row, col] = path[i];
      if (newGrid[row][col].type !== "start" && newGrid[row][col].type !== "end") {
        newGrid[row][col].type = "path";
        setGrid([...newGrid]);
        await sleep(speed * 2);
      }
    }
  };

  const startSearch = async () => {
    setIsAnimating(true);
    const resetGrid = grid.map((row) =>
      row.map((cell) => ({
        ...cell,
        type:
          cell.type === "visited" || cell.type === "path" || cell.type === "current"
            ? "empty"
            : cell.type,
      }))
    );
    setGrid(resetGrid);
    await sleep(100);

    switch (algorithm) {
      case "bfs":
        await bfs();
        break;
      case "dfs":
        await dfs();
        break;
      default:
        await bfs();
    }

    setIsAnimating(false);
  };

  const reset = () => {
    setIsAnimating(false);
    setGrid(initializeGrid());
  };

  const getCellColor = (type: CellType) => {
    switch (type) {
      case "start":
        return "bg-green-500";
      case "end":
        return "bg-red-500";
      case "wall":
        return "bg-neutral-700";
      case "visited":
        return "bg-blue-500/50";
      case "current":
        return "bg-yellow-500";
      case "path":
        return "bg-purple-500";
      default:
        return "bg-neutral-800/50";
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl border border-neutral-700/50 shadow-2xl p-4 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-blue-400" />
          <h3 className="text-base font-bold text-white">Pathfinding</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Algorithm Selector */}
      <div className="mb-2">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
          disabled={isAnimating}
          className="w-full px-3 py-2 bg-neutral-800/80 text-white text-sm border border-neutral-600/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        >
          <option value="bfs">BFS</option>
          <option value="dfs">DFS</option>
          <option value="dijkstra">Dijkstra&apos;s</option>
          <option value="astar">A*</option>
        </select>
      </div>

      {/* Speed Control */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-1">
          <label className="text-xs text-neutral-400">Speed</label>
          <span className="text-xs text-neutral-500">{speed}ms</span>
        </div>
        <input
          type="range"
          min="5"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full h-1.5 bg-neutral-700/50 rounded-full appearance-none cursor-pointer accent-blue-500"
        />
      </div>

      {/* Grid Visualizer */}
      <div className="flex-1 bg-neutral-950/50 rounded-xl border border-neutral-800/50 p-2 flex items-center justify-center overflow-hidden mb-2">
        <div className="flex flex-col gap-[1px]">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[1px]">
              {row.map((cell) => (
                <motion.div
                  key={`${cell.row}-${cell.col}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1 }}
                  className={`w-[14px] h-[14px] rounded-[2px] ${getCellColor(cell.type)} transition-colors duration-200`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={startSearch}
          disabled={isAnimating}
          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="h-4 w-4" /> Start
        </button>

        <button
          onClick={reset}
          disabled={isAnimating}
          className="p-2 bg-neutral-700/80 hover:bg-neutral-600 text-white rounded-lg transition-all disabled:opacity-50"
          title="Clear"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <button
          onClick={generateRandomWalls}
          disabled={isAnimating}
          className="p-2 bg-purple-600/80 hover:bg-purple-700 text-white rounded-lg transition-all disabled:opacity-50"
          title="Generate Maze"
        >
          <Shuffle className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
