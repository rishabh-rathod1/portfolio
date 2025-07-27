import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rishabh Rathod - Electronics & Computer Engineering Student',
  description: 'Portfolio of Rishabh Rathod, B.Tech student specializing in embedded systems, DevOps, and hardware-software integration.',
  keywords: ['Rishabh Rathod', 'Electronics Engineering', 'Computer Engineering', 'DevOps', 'Embedded Systems', 'VIT Chennai'],
  authors: [{ name: 'Rishabh Rathod' }],
  openGraph: {
    title: 'Rishabh Rathod - Electronics & Computer Engineering Portfolio',
    description: 'Pre-final year B.Tech student passionate about embedded systems and DevOps',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}