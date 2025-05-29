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
        <div className="prose prose-lg max-w-none" style={{ fontSize: '1rem' }}>
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
      {/* Footer（與首頁一致） */}
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
    </div>
  );
} 