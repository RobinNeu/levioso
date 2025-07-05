'use client'

import Link from 'next/link'

const links = ['Übersicht', 'Reports', 'Insights', 'Kampagnen']

export default function HeaderNav() {
  return (
    <nav className="flex space-x-6 justify-center mt-6 text-sm">
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          className="text-white/60 hover:text-white transition duration-200"
        >
          {link}
        </Link>
      ))}
    </nav>
  )
}
