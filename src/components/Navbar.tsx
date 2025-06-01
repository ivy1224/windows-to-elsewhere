'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 h-24">
      {/* 手機漢堡按鈕，浮在最上層 */}
      <button
        className="md:hidden fixed top-4 right-2 z-[9999] flex items-center justify-center w-12 h-12 px-0 py-0 border rounded bg-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-24 z-0 relative">
        {/* Logo */}
        <Link href="/" className="text-black font-playfair text-xl hover:text-gray-600 transition-colors duration-300 pl-2 md:pl-4 py-3">
          Windows to elsewhere
        </Link>
        {/* 桌面選單 */}
        <div className="hidden md:flex space-x-8 pr-2 md:pr-6">
          <Link href="/" className="text-black hover:text-gray-600">首頁</Link>
          <Link href="/about" className="text-black hover:text-gray-600">關於我</Link>
          <Link href="/blog" className="text-black hover:text-gray-600">部落格</Link>
          <Link href="/contact" className="text-black hover:text-gray-600">聯絡</Link>
        </div>
        {/* 手機下拉選單 */}
        {isOpen && (
          <div className="fixed left-0 right-0 top-20 md:hidden bg-white border-t border-gray-200 shadow-lg z-[9998]">
            <div className="py-4 space-y-2">
              <Link href="/" className="block text-black font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>首頁</Link>
              <Link href="/about" className="block text-black font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>關於我</Link>
              <Link href="/blog" className="block text-black font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>部落格</Link>
              <Link href="/contact" className="block text-black font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setIsOpen(false)}>聯絡</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 