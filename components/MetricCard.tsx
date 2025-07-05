import { LucideIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: LucideIcon
}

export default function MetricCard({ title, value, description, icon: Icon }: MetricCardProps) {
  return (
    <div className="glow-card p-6">
      <div className="flex items-center justify-between">
        <Icon className="h-6 w-6 text-yellow-400" />
        <h3 className="text-md font-semibold text-gray-300">{title}</h3>
      </div>
      <div className="mt-4 text-4xl font-bold text-glow">{value}</div>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </div>
  )
}