
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import { useEffect, useState } from 'react'

export default function ConfirmationContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true)
  }, [])

  return (
    <div className="container mx-auto px-4 w-full max-w-2xl">
      <div className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <Card className="glass border-primary/30 shadow-lg">
          <CardHeader className="text-center space-y-4">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center transition-all duration-1000 ${
                isVisible ? 'scale-100 shadow-glow' : 'scale-0'
              }`}>
                <SafeIcon 
                  name="CheckCircle2" 
                  size={48} 
                  color="white" 
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="space-y-2">
              <CardTitle className="text-4xl md:text-5xl text-gradient">
                Registration Successful!
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Welcome to DevHub - Coding Club PIEMR
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Confirmation Message */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <SafeIcon name="Mail" size={24} className="text-primary" />
                Confirmation Email Sent
              </h3>
              <p className="text-muted-foreground">
                A confirmation email has been sent to your registered email address. Please check your inbox and verify your email to complete the registration process.
              </p>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What's Next?</h3>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Verify Your Email</h4>
                    <p className="text-sm text-muted-foreground">
                      Click the verification link in the confirmation email to activate your account.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Join Our Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Once verified, you'll gain access to our exclusive Discord server and member resources.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Attend Events</h4>
                    <p className="text-sm text-muted-foreground">
                      Check out our upcoming workshops, hackathons, and expert talks to start learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
              <div className="flex gap-3">
                <SafeIcon name="AlertCircle" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Didn't receive the email?</p>
                  <p className="text-sm text-muted-foreground">
                    Check your spam folder or contact us at <a href="mailto:devhub@piemr.edu" className="text-primary hover:underline">devhub@piemr.edu</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild 
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow"
              >
                <a href="./homepage.html">
                  <SafeIcon name="Home" size={16} className="mr-2" />
                  Back to Homepage
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="flex-1 border-primary/50 hover:bg-primary/10"
              >
                <a href="./about-us.html">
                  <SafeIcon name="Info" size={16} className="mr-2" />
                  Learn More About Us
                </a>
              </Button>
            </div>

            {/* Contact Support */}
            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">
                Have questions? We're here to help!
              </p>
              <Button 
                asChild 
                variant="ghost"
                className="text-primary hover:text-primary hover:bg-primary/10"
              >
                <a href="./contact-us.html">
                  <SafeIcon name="MessageSquare" size={16} className="mr-2" />
                  Contact Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Decorative Elements */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground text-sm">
            Thank you for joining DevHub! We're excited to have you as part of our community.
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-secondary/50 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
