'use client'

import { Home, BarChart, Users, Settings } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: BarChart, label: 'Kampagnen', href: '/campaigns' },
  { icon: Users, label: 'Team', href: '/team' },
  { icon: Settings, label: 'Einstellungen', href: '/settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-levioso-dark-blue bg-opacity-70 backdrop-blur-lg text-white p-6 fixed top-0 left-0 shadow-xl z-50">
      <div className="text-2xl font-bold mb-10 tracking-tight">🪄 Levioso</div>
      <nav className="space-y-4">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link key={href} href={href} className="flex items-center space-x-3 hover:text-levioso-glow-orange transition-all">
            <Icon />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
