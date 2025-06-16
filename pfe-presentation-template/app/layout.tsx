import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Firas's Presentation",
  description: "A presentation template for showcasing projects and ideas.",
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
