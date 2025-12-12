
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SafeIcon from '@/components/common/SafeIcon'
import { CLUB_GENERAL_INFO } from '@/data/ClubData'
interface CommonFooterProps {
  variant?: 'simple' | 'complex'
}

export default function CommonFooter({ variant = 'complex' }: CommonFooterProps) {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'Home', href: './index.html' },
    { name: 'About Us', href: './about-us.html' },
    { name: 'Bylaws', href: './bylaws.html' },
    { name: 'Core Committee', href: './core-committee.html' },
    { name: 'Contact', href: './contact-us.html' },
  ]

  const socialLinks = [
    { icon: 'Github', href: '#', label: 'GitHub' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'Instagram', href: '#', label: 'Instagram' },
  ]

  if (variant === 'simple') {
    return (
      <footer className="bg-card/50 border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} DevHub - Coding Club PIEMR. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary transition-colors"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <SafeIcon name={social.icon} size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-gradient-to-b from-background to-card/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="./index.html" className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <img src={CLUB_GENERAL_INFO.logoUrl} alt="DevHub Logo" className="w-10 h-10 object-contain group-hover:drop-shadow-glow transition-shadow" />
              </div>
              <span className="text-2xl font-bold text-gradient">DevHub</span>
            </a>
            <p className="text-muted-foreground max-w-md mb-4">
              Empowering students through web development education, collaboration, and innovation at PIEMR.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <SafeIcon name={social.icon} size={18} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <SafeIcon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                <span>PIEMR, Indore</span>
              </li>
              <li className="flex items-start gap-2">
                <SafeIcon name="Mail" size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:devhub.piemr@gmail.com" className="hover:text-primary transition-colors">
                  devhub.piemr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} DevHub - Coding Club PIEMR. All rights reserved.</p>
          <p>Founded on August 17, 2025</p>
        </div>
      </div>
    </footer>
  )
}
