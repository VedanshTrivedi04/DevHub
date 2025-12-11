
import ScrollReveal from '@/components/common/ScrollReveal'
import { CORE_TECHNOLOGIES_GROUPS } from '@/data/ClubData'
import SafeIcon from '@/components/common/SafeIcon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function TechStackSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal variant="fade" className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <SafeIcon name="Cpu" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technologies We Master</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training across modern web development technologies
          </p>
        </ScrollReveal>

        {/* Tech Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_TECHNOLOGIES_GROUPS.map((group, index) => (
            <ScrollReveal key={index} variant="slide-up" delay={index * 100}>
              <Card className="glass hover:shadow-glow transition-all duration-300 h-full group overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={group.imageUrl}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <CardHeader className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <SafeIcon name={group.iconName} size={20} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {group.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.techs.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <ScrollReveal variant="fade" className="mt-16">
          <div className="glass rounded-2xl p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <SafeIcon name="Code" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Full Stack Development</h3>
                <p className="text-sm text-muted-foreground">
                  From frontend UI to backend APIs and databases
                </p>
              </div>
              <div>
                <SafeIcon name="GitBranch" size={32} className="text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Version Control</h3>
                <p className="text-sm text-muted-foreground">
                  Professional collaboration with Git and GitHub
                </p>
              </div>
              <div>
                <SafeIcon name="Zap" size={32} className="text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Modern Frameworks</h3>
                <p className="text-sm text-muted-foreground">
                  Latest tools and frameworks for web development
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
