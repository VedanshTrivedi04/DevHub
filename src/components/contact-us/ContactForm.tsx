
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="glass border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SafeIcon name="Send" size={24} className="text-primary" />
          Send us a Message
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="bg-card/50 border-border/50 focus:border-primary focus:ring-primary/50"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-card/50 border-border/50 focus:border-primary focus:ring-primary/50"
              disabled={isSubmitting}
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-foreground">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={handleChange}
              className="bg-card/50 border-border/50 focus:border-primary focus:ring-primary/50"
              disabled={isSubmitting}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your inquiry..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="bg-card/50 border-border/50 focus:border-primary focus:ring-primary/50 resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <SafeIcon name="Send" size={16} className="mr-2" />
                Send Message
              </>
            )}
          </Button>

          {/* Additional Info */}
          <p className="text-xs text-muted-foreground text-center pt-4">
            We respect your privacy. Your information will only be used to respond to your inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
