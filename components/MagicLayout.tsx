"use client";

import React from "react";
import { LucideLayoutDashboard, LucideLineChart, LucideUser } from "lucide-react";
import Link from "next/link";

export default function MagicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0c0c1c] to-[#1a1a2e] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121221] shadow-lg border-r border-white/10 flex flex-col">
        <div className="text-2xl font-bold p-6 text-white tracking-wide">
          🪄 Levioso
        </div>
        <nav className="flex flex-col gap-2 px-4">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition">
            <LucideLayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition">
            <LucideLineChart className="w-5 h-5" /> Performance
          </Link>
          <Link href="#" className="flex items-center gap-3 p-3 hover:bg-white/10 rounded-md transition">
            <LucideUser className="w-5 h-5" /> Account
          </Link>
        </nav>
        <div className="mt-auto p-4 text-xs text-white/40">
          ✨ Built with magic
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
