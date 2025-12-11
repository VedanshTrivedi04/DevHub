
import SafeIcon from '@/components/common/SafeIcon'

export default function ContactHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <SafeIcon name="Mail" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Contact DevHub</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions about DevHub? Want to collaborate or share feedback? We'd love to hear from you. 
            Reach out to us through any of the channels below.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border">
              <SafeIcon name="Clock" size={18} className="text-secondary" />
              <span className="text-sm text-muted-foreground">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border">
              <SafeIcon name="Globe" size={18} className="text-accent" />
              <span className="text-sm text-muted-foreground">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
