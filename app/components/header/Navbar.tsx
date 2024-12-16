import { GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'

function Navbar() {
  return (
    <div className='flex space-x-4 justify-end items-center' >
      <p className='hidden md:inline cursor-pointer'>Airbnb your home</p>
      <GlobeAltIcon className='h-6 cursor-pointer' />
      <div className='flex space-x-2 border-2 p-2 rounded-full'  >
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6' />
      </div>
    </div>
  )
}

export default Navbar
