import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Naman Verma | Computer Engineer",
  description: "Explore Naman Verma's portfolio showcasing expertise in Computer Engineering, coding, and tech innovation.",
  keywords: "Naman Verma, Computer Engineer, Computer Engineering, Tech, Coding, Web Development, Software Engineer",
  authors: [{ name: "Naman Verma" }],
  openGraph: {
    title: "Naman Verma | Computer Engineer",
    description: "Explore Naman Verma's portfolio showcasing expertise in Computer Engineering, coding, and tech innovation.",
    url: "https://www.namanverma.site",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "Naman Verma Portfolio",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'