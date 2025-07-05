'use client'
import { BarChartBig, TrendingUp, MousePointerClick, DollarSign } from 'lucide-react'

const kpis = [
  {
    icon: <TrendingUp className="w-6 h-6 text-levioso-accent" />,
    label: 'CTR',
    value: '4.7%',
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-levioso-accent" />,
    label: 'CPC',
    value: '€1.30',
  },
  {
    icon: <DollarSign className="w-6 h-6 text-levioso-accent" />,
    label: 'Conversion Rate',
    value: '9.2%',
  },
  {
    icon: <BarChartBig className="w-6 h-6 text-levioso-accent" />,
    label: 'Impressions',
    value: '120k',
  },
]

export default function KPIGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {kpis.map((kpi, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-white shadow-glow"
        >
          <div className="mb-2">{kpi.icon}</div>
          <div className="text-sm text-white/80">{kpi.label}</div>
          <div className="text-xl font-bold text-levioso-primary">{kpi.value}</div>
        </div>
      ))}
    </div>
  )
}
