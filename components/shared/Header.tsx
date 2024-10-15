import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import roboto from '@/lib/fonts'
import { ModeToggle } from "@/components/shared/ModeToggle";
import GlobalSearchBar from './shared/Searchbar';


const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-5 py-3 bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center mb-2 md:mb-0">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Next JS Project Logo" width={50} height={50} className="w-8 h-8 md:w-12 md:h-12" />
          <h1 className={`${roboto.className} ml-2 text-lg md:text-xl font-bold`}>
            Next JS Project
          </h1>
        </Link>
      </div>
      <GlobalSearchBar />
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-wrap justify-center md:justify-end gap-2">
          <li>
            <Link href="/" className="btn1 text-sm md:text-base hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="btn1 text-sm md:text-base hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/aichat" className="btn1 text-sm md:text-base hover:underline">
              AI CHATBOT
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="btn3 text-sm md:text-base hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/signin" className="btn2 text-sm md:text-base hover:underline">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/signup" className="btn2 text-sm md:text-base hover:underline">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-4 md:mt-0 md:ml-4">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;