// app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import React from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
<div className="flex">
  <Sidebar />
  <div className="flex-1 ml-64">
    <Header />
    <main className="pt-16">{children}</main>
  </div>
</div>
  )
}