"use client"

import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FontSearchProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function FontSearch({ searchQuery, setSearchQuery }: FontSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search fonts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-8 pr-8 border-black/30 dark:border-white/30 focus-visible:ring-black dark:focus-visible:ring-white transition-all duration-200"
      />
      {searchQuery && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button
            variant="ghost"
            onClick={() => setSearchQuery("")}
            className="w-6 h-6 p-0 flex items-center justify-center text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-full"
          >
            <X className="h-3.5 w-3.5" />
            <span className="sr-only">Clear search</span>
          </Button>
        </div>
      )}
    </div>
  )
}

