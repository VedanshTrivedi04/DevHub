
import { Button, type ButtonProps } from '@/components/ui/button'
import { forwardRef } from 'react'

interface GlowButtonProps extends ButtonProps {
  glowColor?: 'primary' | 'secondary' | 'accent'
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className = '', glowColor = 'primary', children, ...props }, ref) => {
    const glowColors = {
      primary: 'hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]',
      secondary: 'hover:shadow-[0_0_20px_rgba(0,102,255,0.6)]',
      accent: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]'
    }

    return (
      <Button
        ref={ref}
        className={`bg-gradient-to-r from-primary to-secondary relative overflow-hidden transition-all duration-300 ${glowColors[glowColor]} ${className}`}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    )
  }
)

GlowButton.displayName = 'GlowButton'

export default GlowButton
