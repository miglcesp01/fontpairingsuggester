"use client"

import { Button } from "@/components/ui/button"

interface FontCategoryFilterProps {
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
}

export function FontCategoryFilter({ selectedCategory, setSelectedCategory }: FontCategoryFilterProps) {
  const categories = [
    { id: "serif", name: "Serif" },
    { id: "sans-serif", name: "Sans Serif" },
    { id: "display", name: "Display" },
    { id: "monospace", name: "Monospace" },
    { id: "handwriting", name: "Handwriting" },
  ]

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedCategory(null)}
          className={
            selectedCategory === null
              ? "bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm transition-all duration-200"
              : "border-black/30 hover:bg-black/10 dark:border-white/30 dark:hover:bg-white/10 transition-all duration-200"
          }
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={
              selectedCategory === category.id
                ? "bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-sm transition-all duration-200"
                : "border-black/30 hover:bg-black/10 dark:border-white/30 dark:hover:bg-white/10 transition-all duration-200"
            }
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}

