
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import CodeRainBackground from '@/components/common/CodeRainBackground'
import { CLUB_GENERAL_INFO } from '@/data/ClubData'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'

export default function AnimatedHeroSection() {
  const [isLoaded, setIsLoaded] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate text on mount
    if (textRef.current) {
      const elements = textRef.current.querySelectorAll('[data-animate]')
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in')
        }, index * 100)
      })
    }

    // Add scroll animation listener
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY
        const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]')
        parallaxElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.5')
          ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-background">
      {/* Animated Background */}
      <CodeRainBackground density={0.3} speed={0.8} />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
          data-parallax="0.3"
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          data-parallax="0.5"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          data-parallax="0.2"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div ref={textRef} className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            data-animate
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 backdrop-blur-sm opacity-0 translate-y-4 transition-all duration-700"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Welcome to DevHub</span>
          </div>

          {/* Main Heading */}
          <h1
            data-animate
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0 translate-y-4 transition-all duration-700"
          >
            <span className="text-gradient">Code. Create. Collaborate.</span>
          </h1>

          {/* Subheading */}
          <p
            data-animate
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 translate-y-4 transition-all duration-700"
          >
            Join {CLUB_GENERAL_INFO.name} - {CLUB_GENERAL_INFO.tagline}, where passionate developers build innovative web applications and grow together as a community.
          </p>

          {/* Animated Code Block */}
          <div
            data-animate
            className="mb-12 inline-block opacity-0 translate-y-4 transition-all duration-700"
          >
            <div className="glass rounded-lg p-6 sm:p-8 border border-primary/20 max-w-2xl">
              <div className="text-left font-mono text-sm sm:text-base">
                <div className="text-muted-foreground mb-2">
                  <span className="text-primary">const</span> devhub = {'{'}
                </div>
                <div className="text-secondary ml-4 mb-2">
                  mission: <span className="text-accent">"Empower Web Developers"</span>,
                </div>
                <div className="text-secondary ml-4 mb-2">
                  vision: <span className="text-accent">"Lead Web Dev Education"</span>,
                </div>
                <div className="text-secondary ml-4 mb-2">
                  values: [<span className="text-accent">"Collaboration", "Innovation", "Ethics"</span>]
                </div>
                <div className="text-muted-foreground">
                  {'}'}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            data-animate
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 translate-y-4 transition-all duration-700"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 text-base"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <SafeIcon name="UserPlus" size={20} className="mr-2" />
                Register Now
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 transition-all duration-300 text-base"
            >
              <a href="./about-us.html">
                <SafeIcon name="Info" size={20} className="mr-2" />
                Learn More About Us
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="hover:text-primary transition-colors text-base"
            >
              <a href="./contact-us.html">
                <SafeIcon name="Mail" size={20} className="mr-2" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</p>
              <SafeIcon name="ChevronDown" size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Code Snippets */}
        <div className="absolute top-1/4 left-5% text-primary/30 font-mono text-xs sm:text-sm animate-float">
          &lt;div&gt;
        </div>
        <div className="absolute top-1/3 right-5% text-secondary/30 font-mono text-xs sm:text-sm animate-float" style={{ animationDelay: '1s' }}>
          const app = {}
        </div>
        <div className="absolute bottom-1/4 left-10% text-accent/30 font-mono text-xs sm:text-sm animate-float" style={{ animationDelay: '2s' }}>
          function()
        </div>
        <div className="absolute bottom-1/3 right-10% text-primary/30 font-mono text-xs sm:text-sm animate-float" style={{ animationDelay: '1.5s' }}>
          &lt;/div&gt;
        </div>
      </div>
    </div>
  )
}
