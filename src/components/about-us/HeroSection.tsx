
import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/d4a98332-3525-474c-b8ab-d6abd4f41fe8.png"
          alt="DevHub Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg hover:shadow-glow transition-shadow">
              <SafeIcon name="Code2" size={48} color="white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">About DevHub</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coding Club PIEMR - Empowering the Next Generation of Web Developers
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Founded</div>
              <div className="text-sm text-muted-foreground">August 17, 2025</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">Mission</div>
              <div className="text-sm text-muted-foreground">Excellence & Innovation</div>
            </div>
            <div className="glass rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">Community</div>
              <div className="text-sm text-muted-foreground">PIEMR Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <SafeIcon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  )
}
