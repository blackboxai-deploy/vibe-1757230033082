"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/theme-toggle'

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState<'photo' | 'video'>('photo')

  const photoFeatures = [
    "Crop & Resize with aspect ratio presets",
    "Professional filters (Vintage, B&W, Sepia, Blur, Sharpen)",
    "Brightness, Contrast, Saturation adjustments",
    "Text overlays with custom fonts and colors",
    "Undo/Redo with unlimited history",
    "Export in JPEG, PNG, WebP formats"
  ]

  const videoFeatures = [
    "Trim and split videos with frame precision",
    "Speed control (0.5x to 2x) with audio sync",
    "Real-time filters and color grading",
    "Text animations with duration control",
    "Timeline scrubber for precise editing",
    "Export in MP4, WebM formats"
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EP</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EditPro
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/editor">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start Editing
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            100% Free • No Watermarks • No Sign-up Required
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Professional Photo &<br />Video Editing
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Create stunning visuals with our powerful, browser-based editing tools. 
            No downloads, no subscriptions – just professional results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/editor">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
                Start Creating Now
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg">
              View Examples
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border shadow-2xl">
              <img 
                src="https://placehold.co/800x500?text=EditPro+Professional+Photo+Video+Editor+Interface+Modern+Dark+Theme+With+Timeline+And+Tools"
                alt="EditPro Professional Photo Video Editor Interface with Modern Dark Theme, Timeline and Tools"
                className="w-full h-auto rounded-lg border shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need to Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade tools for both photo and video editing, all running smoothly in your browser
            </p>
          </div>

          {/* Feature Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg flex">
              <button
                onClick={() => setActiveFeature('photo')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeFeature === 'photo'
                    ? 'bg-background shadow-sm text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Photo Editing
              </button>
              <button
                onClick={() => setActiveFeature('video')}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeFeature === 'video'
                    ? 'bg-background shadow-sm text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Video Editing
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeFeature === 'photo' ? photoFeatures : videoFeatures).map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{feature.split(' ')[0]} {feature.split(' ')[1]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose EditPro?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">$</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Free</h3>
              <p className="text-muted-foreground">
                No hidden costs, no subscriptions, no watermarks. Professional editing tools completely free forever.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Powered by modern web technologies for instant editing and real-time preview without any lag.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Private & Secure</h3>
              <p className="text-muted-foreground">
                All editing happens in your browser. Your files never leave your device, ensuring complete privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of creators who trust EditPro for their photo and video editing needs.
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg">
              Start Editing for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EP</span>
            </div>
            <span className="text-xl font-bold">EditPro</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 EditPro. Free photo and video editing for everyone.
          </p>
        </div>
      </footer>
    </div>
  )
}