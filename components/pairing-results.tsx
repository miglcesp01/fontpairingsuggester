"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import type { Font } from "@/lib/types"

interface PairingResultsProps {
  pairings: Font[]
  primaryFont: Font
  onViewDetails: (font: Font) => void
}

export function PairingResults({ pairings, primaryFont, onViewDetails }: PairingResultsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Suggested pairings for{" "}
        <span className="text-black dark:text-white" style={{ fontFamily: primaryFont.name }}>
          {primaryFont.name}
        </span>
      </h2>

      {pairings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pairings.map((font) => (
            <Card
              key={font.id}
              className="overflow-hidden border-black/20 dark:border-white/20 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <CardHeader className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle style={{ fontFamily: font.name }}>{font.name}</CardTitle>
                    <CardDescription>{font.category}</CardDescription>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button
                      variant="ghost"
                      onClick={() => onViewDetails(font)}
                      className="w-7 h-7 p-0 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-all duration-200"
                    >
                      <Info className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium" style={{ fontFamily: primaryFont.name }}>
                    Heading in {primaryFont.name}
                  </p>
                  <p className="text-sm" style={{ fontFamily: font.name }}>
                    Body text in {font.name}. This is an example of how these fonts pair together in a real-world
                    context. The contrast between the heading and body text creates visual hierarchy.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 border rounded-lg bg-gradient-to-b from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 shadow-sm">
          <p className="text-muted-foreground text-center px-4">No suggested pairings found for this font</p>
        </div>
      )}
    </div>
  )
}

