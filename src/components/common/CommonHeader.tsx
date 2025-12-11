
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SafeIcon from '@/components/common/SafeIcon'
import { GOOGLE_FORM_URL } from '@/data/RegistrationConfig'
import { CLUB_GENERAL_INFO } from '@/data/ClubData'

export default function CommonHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: './index.html' },
    { name: 'About', href: './about-us.html' },
    { name: 'Contact', href: './contact-us.html' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="./index.html" className="flex items-center gap-2 group">
            <img src={CLUB_GENERAL_INFO.logoUrl} alt="DevHub Logo" className="w-10 h-10 object-contain group-hover:drop-shadow-glow transition-shadow" />
            <span className="text-xl font-bold text-gradient hidden sm:inline">DevHub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                <SafeIcon name="UserPlus" size={16} className="mr-2" />
                Register Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <SafeIcon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass w-[300px]">
              <div className="flex flex-col gap-6 mt-8">
              <a href="./index.html" className="flex items-center gap-2 mb-4">
                  <img src={CLUB_GENERAL_INFO.logoUrl} alt="DevHub Logo" className="w-10 h-10 object-contain" />
                  <span className="text-xl font-bold text-gradient">DevHub</span>
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button asChild className="bg-gradient-to-r from-primary to-secondary mt-4">
                  <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <SafeIcon name="UserPlus" size={16} className="mr-2" />
                    Register Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
