import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-yellow-500 text-black">
      <h1 >
        <Header />
        <main>
          {children}
        </main>
      </h1>
    </div>
  );
}