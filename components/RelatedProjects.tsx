import { getUserProjects } from '@/lib/actions'
import { UserProfile } from '@/common.types'

type Props = {
  userId: string
  projectId: string
}

import { ProjectInterface } from '@/common.types'
import Link from 'next/link'

const RelatedProjects = async ({ userId, projectId }: Props) => {
  const result = (await getUserProjects(userId)) as { user: UserProfile }

  const filteredProjects = result?.user?.projects?.edges.filter(
    ({ node }: { node: ProjectInterface }) => node?.id !== projectId
  )

  if (filteredProjects?.length === 0) return null

  return (
    <section className="flex flex-col mt-32 w-full">
      <div className="flexBetween">
        <p className="text-base font-bold">More by {result?.user?.name}</p>
        <Link href={`/profile/${userId}`} className="text-primary-purple text-base">
          View all
        </Link>
      </div>
    </section>
  )
}

export default RelatedProjects
