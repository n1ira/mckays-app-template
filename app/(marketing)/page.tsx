/*
<ai_context>
This server page is the marketing homepage.
</ai_context>
*/

"use server"

export default async function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center pb-20">
      <h1 className="text-6xl font-bold tracking-tight">Dartio</h1>
    </div>
  )
}
