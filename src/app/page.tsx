'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts as rawPosts } from '../data/posts';

const posts = [...rawPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 圖片已經快取時也能正確顯示字
    if (imgRef.current && imgRef.current.complete) {
      setTextVisible(true);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            ref={imgRef}
            src="/main.jpeg"
            alt="Hero Background"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            onLoad={() => setTextVisible(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4 z-20">
          <div className="max-w-3xl">
            <h1 className={`whitespace-nowrap text-xl md:text-2xl lg:text-4xl xl:text-6xl font-playfair font-bold text-white mb-6 transition-all duration-1000 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Windows to elsewhere
            </h1>
            <p className={`whitespace-nowrap text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-sans transition-all duration-1000 ease-out delay-200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              這是一場移動中的人生實驗，也是一種人生態度。
            </p>
          </div>
        </div>
      </section>

      {/* 簡介段落 */}
      <section className="py-20 relative">
        <div className="text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-px bg-gray-300" />
            <div className="relative w-full flex justify-center items-center">
              <span className="text-base md:text-lg text-gray-700 leading-relaxed font-sans font-medium relative z-10">
                用腳走世界，用眼記錄細節，用心感受自己的改變。
              </span>
              {/* 腳印動畫容器暫時隱藏 */}
              {/*
              <div className="absolute left-0 top-0 w-full h-40 pointer-events-none z-0">
                <span className="footprint-svg" style={{ left: '0%',  top: '10%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '10%',  top: '30%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '20%',  top: '50%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '30%', top: '20%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '40%', top: '80%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '50%', top: '25%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '60%', top: '70%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '70%', top: '40%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '80%', top: '60%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
                <span className="footprint-svg" style={{ left: '90%', top: '80%', position: 'absolute' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ transform: 'rotate(90deg)' }}>
                    <ellipse cx="20" cy="22" rx="7" ry="10" fill="#888" />
                    <ellipse cx="27" cy="10" rx="2" ry="3" fill="#888" />
                    <ellipse cx="24" cy="6" rx="1.5" ry="2" fill="#888" />
                    <ellipse cx="20" cy="5" rx="1.3" ry="1.8" fill="#888" />
                    <ellipse cx="16" cy="7" rx="1.1" ry="1.6" fill="#888" />
                    <ellipse cx="13" cy="11" rx="1.3" ry="1.8" fill="#888" />
                  </svg>
                </span>
              </div>
              */}
            </div>
            <div className="w-16 h-px bg-gray-300" />
          </div>
        </div>
      </section>

      {/* Latest from the window */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-8 text-xl font-playfair text-black">Latest from the window</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 block focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2 text-black line-clamp-2">
                    {post.title}
                  </h2>
                  <div style={{color: '#6B7280', fontWeight: 'normal', fontSize: 13, marginBottom: 8}}>
                    {post.date || '無日期'} · {post.readTime || '無閱讀時間'}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 mt-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="text-gray-700 font-playfair text-lg mb-2" style={{ marginBottom: '2.5rem' }}>“Life is made of temporary elsewheres.”</div>
          <div className="text-gray-500 text-base flex flex-col md:flex-row md:justify-center md:space-x-6 items-center">
            <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-pink-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>IG｜@windows_to_elsewhere</span>
            <span className="hidden md:inline">｜</span>
            <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.795l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75" /></svg>Email｜<a href="mailto:windowstoelsewhere@gmail.com" className="underline hover:text-gray-700">windowstoelsewhere@gmail.com</a></span>
          </div>
          <div className="text-gray-400 text-sm mt-4">⟢ Made with ☕ in United Kingdom ｜ © 2025 Windows to elsewhere</div>
        </div>
      </footer>
    </main>
  );
} 