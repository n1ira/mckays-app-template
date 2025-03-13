/*
<ai_context>
This client component is deprecated and no longer used.
Profile initialization is now handled in app/todo/_components/todo-content.tsx
</ai_context>
*/

"use client"

import { useEffect } from "react"

export function ProfileInitializer() {
  useEffect(() => {
    console.warn(
      "ProfileInitializer is deprecated and should no longer be used. " +
        "Profile initialization is now handled in todo-content.tsx"
    )
  }, [])

  // This component no longer does anything - it's just kept for compatibility
  return null
}
