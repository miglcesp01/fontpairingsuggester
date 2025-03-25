import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import type { Font } from "@/lib/types"

interface FontDetailsDrawerProps {
  font: Font | null
  onClose: () => void
}

export function FontDetailsDrawer({ font, onClose }: FontDetailsDrawerProps) {
  if (!font) return null

  return (
    <Drawer open={!!font} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl" style={{ fontFamily: font.name }}>
              {font.name}
            </DrawerTitle>
            <DrawerDescription>{font.category}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">About this font</h3>
                <p style={{ fontFamily: font.name }}>{font.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Font Weights</h3>
                <div className="space-y-2">
                  {font.weights.map((weight) => (
                    <div key={weight.value} className="flex items-center justify-between">
                      <span>{weight.name}</span>
                      <span
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
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Font Sizes</h3>
                <div className="space-y-4">
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
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Usage Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {font.usageTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

