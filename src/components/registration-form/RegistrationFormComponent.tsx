
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import SafeIcon from '@/components/common/SafeIcon'
import { toast } from 'sonner'

interface FormData {
  fullName: string
  email: string
  phone: string
  year: string
  branch: string
  skills: string
  motivation: string
}

interface FormErrors {
  [key: string]: string
}

export default function RegistrationFormComponent() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    skills: '',
    motivation: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.year) {
      newErrors.year = 'Year of study is required'
    }

    if (!formData.branch) {
      newErrors.branch = 'Branch is required'
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'Please mention your skills or experience'
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please tell us why you want to join'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Store form data in sessionStorage for confirmation page
      sessionStorage.setItem('registrationData', JSON.stringify(formData))

      toast.success('Registration submitted successfully!')

      // Redirect to confirmation page
      setTimeout(() => {
        window.location.href = './registration-confirmation.html'
      }, 500)
    } catch (error) {
      toast.error('Failed to submit registration. Please try again.')
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    window.location.href = './homepage.html'
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Join DevHub
        </h1>
        <p className="text-lg text-muted-foreground">
          Take the first step towards mastering web development. Fill out the form below to become a member of our vibrant community.
        </p>
      </div>

      {/* Form Card */}
      <Card className="glass border-border/50 shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SafeIcon name="UserPlus" size={24} className="text-primary" />
            Registration Form
          </CardTitle>
          <CardDescription>
            All fields are required. We'll use this information to set up your membership.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`bg-input border-border/50 ${errors.fullName ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`bg-input border-border/50 ${errors.email ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`bg-input border-border/50 ${errors.phone ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Year of Study */}
            <div className="space-y-2">
              <Label htmlFor="year" className="text-foreground">
                Year of Study <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.year} onValueChange={(value) => handleSelectChange('year', value)} disabled={isSubmitting}>
                <SelectTrigger className={`bg-input border-border/50 ${errors.year ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Select your year" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="1st-year">1st Year</SelectItem>
                  <SelectItem value="2nd-year">2nd Year</SelectItem>
                  <SelectItem value="3rd-year">3rd Year</SelectItem>
                  <SelectItem value="4th-year">4th Year</SelectItem>
                </SelectContent>
              </Select>
              {errors.year && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.year}
                </p>
              )}
            </div>

            {/* Branch */}
            <div className="space-y-2">
              <Label htmlFor="branch" className="text-foreground">
                Branch <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.branch} onValueChange={(value) => handleSelectChange('branch', value)} disabled={isSubmitting}>
                <SelectTrigger className={`bg-input border-border/50 ${errors.branch ? 'border-destructive' : ''}`}>
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="cse">Computer Science & Engineering</SelectItem>
                  <SelectItem value="ece">Electronics & Communication</SelectItem>
                  <SelectItem value="me">Mechanical Engineering</SelectItem>
                  <SelectItem value="ce">Civil Engineering</SelectItem>
                  <SelectItem value="ee">Electrical Engineering</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.branch && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.branch}
                </p>
              )}
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <Label htmlFor="skills" className="text-foreground">
                Your Skills & Experience <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="skills"
                name="skills"
                placeholder="Tell us about your programming skills, languages you know, and any relevant experience (e.g., HTML, CSS, JavaScript, React, etc.)"
                value={formData.skills}
                onChange={handleChange}
                className={`bg-input border-border/50 min-h-24 resize-none ${errors.skills ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.skills && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.skills}
                </p>
              )}
            </div>

            {/* Motivation */}
            <div className="space-y-2">
              <Label htmlFor="motivation" className="text-foreground">
                Why do you want to join DevHub? <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="motivation"
                name="motivation"
                placeholder="Share your motivation for joining our coding club and what you hope to achieve..."
                value={formData.motivation}
                onChange={handleChange}
                className={`bg-input border-border/50 min-h-24 resize-none ${errors.motivation ? 'border-destructive' : ''}`}
                disabled={isSubmitting}
              />
              {errors.motivation && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <SafeIcon name="AlertCircle" size={14} />
                  {errors.motivation}
                </p>
              )}
            </div>

            {/* Info Alert */}
            <Alert className="bg-primary/10 border-primary/30">
              <SafeIcon name="Info" size={16} className="text-primary" />
              <AlertDescription className="text-foreground/80">
                By registering, you agree to our club's bylaws and code of conduct. You'll receive updates about events, workshops, and hackathons.
              </AlertDescription>
            </Alert>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-shadow"
              >
                {isSubmitting ? (
                  <>
                    <SafeIcon name="Loader2" size={16} className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <SafeIcon name="Send" size={16} className="mr-2" />
                    Submit Registration
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="flex-1 border-border/50 hover:bg-card/50"
              >
                <SafeIcon name="X" size={16} className="mr-2" />
                Cancel
              </Button>
            </div>

            {/* Additional Links */}
            <div className="text-center pt-4 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-2">
                Want to learn more about us first?
              </p>
              <a
                href="./about-us.html"
                className="text-primary hover:text-secondary transition-colors font-medium inline-flex items-center gap-1"
              >
                <SafeIcon name="ArrowRight" size={14} />
                Learn more about DevHub
              </a>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Footer Note */}
      <div className="text-center mt-8 text-sm text-muted-foreground">
        <p>
          Questions? <a href="./contact-us.html" className="text-primary hover:text-secondary transition-colors">Contact us</a>
        </p>
      </div>
    </div>
  )
}
