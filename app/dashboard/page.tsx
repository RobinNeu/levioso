'use client'

import React, { useState } from 'react'
import AgentSelector from '@/components/AgentSelector'
import ROIWidget from '@/components/ROIWidget'
import CampaignStats from '@/components/CampaignStats'
import MagicSummaryCard from '@/components/MagicSummaryCard'
import MetricCard from '@/components/MetricCard'
import ParticlesBackground from '@/components/ParticlesBackground'
import { MousePointerClick, UserCheck, Euro } from 'lucide-react'

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
    <div className="relative min-h-screen p-8 overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center text-glow mb-10">
          🔮 Wähle deinen magischen Agenten
        </h1>

        <AgentSelector onSelect={handleSelectAgent} />

        {selectedAgent && (
          <div className="mt-12 text-center">
            <h2 className="text-2xl mb-4">Dein gewählter Agent:</h2>
            <div className="text-3xl font-semibold text-yellow-400 text-glow">
              {selectedAgent.name}
            </div>
            <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-xl transition-all">
              🚀 Starte mit diesem Agenten
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <MetricCard
            title="CTR"
            value="3.7%"
            description="Click-Through-Rate"
            icon={MousePointerClick}
          />
          <MetricCard
            title="Conversions"
            value="142"
            description="Leads aus Kampagnen"
            icon={UserCheck}
          />
          <MetricCard
            title="Ausgaben"
            value="€ 2.340"
            description="Monatliches Ad-Budget"
            icon={Euro}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          <div className="glow-card p-6">
            <ROIWidget />
          </div>
          <div className="glow-card p-6">
            <CampaignStats />
          </div>
        </div>

        <div className="glow-card p-6 mt-20">
          <MagicSummaryCard />
        </div>
      </div>
    </div>
  )
}
