import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dilshan Thathsara Madusanka - Portfolio",
  description: "Software Engineering Student Portfolio - Showcasing projects, skills, and academic achievements",
  generator: "v0.app",
  applicationName: "Dilshan Thathsara Madusanka Portfolio",
  authors: [{ name: "Dilshan Thathsara Madusanka", url: "https://dilshanthathsara.vercel.app" }],
  icons:{
    icon: "/favicon.ico",
  },
  keywords: [
    "Dilshan",
    "Madusanka",
    "Dilshan Madusanka",
    "Portfolio",
    "Software Engineering",
    "Student",
    "Projects",
    "Skills",
    "Education",
    "GitHub",
    "LinkedIn",
    "Resume",
  ],
  colorScheme: "dark light",
  creator: "Dilshan Thathsara Madusanka",
  openGraph: {
    title: "Dilshan Thathsara Madusanka - Portfolio",
    description: "Software Engineering Student Portfolio - Showcasing projects, skills, and academic achievements",
    url: "https://dilshanthathsara.vercel.app",
    siteName: "Dilshan Thathsara Madusanka Portfolio",
    images: [
      {
        url: "https://dilshanthathsara.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dilshan Thathsara Madusanka Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilshan Thathsara Madusanka - Portfolio",
    description: "Software Engineering Student Portfolio - Showcasing projects, skills, and academic achievements",
    images: ["https://dilshanthathsara.vercel.app/og-image.png"],
    creator: "@dilshanthathsara",
  },  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
