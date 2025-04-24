import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'File Bridge Global',
  description: 'File Bridge Global is a premium tax consultation and financial services company that connects individuals and businesses to smarter, streamlined solutions',
  generator: 'File Bridge Global',
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
