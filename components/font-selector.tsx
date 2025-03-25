"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import type { Font } from "@/lib/types"

interface FontSelectorProps {
  fonts: Font[]
  selectedFont: Font | null
  onSelectFont: (font: Font) => void
  onViewDetails: (font: Font) => void
}

export function FontSelector({ fonts, selectedFont, onSelectFont, onViewDetails }: FontSelectorProps) {
  return (
    <div className="border rounded-lg overflow-hidden border-black/20 dark:border-white/20 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-3 border-b border-black/20 dark:border-white/20">
        <h2 className="font-semibold">Select Primary Font</h2>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-2 space-y-1">
          {fonts.length > 0 ? (
            fonts.map((font) => (
              <div
                key={font.id}
                className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10 ${
                  selectedFont?.id === font.id
                    ? "bg-gradient-to-r from-black/20 to-black/15 dark:from-white/20 dark:to-white/15 shadow-sm"
                    : ""
                }`}
                onClick={() => onSelectFont(font)}
              >
                <div className="flex-1">
                  <p className="font-medium" style={{ fontFamily: font.name }}>
                    {font.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{font.category}</p>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation()
                      onViewDetails(font)
                    }}
                    className="w-7 h-7 p-0 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-all duration-200"
                  >
                    <Info className="h-4 w-4" />
                    <span className="sr-only">View details</span>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-4 text-muted-foreground">No fonts found</p>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

