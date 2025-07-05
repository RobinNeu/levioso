'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Agent-Typ definieren
export type Agent = {
  id: string
  name: string
  description: string
  color: string
  glow: string
}

const agents: Agent[] = [
  {
    id: 'strategist',
    name: 'The Strategist',
    description: 'Findet Chancen, bevor sie entstehen. Meister der Planung und Logik.',
    color: 'from-yellow-400 to-orange-500',
    glow: 'shadow-yellow-500',
  },
  {
    id: 'oracle',
    name: 'The Oracle',
    description: 'Sie sieht, was andere nicht sehen. Intuition trifft auf Daten.',
    color: 'from-indigo-400 to-violet-500',
    glow: 'shadow-indigo-500',
  },
  {
    id: 'spellcrafter',
    name: 'The Spellcrafter',
    description: 'Zaubert magische Creatives mit Pixel-Präzision.',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500',
  },
]

export default function AgentSelector({
  onSelect,
}: {
  onSelect?: (agent: Agent) => void
}) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-10">
      {agents.map((agent) => {
        const isSelected = selected === agent.id
        return (
          <motion.div
            key={agent.id}
            whileHover={{ scale: 1.05 }}
            className={`relative bg-gradient-to-br ${agent.color} text-white p-6 rounded-2xl w-64 h-80 flex flex-col justify-between items-center shadow-xl transition-all duration-300 ${
              isSelected ? `ring-4 ring-white ${agent.glow}` : 'opacity-80'
            }`}
            onClick={() => {
              setSelected(agent.id)
              onSelect?.(agent) // ✅ Übergibt das komplette Agent-Objekt
            }}
          >
            <div className="text-3xl font-semibold text-center drop-shadow-md">
              {agent.name}
            </div>
            <div className="text-sm text-center text-white/90">
              {agent.description}
            </div>
            <button
              className={`mt-4 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                isSelected
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/20 hover:bg-white/40 text-white'
              }`}
            >
              {isSelected ? '✔ Ausgewählt' : 'Wählen'}
            </button>
          </motion.div>
        )
      })}
    </div>
  )
}
