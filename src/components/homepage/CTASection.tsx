
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import ScrollReveal from '@/components/common/ScrollReveal'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variant="slide-up" className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl border border-primary/30 p-8 md:p-16 text-center space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <SafeIcon name="Rocket" size={32} color="white" strokeWidth={2} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-gradient">Ready to Launch Your Dev Career?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Join DevHub today and become part of a community dedicated to excellence in web development. Whether you're a beginner or experienced developer, there's a place for you here.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-8 border-y border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">Events & Workshops</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Tech Skills</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 text-base px-8">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <SafeIcon name="UserPlus" size={18} className="mr-2" />
                  Register Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 text-base px-8">
                <a href="./contact-us.html">
                  <SafeIcon name="Mail" size={18} className="mr-2" />
                  Get in Touch
                </a>
              </Button>
            </div>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground pt-4">
              Questions? Check out our <a href="./about-us.html" className="text-primary hover:text-accent transition-colors font-semibold">About Us</a> page or <a href="./contact-us.html" className="text-primary hover:text-accent transition-colors font-semibold">Contact Us</a> directly.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
