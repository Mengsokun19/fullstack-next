import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'

const NavBar = () => {
  const session = null

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart   gap-10">
        <Link href={'/'}>
          <Image src="/logo.svg" alt="logo" width={115} height={40} />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <li className="cursor-pointer">{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href={'/create-project'}>Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  )
}

export default NavBar