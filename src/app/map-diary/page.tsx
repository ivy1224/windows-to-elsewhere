'use client';
import React, { useState } from 'react';

const countries = [
  {
    name: '英國',
    left: '38%',
    top: '32%',
    image: '/map-diary/uk.jpg', // 請將你的英國照片放到 public/map-diary/uk.jpg
    text: '倫敦的霧、蘇格蘭的湖、還有那杯最溫暖的下午茶。這是我在英國最深刻的回憶。'
  },
  // 之後可以再加更多國家
];

export default function MapDiary() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <p className="text-gray-400 text-lg">地圖日記功能尚未開放，敬請期待！</p>
    </div>
  );
} 