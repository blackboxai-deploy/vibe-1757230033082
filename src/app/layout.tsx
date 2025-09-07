import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EditPro - Free Photo & Video Editor',
  description: 'Professional photo and video editing tools, completely free. Edit, enhance, and create stunning visuals in your browser.',
  keywords: ['photo editor', 'video editor', 'free editing', 'online editor', 'image editing', 'video editing'],
  authors: [{ name: 'EditPro Team' }],
  openGraph: {
    title: 'EditPro - Free Photo & Video Editor',
    description: 'Professional photo and video editing tools, completely free.',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}