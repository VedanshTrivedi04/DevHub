
import ScrollReveal from '@/components/common/ScrollReveal'
import { CLUB_MISSION } from '@/data/ClubData'
import SafeIcon from '@/components/common/SafeIcon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function MissionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal variant="fade" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <SafeIcon name="Target" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Empowering Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mission is built on four core pillars that guide everything we do
          </p>
        </ScrollReveal>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CLUB_MISSION.map((mission, index) => (
            <ScrollReveal key={mission.id} variant="slide-up" delay={index * 100}>
              <Card className="glass hover:shadow-glow transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-secondary/40 transition-colors">
                      <SafeIcon name={mission.iconName} size={28} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Goal {mission.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{mission.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Mission Summary */}
        <ScrollReveal variant="fade">
          <div className="glass rounded-2xl p-8 border border-border/50 text-center">
            <SafeIcon name="Heart" size={32} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Commitment to Excellence</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Through collaborative learning, hands-on workshops, expert talks, and hackathons, we equip individuals with the knowledge and skills needed to build innovative web applications and thrive in the tech-driven world.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
