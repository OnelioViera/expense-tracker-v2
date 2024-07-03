import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sign } from 'crypto'
import { SignedIn, SignIn, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex items-center justify-between boader shadow-sm p-5'>
      <Image
        src={'./logo-1.svg'}
        alt={'logo-1'}
        height={80}
        width={80}
      />
      <a
        className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        href="/sign-in"
      >
        Get Started
      </a>
    </div>
  )
}

export default Header
