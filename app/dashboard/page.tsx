'use client'

import React, { useState } from 'react'
import AgentSelector from '@/components/AgentSelector'
import { motion } from 'framer-motion'
import ROIWidget from '@/components/ROIWidget'

export default function DashboardPage() {
  const [selectedAgent, setSelectedAgent] = useState<{
    id: string
    name: string
    description: string
  } | null>(null)

  const handleSelectAgent = (agent: {
    id: string
    name: string
    description: string
  }) => {
    setSelectedAgent(agent)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#090e2a] to-[#1c1131] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-glow">
        🔮 Wähle deinen magischen Agenten
      </h1>

      <AgentSelector onSelect={handleSelectAgent} />

      {selectedAgent && (
        <div className="mt-12 text-center">
          <h2 className="text-2xl mb-4">Dein gewählter Agent:</h2>
          <div className="text-3xl font-semibold text-yellow-400">
            {selectedAgent.name}
          </div>

          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-xl transition-all">
            🚀 Starte mit diesem Agenten
          </button>
        </div>
      )}

      <div className="mt-20">
        <ROIWidget />
      </div>
    </div>
  )
}
