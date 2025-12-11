
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import SafeIcon from '@/components/common/SafeIcon'

interface CommitteeMember {
  name: string
  position: string
  imageUrl: string
  department?: string
}

interface CommitteeMemberCardProps {
  member: CommitteeMember
  index: number
}

export default function CommitteeMemberCard({ member, index }: CommitteeMemberCardProps) {
  // Generate initials from name
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // Generate a consistent color based on index
  const colors = [
    'from-primary to-secondary',
    'from-secondary to-accent',
    'from-accent to-primary',
    'from-primary to-accent',
  ]
  const colorClass = colors[index % colors.length]

  return (
    <div className="group relative">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card */}
      <div className="relative glass rounded-xl p-6 h-full flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300">
        {/* Avatar */}
        <Avatar className="w-16 h-16 mb-4 ring-2 ring-primary/30 group-hover:ring-primary transition-all">
          <AvatarImage  alt={member.name} />
          <AvatarFallback className={`bg-gradient-to-br ${colorClass} text-white font-bold text-lg`}>
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
          {member.name}
        </h3>

        {/* Position */}
        <p className="text-sm font-semibold text-primary mb-3">
          {member.position}
        </p>

        {/* Department Badge */}
        {member.department && (
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium">
            <SafeIcon name="Briefcase" size={12} />
            {member.department}
          </div>
        )}

        {/* Hover effect indicator */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <SafeIcon name="Star" size={16} className="text-accent fill-accent" />
        </div>
      </div>
    </div>
  )
}
