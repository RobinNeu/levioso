'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mo', clicks: 120 },
  { name: 'Di', clicks: 98 },
  { name: 'Mi', clicks: 86 },
  { name: 'Do', clicks: 99 },
  { name: 'Fr', clicks: 130 },
]

export default function CampaignStats() {
  return (
    <div className="bg-white/10 p-6 rounded-xl text-white shadow-lg backdrop-blur-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">📊 Kampagnen-Performance (Woche)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="clicks" fill="#10b981" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
