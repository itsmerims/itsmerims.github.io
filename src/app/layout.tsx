"use client"
import './globals.css'
import NavBar from 'components/NavBar'
import { ThemeProvider } from 'next-themes'
import SplashScreen from 'components/SplashScreen'
import { usePathname } from "next/navigation";
import { path } from "animejs";
import { useEffect, useState } from 'react'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx.
      */}
      <head />
      <body>
        {
          isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)}/>
          ) : (
            <ThemeProvider enableSystem={true} attribute="class">
              <NavBar />
              {children}
            </ThemeProvider>
          )
        }
      </body>
    </html>
  )
}
