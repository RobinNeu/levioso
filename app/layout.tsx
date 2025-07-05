import Sidebar from '@/components/Sidebar'
import ParticlesBackground from '@/components/ParticlesBackground'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 relative overflow-hidden">
          <ParticlesBackground />
          <div className="relative z-10 p-8">{children}</div>
        </main>
      </body>
    </html>
  )
}