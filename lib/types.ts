export interface Font {
  id: string
  name: string
  category: string
  description: string
  weights: FontWeight[]
  pairings: string[]
  usageTips: string[]
}

export interface FontWeight {
  name: string
  value: number
}

