import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sky 2 Sky Global Exports | Premium Agricultural Products",
  description:
    "Premium global exports of palm jaggery powder, cane sugar, pickles, and honey. Serving international markets with quality and reliability.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/sky2sky-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/sky2sky-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/sky2sky-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/sky2sky-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
