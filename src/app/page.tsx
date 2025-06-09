'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts as rawPosts } from '../data/posts';
import { Playfair_Display } from 'next/font/google';

const posts = [...rawPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
            <h1 className={`text-4xl md:text-6xl ${playfair.className} font-bold text-white mb-6 transition-all duration-1000 ease-out ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Windows to elsewhere
            </h1>
            <p className={`text-lg md:text-xl text-white/90 font-sans transition-all duration-1000 ease-out delay-200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
              <span className={`bg-white px-8 text-xl text-black ${playfair.className}`}>Latest from the window</span>
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
                  <h2 className={`text-lg font-semibold mb-2 text-black line-clamp-2 ${playfair.className}`}>
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
    </main>
  );
} 