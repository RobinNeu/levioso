'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function MagicSummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 text-white rounded-2xl p-6 shadow-2xl w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-2">✨ Magische Zusammenfassung</h2>
      <p className="text-sm text-white/90 mb-4">
        Deine Kampagnen laufen überdurchschnittlich gut. 🚀 CTR ist 12% über dem Benchmark. Budget-Auslastung effizient.
      </p>
      <div className="text-sm text-white/70">Letztes Update: vor 3 Stunden</div>
    </motion.div>
  )
}
