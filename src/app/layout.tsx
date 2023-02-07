"use client"
import './globals.css'
import NavBar from 'components/NavBar'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx.
      */}
      <head />
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
