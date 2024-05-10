import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 ">
      <Link
      href='/' className="flex items-center gap-1">
        <Image 
        src = "/icons/Logo.png"
        width={30}
        height={30}
        alt="zoom logo"
        className='max-sm:size-10'
        />
        <p className="text-[24px] font-bold max-sm:hidden">Zoomify</p>
      </Link>

      <div className="flex-between gap-5">
       {/* Clerk - User management */}
       <MobileNav />

      </div>
    </nav>
  )
}

export default Navbar