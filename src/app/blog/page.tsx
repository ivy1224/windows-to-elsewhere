'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts as rawPosts } from '../../data/posts';

const posts = [...rawPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Blog Header */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-8 text-xl font-playfair text-black">Through the open window</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mt-8">
            「開窗的那一刻」代表我開始真正面對世界，也面對自己。
            <br className="my-8" />
            <br />
            這裡是我整理生活、分享觀點的小角落，希望透過每一篇文章，把窗外的風景，也傳遞給正在閱讀的你。
            <br />
            <br />
            - FC
          </p>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                tabIndex={0}
                legacyBehavior
              >
                <a className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-blue-400 h-full">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-lg font-semibold mb-2 text-black line-clamp-2">
                        {post.title}
                      </h2>
                      <div style={{color: '#6B7280', fontWeight: 'normal', fontSize: 13, marginBottom: 8}}>
                        {post.date || '無日期'} · {post.readTime || '無閱讀時間'}
                      </div>
                      <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
            {/* 補空格讓卡片靠左上排列 */}
            {Array.from({ length: (3 - (posts.length % 3)) % 3 }).map((_, i) => (
              <div key={`placeholder-${i}`} className="invisible" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 