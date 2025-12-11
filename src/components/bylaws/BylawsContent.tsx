
import ScrollReveal from '@/components/common/ScrollReveal'
import SafeIcon from '@/components/common/SafeIcon'

interface Article {
  number: string
  title: string
  sections: {
    number: string
    heading: string
    content: string | string[]
  }[]
}

export default function BylawsContent() {
  const articles: Article[] = [
    {
      number: 'I',
      title: 'Name and Purpose',
      sections: [
        {
          number: '1',
          heading: 'Name',
          content: 'The organization is named "Devhub."'
        },
        {
          number: '2',
          heading: 'Purpose',
          content: 'Devhub fosters excellence in web development, collaboration, and innovation through interactive events, projects, and community building.'
        }
      ]
    },
    {
      number: 'II',
      title: 'Membership',
      sections: [
        {
          number: '1',
          heading: 'Eligibility',
          content: 'Membership is open to all PIEMR students interested in web development.'
        },
        {
          number: '2',
          heading: 'Rights and Responsibilities',
          content: 'Members can attend events, contribute to projects, and must uphold values like respect, collaboration, and ethics.'
        }
      ]
    },
    {
      number: 'III',
      title: 'Governance and Leadership',
      sections: [
        {
          number: '1',
          heading: 'Executive Committee',
          content: 'Includes roles like President, Vice President, Secretary, Treasurer, Event Coordinator, and Technical Lead, each with defined duties.'
        }
      ]
    },
    {
      number: 'IV',
      title: 'Meetings and Events',
      sections: [
        {
          number: '1',
          heading: 'Meetings',
          content: 'Regular meetings are conducted at least biweekly during the semester.'
        },
        {
          number: '2',
          heading: 'Events',
          content: 'Activities include workshops, hackathons, expert talks, and collaborative projects to enhance learning and teamwork.'
        },
        {
          number: '3',
          heading: 'Event Participation',
          content: 'Members are encouraged to actively engage in organizing and attending events.'
        }
      ]
    },
    {
      number: 'V',
      title: 'Code of Conduct',
      sections: [
        {
          number: '1',
          heading: 'Respect and Collaboration',
          content: 'Members must maintain respect and foster teamwork within the club.'
        },
        {
          number: '2',
          heading: 'Ethical Behaviour',
          content: 'Members should adhere to ethical practices and avoid plagiarism.'
        },
        {
          number: '3',
          heading: 'Commitment',
          content: 'Members are expected to actively participate in meetings, events, and projects to the best of their ability.'
        }
      ]
    }
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {articles.map((article, index) => (
            <ScrollReveal 
              key={article.number} 
              variant="slide-up" 
              delay={index * 100}
              className="glass rounded-xl p-8 md:p-10 border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{article.number}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Article {article.number}: {article.title}
                  </h2>
                </div>
              </div>

              <div className="space-y-6 ml-16">
                {article.sections.map((section) => (
                  <div key={`${article.number}-${section.number}`} className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-sm">
                        {section.number}
                      </span>
                      {section.heading}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed pl-8">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-2">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}

          {/* Additional Information Box */}
          <ScrollReveal 
            variant="slide-up" 
            delay={articles.length * 100}
            className="glass rounded-xl p-8 md:p-10 border border-accent/30 bg-accent/5"
          >
            <div className="flex items-start gap-4">
              <SafeIcon name="AlertCircle" size={24} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Important Note</h3>
                <p className="text-muted-foreground">
                  These bylaws are designed to ensure fair governance and a positive community environment. 
                  All members are expected to familiarize themselves with these rules and uphold them in spirit and practice. 
                  For any clarifications or concerns regarding these bylaws, please contact the Executive Committee.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
