
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import ScrollReveal from '@/components/common/ScrollReveal'

interface Feature {
  id: number
  title: string
  description: string
  iconName: string
}

const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Hands-On Workshops',
    description: 'Learn by doing with practical, project-based workshops led by experienced developers.',
    iconName: 'Wrench'
  },
  {
    id: 2,
    title: 'Hackathons & Competitions',
    description: 'Participate in exciting hackathons to build real-world solutions and showcase your skills.',
    iconName: 'Zap'
  },
  {
    id: 3,
    title: 'Expert Talks',
    description: 'Gain insights from industry professionals and learn about latest trends in web development.',
    iconName: 'Mic2'
  },
  {
    id: 4,
    title: 'Collaborative Projects',
    description: 'Work in teams on meaningful projects that make a positive impact on society.',
    iconName: 'Users'
  },
  {
    id: 5,
    title: 'Mentorship Program',
    description: 'Get guidance from experienced members and build lasting professional relationships.',
    iconName: 'Heart'
  },
  {
    id: 6,
    title: 'Community Support',
    description: 'Join a vibrant community of like-minded developers passionate about learning and growth.',
    iconName: 'Handshake'
  }
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal variant="fade" className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Why Join DevHub?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the benefits of being part of our thriving coding community
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <ScrollReveal 
              key={feature.id} 
              variant="slide-up" 
              delay={index * 80}
              className="h-full"
            >
              <Card className="glass border-accent/20 hover:border-accent/50 transition-all duration-300 h-full group hover:shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:from-accent/40 group-hover:to-primary/40 transition-all duration-300">
                    <SafeIcon 
                      name={feature.iconName} 
                      size={24} 
                      className="text-accent group-hover:text-primary transition-colors" 
                    />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
