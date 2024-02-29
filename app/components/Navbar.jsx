import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './tiger-logo.png'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src={Logo}
        alt={'Tiger blog logo'}
        width={70}
        quality={100}
        placeholder='blur'
      />
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
      <Link href='/newsletter'>Newsletter</Link>
    </nav>
  )
}
