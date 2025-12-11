
import CommitteeMemberCard from './CommitteeMemberCard'
import { COMMITTEE_MEMBERS } from '@/data/CommitteeMembers'

export default function CoreCommitteeGrid() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {COMMITTEE_MEMBERS.map((member, index) => (
          <CommitteeMemberCard key={`${member.name}-${index}`} member={member} index={index} />
        ))}
      </div>
    </div>
  )
}
