"use client"

import { createContext, useContext } from "react"
import type { Dictionary } from "@/lib/content"

const DictContext = createContext<Dictionary | null>(null)

export function DictProvider({ dict, children }: { dict: Dictionary; children: React.ReactNode }) {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>
}

export function useDict() {
  const ctx = useContext(DictContext)
  if (!ctx) throw new Error("useDict must be used outside DictProvider")
  return ctx
}