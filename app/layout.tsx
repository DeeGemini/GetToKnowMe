import React from "react"
import "./globals.css"
import { Caveat } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"

const caveat = Caveat({ subsets: ["latin"] })

export const metadata = {
  title: "Nontuthuzelo Ngwenya - Software Engineer",
  description: "Personal portfolio of Nontuthuzelo Ngwenya, a software engineer based in Durban, South Africa.",
  openGraph: {
    title: "Nontuthuzelo Ngwenya - Software Engineer",
    description: "Personal portfolio of Nontuthuzelo Ngwenya, a software engineer based in Durban, South Africa.",
    images: [{ url: "/og-image.jpg" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
