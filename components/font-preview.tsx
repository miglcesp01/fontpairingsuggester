import { Card, CardContent } from "@/components/ui/card"
import type { Font } from "@/lib/types"

interface FontPreviewProps {
  font: Font
}

export function FontPreview({ font }: FontPreviewProps) {
  return (
    <Card className="overflow-hidden border-black/20 dark:border-white/20 shadow-sm transition-all duration-200 hover:shadow-md">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Font Preview</h3>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: font.name }}>
              {font.name}
            </h1>
            <p className="text-muted-foreground" style={{ fontFamily: font.name }}>
              {font.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-3 rounded-lg shadow-sm">
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Heading Example</h4>
              <h2 className="text-2xl font-bold" style={{ fontFamily: font.name }}>
                The quick brown fox jumps over the lazy dog
              </h2>
            </div>

            <div className="bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 dark:to-transparent p-3 rounded-lg">
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Paragraph Example</h4>
              <p style={{ fontFamily: font.name }}>
                Typography is the art and technique of arranging type to make written language legible, readable, and
                appealing when displayed. The arrangement of type involves selecting typefaces, point sizes, line
                lengths, line-spacing, and letter-spacing.
              </p>
            </div>

            <div className="bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 p-3 rounded-lg shadow-sm">
              <h4 className="text-sm font-medium text-muted-foreground mb-1">Character Set</h4>
              <p className="text-lg break-words" style={{ fontFamily: font.name }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="text-lg break-words" style={{ fontFamily: font.name }}>
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="text-lg break-words" style={{ fontFamily: font.name }}>
                0123456789 !@#$%^&*()
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

