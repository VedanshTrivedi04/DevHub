import { DEVHUB_CONTACT_INFO } from '@/data/ContactInfo'
import SafeIcon from '@/components/common/SafeIcon'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ContactInfo() {
  const contactInfo = DEVHUB_CONTACT_INFO

  return (
    <div className="space-y-6">
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SafeIcon name="MapPin" size={24} className="text-primary" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="font-semibold">{contactInfo.address.line1}</p>
          <p className="text-muted-foreground">{contactInfo.address.city}</p>
          <p className="text-muted-foreground">{contactInfo.address.zip}</p>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SafeIcon name="Mail" size={24} className="text-primary" />
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-primary hover:text-primary/80 transition-colors break-all"
          >
            {contactInfo.email}
          </a>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SafeIcon name="Phone" size={24} className="text-primary" />
            Phone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            {contactInfo.phone}
          </a>
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SafeIcon name="Share2" size={24} className="text-primary" />
            Follow Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                title={link.platform}
              >
                <SafeIcon name={link.iconName} size={24} className="text-primary" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}