
import ScrollReveal from '@/components/common/ScrollReveal'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fade">
          <div className="glass rounded-2xl p-12 border border-border/50 text-center max-w-3xl mx-auto">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <SafeIcon name="Rocket" size={32} color="white" />
              </div>
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Ready to Join DevHub?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become part of our vibrant community of web developers. Learn, collaborate, and build amazing projects together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <SafeIcon name="UserPlus" size={18} className="mr-2" />
                  Register Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary transition-colors">
                <a href="./core-committee.html">
                  <SafeIcon name="Users" size={18} className="mr-2" />
                  Meet Our Team
                </a>
              </Button>
            </div>

            {/* Additional Links */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <a href="./bylaws.html" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                <SafeIcon name="FileText" size={16} />
                View Bylaws
              </a>
              <a href="./contact-us.html" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2">
                <SafeIcon name="Mail" size={16} />
                Contact Us
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Stats */}
        <ScrollReveal variant="fade" className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Founded', value: '2025', icon: 'Calendar' },
              { label: 'Members', value: '100+', icon: 'Users' },
              { label: 'Events', value: 'Monthly', icon: 'Zap' },
              { label: 'Tech Stack', value: '15+', icon: 'Code' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-lg p-6 text-center border border-border/50 hover:border-primary/50 transition-colors">
                <SafeIcon name={stat.icon} size={24} className="text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
