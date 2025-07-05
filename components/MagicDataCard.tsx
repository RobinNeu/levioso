'use client'

import { LucideIcon } from 'lucide-react'

interface MagicDataCardProps {
  title: string
  value: string
  icon: LucideIcon
  gradientFrom: string
  gradientTo: string
}

export default function MagicDataCard({
  title,
  value,
  icon: Icon,
  gradientFrom,
  gradientTo,
}: MagicDataCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-3xl p-6 shadow-xl transition-all duration-300`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xl text-white">{title}</h3>
        <Icon className="w-8 h-8 text-white/80" />
      </div>
      <div className="text-5xl font-bold mt-4 text-white text-glow">{value}</div>
    </div>
  )
}
