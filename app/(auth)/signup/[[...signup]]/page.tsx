/*
<ai_context>
This client page provides the signup form from Clerk.
</ai_context>
*/

"use client"

import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SignUpPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render the SignUp component after client-side hydration
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
    <SignUp
      forceRedirectUrl="/todo"
      appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
    />
  )
}
