'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-black font-playfair text-xl hover:text-gray-600 transition-colors duration-300">
            Windows to elsewhere
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-black hover:text-gray-600 transition-colors duration-300">
              首頁
            </Link>
            <Link href="/about" className="text-black hover:text-gray-600 transition-colors duration-300">
              關於我
            </Link>
            <Link href="/blog" className="text-black hover:text-gray-600 transition-colors duration-300">
              部落格
            </Link>
            {/* <Link href="/map-diary" className="text-black hover:text-gray-600 transition-colors duration-300">
              地圖日記
            </Link> */}
            <Link href="/contact" className="text-black hover:text-gray-600 transition-colors duration-300">
              聯絡
            </Link>
          </div>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-400 hover:text-black hover:border-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow rounded-b-lg py-4 px-2 space-y-2 animate-fade-in">
            <Link href="/" className="block text-black px-4 py-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              首頁
            </Link>
            <Link href="/about" className="block text-black px-4 py-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              關於我
            </Link>
            <Link href="/blog" className="block text-black px-4 py-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              部落格
            </Link>
            {/* <Link href="/map-diary" className="block text-black px-4 py-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              地圖日記
            </Link> */}
            <Link href="/contact" className="block text-black px-4 py-2 rounded hover:bg-gray-100" onClick={() => setIsOpen(false)}>
              聯絡
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 