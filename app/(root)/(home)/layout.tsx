import Navbar from '@/components/Navbar'
import SideBar from '@/components/SideBar'
import React, { ReactNode } from 'react'

const HomeLayout = ( {children} : {children: ReactNode }) => {
  return (
    <main className='relative h-screen overflow-y-hidden'>
        <Navbar />
        <div className='flex'>
            <SideBar />
            <section className='flex flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}                       
                </div>                
            </section>
        </div>
    </main>
  )
}

export default HomeLayout