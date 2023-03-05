"use client"
import './globals.css'
import NavBar from 'components/NavBar'
import { ThemeProvider } from 'next-themes'
import SplashScreen from 'components/SplashScreen'
import { usePathname } from "next/navigation";
import { path } from "animejs";
import { useEffect, useState } from 'react'
import Footer from "components/Footer"
import { AnalyticsWrapper } from 'components/Analytics';

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
      <body className='bg-slate-900'>
        {
          isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)}/>
          ) : (
            <ThemeProvider enableSystem={true} attribute="class">
              <NavBar />
              {children}
              <AnalyticsWrapper />
              <Footer />
            </ThemeProvider>
          )
        }
      </body>
    </html>
  )
}
