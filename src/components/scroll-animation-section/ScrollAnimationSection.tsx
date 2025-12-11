import ScrollReveal from '@/components/common/ScrollReveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'

const scrollAnimationExamples = [
  {
    id: 1,
    title: 'Fade In Animation',
    description: 'Smooth fade-in effect as elements come into view',
    icon: 'Eye',
  },
  {
    id: 2,
    title: 'Slide Up Animation',
    description: 'Elements slide up smoothly from bottom to top',
    icon: 'ArrowUp',
  },
  {
    id: 3,
    title: 'Scale Animation',
    description: 'Elements scale from small to normal size',
    icon: 'Maximize2',
  },
  {
    id: 4,
    title: 'Rotate Animation',
    description: 'Elements rotate as they appear on screen',
    icon: 'RotateCw',
  },
]

export default function ScrollAnimationSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fade" className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Scroll Animation Examples</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our smooth scroll-triggered animations that bring your content to life
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {scrollAnimationExamples.map((item, index) => (
            <ScrollReveal
              key={item.id}
              variant="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-300 h-full hover:shadow-card group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                      <SafeIcon
                        name={item.icon}
                        size={24}
                        className="text-primary group-hover:text-accent transition-colors"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fade" delay={400} className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Scroll down to see the animations in action!
          </p>
          <div className="flex justify-center">
            <SafeIcon name="ChevronDown" size={32} className="text-primary animate-bounce" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
