import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className='flex items-center justify-between boader shadow-sm p-5'>
      <Image
      src={'./logo-1.svg'}
        alt={'logo-1'}
        height={80}
        width={80}
      />
      <Button>Get Started</Button>
    </div>
  )
}

export default Header
