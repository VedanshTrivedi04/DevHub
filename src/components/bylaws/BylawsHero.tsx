
import SafeIcon from '@/components/common/SafeIcon'
import ScrollReveal from '@/components/common/ScrollReveal'

export default function BylawsHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal variant="slide-up" className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <SafeIcon name="BookOpen" size={28} color="white" strokeWidth={2} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
              DevHub Bylaws
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            The foundational rules and regulations governing DevHub - Coding Club PIEMR. 
            These bylaws ensure transparency, proper functioning, and a thriving community 
            dedicated to web development excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50">
              <SafeIcon name="Shield" size={18} className="text-primary" />
              <span>Governance</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50">
              <SafeIcon name="Users" size={18} className="text-secondary" />
              <span>Membership</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border/50">
              <SafeIcon name="Handshake" size={18} className="text-accent" />
              <span>Code of Conduct</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
