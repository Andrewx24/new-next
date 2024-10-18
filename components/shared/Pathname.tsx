'use client';
import { usePathname } from 'next/navigation';

import React from 'react'

const Pathname = () => {
    const pathname = usePathname();


  return (
    <div>

        <h1> Your current Pathname: {pathname}</h1>
    </div>
  )
}

export default Pathname