import React from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'; 
import Loginform from './Loginform';
export default function Navbar() {
  return (
    <nav className='flex items-center justify-between'>

        <div className='inline-block group'>
        <Link href="/" className='text-2xl font-bold'>
        Daily blog
        </Link>

         <div className=' h-1 w-0  group-hover:w-full transition-all  bg-green-500 
         '></div>

        </div>
       <Loginform/>

    </nav>
  )
}


 
