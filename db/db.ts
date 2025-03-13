/*
<ai_context>
Initializes the database connection and schema for the app.
</ai_context>
*/

import { profilesTable } from "@/db/schema"
import { config } from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

config({ path: ".env.local" })

const schema = {
  profiles: profilesTable
}

// Cache the database connection to prevent multiple instances during hot reloading
let _db: ReturnType<typeof createDrizzleClient> | undefined

// Create a function to initialize the database connection
function createDrizzleClient() {
  const connectionString = process.env.DATABASE_URL

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not defined")
  }

  // Configure PostgreSQL client with safety options
  const client = postgres(connectionString, {
    ssl: {
      rejectUnauthorized: false
    },
    max: 1, // Reduce connection pool to minimize issues
    idle_timeout: 10, // Shorter idle timeout
    connect_timeout: 10,
    debug: process.env.NODE_ENV === "development"
  })

  return drizzle(client, { schema })
}

// Export a function that gets or creates the database connection
export function getDB() {
  // In development, always create a new connection to avoid stale connections
  if (process.env.NODE_ENV === "development") {
    return createDrizzleClient()
  }

  // In production, reuse the connection if it exists
  if (!_db) {
    _db = createDrizzleClient()
  }

  return _db
}
