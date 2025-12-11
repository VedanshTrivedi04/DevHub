
import ScrollReveal from '@/components/common/ScrollReveal'
import { CLUB_GENERAL_INFO } from '@/data/ClubData'
import SafeIcon from '@/components/common/SafeIcon'

export default function FoundingInfo() {
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-card/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <ScrollReveal variant="slide-right">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <SafeIcon name="Calendar" size={24} color="white" />
                                </div>
                                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-gradient">Founded with Purpose</span>
                            </h2>

                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                {CLUB_GENERAL_INFO.fullDescription}
                            </p>

                            <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                                <SafeIcon name="Zap" size={24} className="text-primary flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Founded Date</p>
                                    <p className="text-sm text-muted-foreground">{CLUB_GENERAL_INFO.foundingDate}</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Image */}
                    <ScrollReveal variant="slide-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                            <img
                                src={CLUB_GENERAL_INFO.heroImageUrl}
                                alt="DevHub Community"
                                className="relative w-full rounded-2xl shadow-card hover:shadow-glow transition-shadow duration-300"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
