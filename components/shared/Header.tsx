import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import roboto from '@/lib/fonts'
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className=' flex items-center justify-between' >
    <Image src="/logo.png" alt="logo" width={100} height={100} />
    <h1 className={`${roboto.className} ml-4 text-2xl font-bold`}>
          Next JS Project
        </h1>
    <nav >
        <ul>
            <li>
                <Link className='btn1 text-5xl' href="/">
                    Home
                </Link>
            </li>
            
           
        </ul>
    </nav>
 <ModeToggle/>
    </header>
  )
}

export default Header