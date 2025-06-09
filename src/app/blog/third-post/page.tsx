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
    </div>
  );
} 