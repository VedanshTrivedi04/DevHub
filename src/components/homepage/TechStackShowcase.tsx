
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import ScrollReveal from '@/components/common/ScrollReveal'
import { CORE_TECHNOLOGIES_GROUPS } from '@/data/ClubData'

export default function TechStackShowcase() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal variant="fade" className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Technologies We Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn industry-standard tools and frameworks used by professional developers worldwide
          </p>
        </ScrollReveal>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {CORE_TECHNOLOGIES_GROUPS.map((group, index) => (
            <ScrollReveal 
              key={group.title} 
              variant="slide-up" 
              delay={index * 150}
              className="h-full"
            >
              <Card className="glass border-secondary/20 hover:border-secondary/50 transition-all duration-300 h-full overflow-hidden group hover:shadow-card">
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary/10 to-accent/10">
                  <img 
                    src={group.imageUrl}
                    alt={group.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <SafeIcon name={group.iconName} size={24} color="white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>
                  <CardDescription className="text-base">{group.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal variant="fade" delay={450} className="text-center">
          <div className="glass rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-4">
              Our curriculum is designed to keep pace with industry trends and prepare you for real-world development challenges.
            </p>
            <a 
              href="./about-us.html"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold group"
            >
              Explore Our Full Curriculum
              <SafeIcon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
