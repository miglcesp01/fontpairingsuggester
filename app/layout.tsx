import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Font Pairing Suggester",
  description: "Find the perfect font combinations for your next project",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;700&family=Playfair+Display:wght@400;500;700;900&family=Merriweather:wght@300;400;700;900&family=Lora:wght@400;500;600;700&family=Roboto+Slab:wght@300;400;700&family=Source+Serif+Pro:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&family=Fira+Code:wght@300;400;500;700&family=Pacifico&family=Abril+Fatface&family=Dancing+Script:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

import "./globals.css"



import './globals.css'