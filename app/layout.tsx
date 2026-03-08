import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rishabh Rathod — Software Engineer & IoT Developer',
  description: 'Portfolio of Rishabh Rathod — Pre-final year B.Tech student at VIT Chennai specializing in full-stack development, IoT systems, and DevOps. Experienced in Java, Python, Spring Boot, Flask, and embedded systems.',
  keywords: [
    'Rishabh Rathod',
    'Software Engineer',
    'Full Stack Developer',
    'IoT Developer',
    'VIT Chennai',
    'Java Developer',
    'Python Developer',
    'DevOps',
    'Spring Boot',
    'Portfolio',
  ],
  authors: [{ name: 'Rishabh Rathod' }],
  openGraph: {
    title: 'Rishabh Rathod — Software Engineer & IoT Developer',
    description: 'Full-stack developer & IoT enthusiast building scalable systems with Java, Python, and modern web technologies.',
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
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}