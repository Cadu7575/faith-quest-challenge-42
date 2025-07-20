
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = "https://dnzcfoinedwuyrthpljh.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuemNmb2luZWR3dXlydGhwbGpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NzA2MzMsImV4cCI6MjA2NzE0NjYzM30.PDBMpKTUs4FCPGIgJx-kcw4FK-N0JCYZXbXURu9gkEQ"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
