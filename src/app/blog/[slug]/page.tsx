'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as postsData from '../../../data/posts';

// 文章內容
const posts = postsData.posts;

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-playfair font-bold mb-4 text-black">
            文章未找到
          </h1>
          <Link
            href="/blog"
            className="text-black hover:text-gray-600 transition-colors duration-300"
          >
            返回部落格列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 文章標題 */}
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-black">
          {post.title}
        </h1>

        {/* 文章資訊 */}
        <div className="flex items-center text-sm text-gray-500 font-inter mb-12">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        {/* 文章配圖 */}
        {post.image && (
          <div className="relative w-full aspect-square mb-12 overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* 文章內容 */}
        <div className="prose prose-lg max-w-none px-4" style={{ fontSize: '1rem' }}>
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-black font-sans">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 返回按鈕 */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
          >
            <span className="mr-2">←</span>
            返回部落格列表
          </Link>
        </div>
      </article>
    </div>
  );
} 