"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Mail, CheckCircle, Sparkles } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Stay Informed</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Never Miss a Story
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get the latest breaking news, exclusive interviews, and in-depth analysis delivered straight to your inbox
              every morning.
            </p>
          </div>

          {/* Newsletter form */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 animate-in zoom-in duration-500">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Welcome aboard!</h3>
                <p className="text-green-300">You&apos;ll receive your first newsletter tomorrow morning.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-gray-900/50 backdrop-blur-sm border-gray-700 focus:border-purple-500 text-white placeholder:text-gray-400 rounded-2xl"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Subscribe to Newsletter
                </Button>
              </form>
            )}

            <p className="text-sm text-gray-400 mt-4">Join 50,000+ readers. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
