
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import CodeRainBackground from '@/components/common/CodeRainBackground'
import { CLUB_GENERAL_INFO } from '@/data/ClubData'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card/30">
      {/* Animated Background */}
      <CodeRainBackground density={0.3} speed={0.8} />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Welcome to DevHub</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="text-gradient">Code. Create. Collaborate.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join {CLUB_GENERAL_INFO.name} - {CLUB_GENERAL_INFO.tagline}, where students master web development through hands-on learning, hackathons, and innovation.
            </p>
          </div>

          {/* Founding Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <SafeIcon name="Calendar" size={16} className="text-primary" />
              <span>Founded {CLUB_GENERAL_INFO.foundingDate}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border"></div>
            <div className="flex items-center gap-2">
              <SafeIcon name="MapPin" size={16} className="text-primary" />
              <span>PIEMR, Indore</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 text-base px-8">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <SafeIcon name="UserPlus" size={18} className="mr-2" />
                Register Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 text-base px-8">
              <a href="./about-us.html">
                <SafeIcon name="BookOpen" size={18} className="mr-2" />
                Learn More
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
              <SafeIcon name="ChevronDown" size={20} className="text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  )
}
