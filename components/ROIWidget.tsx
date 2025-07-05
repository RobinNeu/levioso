'use client'

import React from 'react'
import { Area, AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'KW 1', ROI: 1200 },
  { name: 'KW 2', ROI: 2100 },
  { name: 'KW 3', ROI: 800 },
  { name: 'KW 4', ROI: 1600 },
  { name: 'KW 5', ROI: 2500 },
]

export default function ROIWidget() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 text-black max-w-3xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">📈 ROI Entwicklung</h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="roiColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7e3af2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7e3af2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ROI"
            stroke="#7e3af2"
            fillOpacity={1}
            fill="url(#roiColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
