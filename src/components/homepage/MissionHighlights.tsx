
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import ScrollReveal from '@/components/common/ScrollReveal'
import { CLUB_MISSION } from '@/data/ClubData'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'

export default function MissionHighlights() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal variant="fade" className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Our Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students to excel in web development through collaboration, innovation, and ethical practices
          </p>
        </ScrollReveal>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CLUB_MISSION.map((mission, index) => (
            <ScrollReveal 
              key={mission.id} 
              variant="slide-up" 
              delay={index * 100}
              className="h-full"
            >
              <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 h-full hover:shadow-card group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300">
                      <SafeIcon 
                        name={mission.iconName} 
                        size={24} 
                        className="text-primary group-hover:text-accent transition-colors" 
                      />
                    </div>
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-xl">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {mission.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal variant="fade" delay={400} className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to be part of our mission?
          </p>
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold group"
          >
            Join DevHub Today
            <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
