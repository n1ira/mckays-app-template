/*
<ai_context>
This client page provides the login form from Clerk.
</ai_context>
*/

"use client"

import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function LoginPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render the SignIn component after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        Loading...
      </div>
    )
  }

  return (
    <SignIn
      forceRedirectUrl="/todo"
      appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
    />
  )
}
