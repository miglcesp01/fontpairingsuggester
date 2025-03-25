"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import type { Font } from "@/lib/types"

interface FontDetailsModalProps {
  font: Font | null
  onClose: () => void
}

export function FontDetailsModal({ font, onClose }: FontDetailsModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsOpen(!!font)

    if (font) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [font])

  if (!font) return null

  return (
    <>
      {/* Overlay with z-index to ensure it's above all content */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, marginTop: 0 }}
        onClick={onClose}
      />

      {/* Modal with higher z-index than overlay */}
      <div
        className="fixed inset-x-0 top-[10%] bottom-[10%] mx-2 max-w-3xl bg-background rounded-lg shadow-lg z-[101] overflow-hidden md:mx-auto border border-black/20 dark:border-white/20"
        style={{ maxHeight: "90vh" }}
      >
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 sticky top-0 z-10">
          <h2 className="text-2xl font-bold" style={{ fontFamily: font.name }}>
            {font.name}
          </h2>
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              onClick={onClose}
              className="w-8 h-8 p-0 flex items-center justify-center hover:bg-black/20 dark:hover:bg-white/20 rounded-full transition-all duration-200"
            >
              <X className="h-5 w-5 text-black dark:text-white" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>

        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(80vh - 6rem)" }}>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-black dark:text-white mb-2">About this font</h3>
              <p className="text-lg" style={{ fontFamily: font.name }}>
                {font.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black dark:text-white mb-2">Font Weights</h3>
              <div className="space-y-6 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-4 rounded-lg shadow-sm">
                {font.weights.map((weight) => (
                  <div
                    key={weight.value}
                    className="flex flex-col space-y-1 sm:flex-row sm:justify-between sm:items-center sm:space-y-0"
                  >
                    <span className="text-muted-foreground">{weight.name}</span>
                    <span
                      className="text-lg"
                      style={{
                        fontFamily: font.name,
                        fontWeight: weight.value,
                      }}
                    >
                      The quick brown fox
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black dark:text-white mb-2">Font Sizes</h3>
              <div className="space-y-4 bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 dark:to-transparent p-4 rounded-lg">
                <p className="text-xs" style={{ fontFamily: font.name }}>
                  Extra Small (xs): The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-sm" style={{ fontFamily: font.name }}>
                  Small (sm): The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-base" style={{ fontFamily: font.name }}>
                  Base: The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-lg" style={{ fontFamily: font.name }}>
                  Large (lg): The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-xl" style={{ fontFamily: font.name }}>
                  Extra Large (xl): The quick brown fox jumps over the lazy dog
                </p>
                <p className="text-2xl" style={{ fontFamily: font.name }}>
                  2xl: The quick brown fox jumps over the lazy dog
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-black dark:text-white mb-2">Usage Tips</h3>
              <div className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-4 rounded-lg shadow-sm">
                <ul className="list-disc pl-5 space-y-2">
                  {font.usageTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-black dark:text-white mb-2">Character Set</h3>
              <div className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-4 rounded-lg shadow-sm space-y-2">
                <p className="text-xl break-words pb-2" style={{ fontFamily: font.name }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p className="text-xl break-words pb-2" style={{ fontFamily: font.name }}>
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p className="text-xl break-words pb-2" style={{ fontFamily: font.name }}>
                  0123456789 !@#$%^&*()
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

