import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import  roboto  from '@/lib/fonts';
import { ModeToggle } from "@/components/shared/ModeToggle";
import GlobalSearchBar from './shared/Searchbar';

const Header = () => {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 px-4 py-3">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Next JS Project Logo" width={48} height={48} className="w-12 h-12" />
            <h1 className={`${roboto.className} ml-2 text-xl font-bold`}>
              Next JS Project
            </h1>
          </Link>

          <GlobalSearchBar className="w-full lg:w-auto" />

          <nav className="w-full lg:w-auto">
            <ul className="flex flex-wrap justify-center lg:justify-end gap-2">
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/aichat">AI CHATBOT</NavLink></li>
              <li><NavLink href="/dashboard" className="btn3">Dashboard</NavLink></li>
              <li className="flex">
                <NavLink href="/signin" className="btn2 mr-2">Sign In</NavLink>
                <NavLink href="/signup" className="btn2">Sign Up</NavLink>
              </li>
            </ul>
          </nav>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, className = "btn1", children }) => (
  <Link href={href} className={`${className} text-sm hover:underline`}>
    {children}
  </Link>
);

export default Header;