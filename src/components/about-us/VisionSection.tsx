
import ScrollReveal from '@/components/common/ScrollReveal'
import { CLUB_VISION, MISSION_VISION_IMAGES } from '@/data/ClubData'
import SafeIcon from '@/components/common/SafeIcon'

export default function VisionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <ScrollReveal variant="slide-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-2xl"></div>
              <img
                src={MISSION_VISION_IMAGES.visionVisual}
                alt="DevHub Vision"
                className="relative w-full rounded-2xl shadow-card hover:shadow-glow transition-shadow duration-300"
              />
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <ScrollReveal variant="slide-left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <SafeIcon name="Lightbulb" size={24} color="white" />
                </div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Vision</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Leading the Future</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {CLUB_VISION}
              </p>

              {/* Vision Highlights */}
              <div className="space-y-4">
                {[
                  { icon: 'Rocket', text: 'Hands-on experience through workshops and hackathons' },
                  { icon: 'Users', text: 'Teamwork, creativity, and ethical coding practices' },
                  { icon: 'Sparkles', text: 'Future-ready developers contributing to society' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                      <SafeIcon name={item.icon} size={20} className="text-accent" />
                    </div>
                    <p className="text-muted-foreground pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
