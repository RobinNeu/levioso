
// src/components/Header.tsx
'use client'

import { Bell, UserCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-levioso-midnight-blue bg-opacity-60 backdrop-blur-lg text-white flex items-center justify-between px-8 shadow-md z-40">
      <h1 className="font-bold text-xl">Dashboard</h1>
      <button className="bg-levioso-glow-orange hover:bg-levioso-glow-gold text-black rounded-lg px-4 py-2 transition-all">
        ✨ Aktion
      </button>
    </header>
  )
}

