"use client"

import { useState } from "react"
import { ThemeToggleManual } from "@/components/theme-toggle-manual"
import { FontSelector } from "@/components/font-selector"
import { PairingResults } from "@/components/pairing-results"
import { FontPreview } from "@/components/font-preview"
import { FontCategoryFilter } from "@/components/font-category-filter"
import { FontSearch } from "@/components/font-search"
import { FontDetailsModal } from "@/components/font-details-modal"
import { fontData } from "@/lib/font-data"
import type { Font } from "@/lib/types"

export function FontPairingSuggester() {
  const [selectedFont, setSelectedFont] = useState<Font | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [openFontDetails, setOpenFontDetails] = useState<Font | null>(null)

  // Filter fonts based on category and search query
  const filteredFonts = fontData.filter((font) => {
    const matchesCategory = selectedCategory ? font.category === selectedCategory : true
    const matchesSearch = searchQuery ? font.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
    return matchesCategory && matchesSearch
  })

  // Get font pairings for the selected font
  const fontPairings = selectedFont ? fontData.filter((font) => selectedFont.pairings.includes(font.id)) : []

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 min-h-screen">
      <header className="flex justify-between items-center gap-4 pb-6 border-b border-black/10 dark:border-white/10">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400 text-transparent bg-clip-text">
            Font Pairing Suggester
          </h1>
          <p className="text-muted-foreground mt-1">Find the perfect font combinations for your next project</p>
        </div>
        <ThemeToggleManual />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-6">
          <FontSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <FontCategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <FontSelector
            fonts={filteredFonts}
            selectedFont={selectedFont}
            onSelectFont={setSelectedFont}
            onViewDetails={setOpenFontDetails}
          />
        </div>

        <div className="space-y-6">
          {selectedFont ? (
            <>
              <FontPreview font={selectedFont} />
              <PairingResults pairings={fontPairings} primaryFont={selectedFont} onViewDetails={setOpenFontDetails} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 border rounded-lg bg-gradient-to-b from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 shadow-sm">
              <div className="text-center px-4 py-8 max-w-md">
                <h3 className="text-xl font-semibold mb-2">Welcome to Font Pairing Suggester</h3>
                <p className="text-muted-foreground">
                  Select a primary font from the list to see suggested pairings and preview how they look together
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <FontDetailsModal font={openFontDetails} onClose={() => setOpenFontDetails(null)} />
    </div>
  )
}

