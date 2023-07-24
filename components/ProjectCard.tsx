'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  id: string
  title: string
  image: string
  name: string
  avatarUrl: string
  userId: string
}

const ProjectCard = ({ image, title, name, avatarUrl, userId, id }: Props) => {
  const [randomLikes, setRandomLikes] = useState(0)
  const [randomViews, setRandomViews] = useState('')

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 1000))
    setRandomViews((Math.random() * 1000).toFixed(2) + 'k')
  }, [])

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link href={`/project/${id}`} className="flexCenter relative w-full h-full">
        <Image
          src={image}
          alt={'project-image'}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>

      <div className="flexBetween w-ful px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={24}
              height={24}
              className="rounded-full"
              alt="profile-image"
            />
            <p className="text-sm font-medium px-1">{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src={'/hearth.svg'} width={13} height={12} alt="heart-icon" />
            <p className="text-sm">{randomLikes}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src={'/eye.svg'} width={13} height={12} alt="eye-icon" />
            <p className="text-sm">{randomViews}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
