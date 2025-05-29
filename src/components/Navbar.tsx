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
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 