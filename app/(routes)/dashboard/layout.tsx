import React, { ReactNode } from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from '@/app/_components/DashboardHeader'

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
