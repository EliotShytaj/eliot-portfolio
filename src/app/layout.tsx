import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Eliot Shytaj — Portfolio",
  description: "CS + AMS @ SBU • Builder • Startups • Systems • ML",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
