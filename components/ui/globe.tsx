"use client";
import React from "react";

export const World = ({ data, globeConfig }: any) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-neutral-500 dark:text-neutral-400">
        Globe visualization (requires Three.js setup)
      </div>
    </div>
  );
};
