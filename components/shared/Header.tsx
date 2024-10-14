import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import roboto from '@/lib/fonts';
import { ModeToggle } from "@/components/shared/ModeToggle";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-5 py-3 bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center mb-2 md:mb-0">
        <Image src="/logo.png" alt="logo" width={50} height={50} className="w-8 h-8 md:w-12 md:h-12" />
        <h1 className={`${roboto.className} ml-2 text-lg md:text-xl font-bold`}>
          Next JS Project
        </h1>
      </div>
      
      <nav>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link className="btn1 text-sm md:text-base hover:underline" href="/">
              Home
            </Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </nav>

      <div className="mt-2 md:mt-0">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
