'use client';

import React from 'react';
import Image from 'next/image';

export default function Experience() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* About Me Section */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-100 mx-auto mb-12">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="object-cover scale-125"
                style={{ objectPosition: 'center' }}
              />
            </div>

            {/* About Me Content */}
            <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8 text-black">
              關於我
            </h1>
            <div className="space-y-6 text-black font-sans">
              <p className="text-lg">
                我是FC，喜歡文字與觀點的交會。
              </p>
              <p className="text-lg">
                在台灣的行銷職涯中，我學會如何說服、包裝與轉化。
              </p>
              <p className="text-lg">
                在英國奢侈品銷售，我學會傾聽、觀察與適應。
              </p>
              <p className="text-lg">
                這是一場移動中的人生實驗，也是一種人生態度。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 