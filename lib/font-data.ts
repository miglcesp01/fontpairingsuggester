import type { Font } from "./types"

export const fontData: Font[] = [
  {
    id: "roboto",
    name: "Roboto",
    category: "sans-serif",
    description:
      "Roboto is a neo-grotesque sans-serif typeface family developed by Google. It has a mechanical skeleton and the forms are largely geometric, with friendly and open curves.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["playfair-display", "lora", "open-sans", "montserrat"],
    usageTips: [
      "Works well for both headings and body text",
      "Excellent readability on screens",
      "Pairs well with serif fonts for contrast",
      "Great for modern, clean designs",
    ],
  },
  {
    id: "open-sans",
    name: "Open Sans",
    category: "sans-serif",
    description:
      "Open Sans is a humanist sans-serif typeface designed by Steve Matteson. It was designed with an upright stress, open forms and a neutral, yet friendly appearance.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Semi-Bold", value: 600 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["roboto", "lato", "merriweather", "source-serif-pro"],
    usageTips: [
      "Excellent for body text due to high readability",
      "Works well across digital and print media",
      "Versatile for various design styles",
      "Pair with a distinctive display font for headlines",
    ],
  },
  {
    id: "lato",
    name: "Lato",
    category: "sans-serif",
    description:
      "Lato is a sans-serif typeface family designed by Łukasz Dziedzic. The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Bold", value: 700 },
      { name: "Black", value: 900 },
    ],
    pairings: ["merriweather", "roboto", "montserrat", "source-serif-pro"],
    usageTips: [
      "Great for both headings and body text",
      "Works well in corporate and professional designs",
      "The variety of weights offers flexibility",
      "Pairs well with serif fonts for traditional looks",
    ],
  },
  {
    id: "montserrat",
    name: "Montserrat",
    category: "sans-serif",
    description:
      "Montserrat is a geometric sans-serif typeface designed by Julieta Ulanovsky. It was inspired by posters, signs and typography from the first half of the twentieth century in the Montserrat neighborhood of Buenos Aires.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["merriweather", "open-sans", "roboto-slab", "lora"],
    usageTips: [
      "Excellent for headlines and titles",
      "Works well for branding and logos",
      "Use lighter weights for elegant designs",
      "Pair with a readable serif for body text",
    ],
  },
  {
    id: "playfair-display",
    name: "Playfair Display",
    category: "serif",
    description:
      "Playfair Display is a serif typeface designed by Claus Eggers Sørensen. It is inspired by the transition in printing from the 18th century when quills were replaced by pointed steel pens.",
    weights: [
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
      { name: "Black", value: 900 },
    ],
    pairings: ["roboto", "lato", "open-sans", "source-sans-pro"],
    usageTips: [
      "Perfect for headlines and titles",
      "Creates elegant, sophisticated designs",
      "Works well for fashion, luxury brands",
      "Pair with a clean sans-serif for body text",
    ],
  },
  {
    id: "merriweather",
    name: "Merriweather",
    category: "serif",
    description:
      "Merriweather is a serif typeface designed by Eben Sorkin. It was designed to be a text face that is pleasant to read on screens with features like a large x-height, slightly condensed letterforms, and a mild diagonal stress.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Bold", value: 700 },
      { name: "Black", value: 900 },
    ],
    pairings: ["montserrat", "open-sans", "lato", "source-sans-pro"],
    usageTips: [
      "Excellent for long-form reading",
      "Works well for editorial and blog content",
      "High contrast makes it stand out",
      "Pair with a geometric sans-serif for modern look",
    ],
  },
  {
    id: "lora",
    name: "Lora",
    category: "serif",
    description:
      "Lora is a well-balanced contemporary serif with roots in calligraphy. It is a text typeface with moderate contrast well suited for body text.",
    weights: [
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Semi-Bold", value: 600 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["montserrat", "roboto", "open-sans", "source-sans-pro"],
    usageTips: [
      "Great for body text in digital publications",
      "Works well for blogs and articles",
      "Has a warm, approachable feel",
      "Pair with geometric sans-serif for contrast",
    ],
  },
  {
    id: "roboto-slab",
    name: "Roboto Slab",
    category: "serif",
    description:
      "Roboto Slab is a slab serif typeface family developed by Google as a companion to Roboto. It has a mechanical skeleton and the forms are largely geometric.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["roboto", "open-sans", "lato", "montserrat"],
    usageTips: [
      "Great for headlines and subheadings",
      "Works well for digital interfaces",
      "Creates a strong visual hierarchy",
      "Pair with its sans-serif counterpart for consistency",
    ],
  },
  {
    id: "source-serif-pro",
    name: "Source Serif Pro",
    category: "serif",
    description:
      "Source Serif Pro is a serif typeface designed by Frank Grießhammer for Adobe. It was designed as a companion to Source Sans Pro and has a more traditional, literary feel.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Semi-Bold", value: 600 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["source-sans-pro", "open-sans", "lato", "roboto"],
    usageTips: [
      "Excellent for long-form reading",
      "Works well for editorial and academic content",
      "Has a classic, timeless feel",
      "Pair with Source Sans Pro for a cohesive look",
    ],
  },
  {
    id: "source-sans-pro",
    name: "Source Sans Pro",
    category: "sans-serif",
    description:
      "Source Sans Pro is a sans-serif typeface created by Paul D. Hunt for Adobe. It was designed to work well in user interfaces and has a clean, modern aesthetic.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Semi-Bold", value: 600 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["source-serif-pro", "merriweather", "lora", "playfair-display"],
    usageTips: [
      "Versatile for both headings and body text",
      "Works well for user interfaces",
      "Has excellent readability at small sizes",
      "Pair with Source Serif Pro for a cohesive look",
    ],
  },
  {
    id: "fira-code",
    name: "Fira Code",
    category: "monospace",
    description:
      "Fira Code is a monospace font with programming ligatures. It is an extension of Fira Mono and contains a set of ligatures for common programming multi-character combinations.",
    weights: [
      { name: "Light", value: 300 },
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["roboto", "open-sans", "lato", "source-sans-pro"],
    usageTips: [
      "Perfect for code editors and programming",
      "Ligatures improve code readability",
      "Works well for technical documentation",
      "Pair with a clean sans-serif for surrounding text",
    ],
  },
  {
    id: "pacifico",
    name: "Pacifico",
    category: "handwriting",
    description:
      "Pacifico is a brush script typeface designed by Vernon Adams. It has a friendly, casual appearance and is inspired by American surf culture of the 1950s.",
    weights: [{ name: "Regular", value: 400 }],
    pairings: ["roboto", "open-sans", "lato", "montserrat"],
    usageTips: [
      "Use sparingly for headlines or logos",
      "Works well for casual, fun designs",
      "Avoid using for body text or small sizes",
      "Pair with a clean sans-serif for readability",
    ],
  },
  {
    id: "abril-fatface",
    name: "Abril Fatface",
    category: "display",
    description:
      "Abril Fatface is a display typeface designed by TypeTogether. It draws inspiration from the heavy titling fonts used in advertising posters in 19th century Britain and France.",
    weights: [{ name: "Regular", value: 400 }],
    pairings: ["lato", "roboto", "open-sans", "source-sans-pro"],
    usageTips: [
      "Perfect for large headlines and titles",
      "Creates dramatic, eye-catching designs",
      "Use sparingly for maximum impact",
      "Pair with a neutral sans-serif for body text",
    ],
  },
  {
    id: "dancing-script",
    name: "Dancing Script",
    category: "handwriting",
    description:
      "Dancing Script is a casual script typeface designed by Pablo Impallari. It emulates casual handwriting and has a spontaneous, playful appearance.",
    weights: [
      { name: "Regular", value: 400 },
      { name: "Medium", value: 500 },
      { name: "Bold", value: 700 },
    ],
    pairings: ["open-sans", "roboto", "lato", "montserrat"],
    usageTips: [
      "Great for headlines and special text",
      "Works well for invitations and greeting cards",
      "Avoid using for body text",
      "Pair with a clean sans-serif for readability",
    ],
  },
]

