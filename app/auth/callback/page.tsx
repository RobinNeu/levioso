'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'

export default function AuthCallback() {
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      const supabase = createClient()

      // 1. Session holen
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      if (sessionError || !sessionData.session?.user) {
        console.error('Fehler beim Laden der Session:', sessionError?.message)
        return
      }

      const user = sessionData.session.user

      // 2. Profil abfragen
      const { data: existingProfile, error: profileError } = await supabase
        .from('profiles')
        .select('id, company_id')
        .eq('id', user.id)
        .single()

      // 3. Falls Profil existiert & Firma gesetzt → fertig
      if (existingProfile && existingProfile.company_id) {
        router.push('/dashboard')
        return
      }


      // 4. Firma erstellen
        const session = await supabase.auth.getSession()
        const companyName = `${user?.email?.split('@')[0]}'s Company`
        console.log('User ID:', user?.id)
        const { data: newCompany, error: companyError } = await supabase
        .from('companies')
        .insert({ name: companyName, user_id: user?.id }) // 🔥 wichtig!
        .select()
        .single()



      if (companyError) {
        console.error('Fehler beim Erstellen der Firma:', companyError.message)
        return
      }

      // 5. Profil updaten / upsert mit Firma
      const { error: upsertError } = await supabase.from('profiles').upsert({
        id: user.id,
        email: user.email,
        company_id: newCompany.id,
        role: 'admin', // optional: jeder Erstnutzer wird Admin seiner Firma
      })

      if (upsertError) {
        console.error('Fehler beim Upsert des Profils:', upsertError.message)
        return
      }

      // 6. Weiterleiten
      router.push('/dashboard')
    }

    handleCallback()
  }, [router])

  return (
    <div className="p-10 text-center text-lg">
      🔮 Levioso aktiviert dein Benutzerkonto...
    </div>
  )
}