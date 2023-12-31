import React, { useEffect } from "react";
// Local
import Header from "../header/Header";
// Utils
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div
      className={cn(`min-h-screen flex flex-col pt-header-height`, className)}
      style={{ minHeight: "100dvh" }}
    >
      <Header />
      <main className="flex-grow flex px-page-x-padding py-5">{children}</main>
    </div>
  );
}
