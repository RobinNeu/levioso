'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function LoginPage() {
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'http://localhost:3000/auth/callback',
      },
    })

    if (error) {
      alert('Fehler: ' + error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-4">🔐 Levioso Login</h1>
      {sent ? (
        <p className="text-green-600">✅ Link gesendet! Schau in dein Postfach.</p>
      ) : (
        <>
          <input
            type="email"
            className="border p-2 w-full mb-2"
            placeholder="deine@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="text-white p-2 w-full rounded"
          >
            ✉️ Magic Link senden
          </button>
        </>
      )}
    </div>
  )
}
