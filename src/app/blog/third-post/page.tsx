'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThirdPost() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors duration-300">
            ← 返回文章列表
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-black">生活中的儀式感</h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>2024/1/31</span>
          <span className="mx-2">•</span>
          <span>3分鐘</span>
        </div>

        <div className="relative w-full mb-8">
          <Image
            src="/blog/20240131.jpeg"
            alt="生活中的儀式感"
            width={1200}
            height={800}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none" style={{ fontSize: '1rem' }}>
          <p className="text-gray-800 mb-6">
            「誒桌上的花要枯掉了！等等再去超市買一束。」
          </p>

          <p className="text-gray-800 mb-6">
            在英國不管哪一個超市，門口絕對是一束束的花，一束約台幣幾百元上下，有黃、有紅、有綠、有白….，拿起花束的人不分老少、性別，凡是看順眼的便拿起結帳。
          </p>

          <p className="text-gray-800 mb-6">
            『儀式感。』
          </p>

          <p className="text-gray-800 mb-6">
            這三個字似乎貫穿了英國人的血脈，11月走在英國街頭，聖誕節的氣氛已瀰漫在各個角落，五彩繽紛的聖誕樹、悅耳的聖誕歌曲，再配上寒冷的天氣，此時此刻，感到無比的幸福。
          </p>

          <p className="text-gray-800 mb-6">
            生活中的小確幸。
          </p>

          <p className="text-gray-800 mb-6">
            有一天早晨特別早起，天空還飄著小雨，與居住在倫敦的朋友跳上了公車，奔向一個禮拜只開一天的花市(Columbia Road Flower Market)，一下公車人人拿著一束束用牛皮紙包著的花朝我們走來。
          </p>

          <p className="text-gray-800 mb-6">
            僅為短短的500公尺的市集，集結在哥倫比亞街道，除了一攤一攤的花店併排著，另一排則是咖啡店、麵包店、二手小店，讓整個街道充滿了生命力。
          </p>

          <p className="text-gray-800 mb-6">
            一個簡單的假日，手拿著一杯咖啡，抱著僅用牛皮紙包裝的花束，走在倫敦街頭，
          </p>

          <p className="text-gray-800 mb-6">
            .
          </p>

          <p className="text-gray-800 mb-6">
            .
          </p>

          <p className="text-gray-800 mb-6">
            .
          </p>

          <p className="text-gray-800 mb-6">
            原來幸福就是那麼簡單。
          </p>
        </div>
      </article>
      {/* Footer（與首頁一致） */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 mt-16">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="text-gray-700 font-playfair text-lg mb-2" style={{ marginBottom: '2.5rem' }}>"Life is made of temporary elsewheres."</div>
          <div className="text-gray-500 text-base flex flex-col md:flex-row md:justify-center md:space-x-6 items-center">
            <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-pink-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>IG｜@windows_to_elsewhere</span>
            <span className="hidden md:inline">｜</span>
            <span className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.876 1.795l-7.5 5.625a2.25 2.25 0 01-2.748 0l-7.5-5.625A2.25 2.25 0 012.25 6.993V6.75" /></svg>Email｜<a href="mailto:windowstoelsewhere@gmail.com" className="underline hover:text-gray-700">windowstoelsewhere@gmail.com</a></span>
          </div>
          <div className="text-gray-400 text-sm mt-4">⟢ Made with ☕ in United Kingdom ｜ © 2025 Windows to elsewhere</div>
        </div>
      </footer>
    </div>
  );
} 