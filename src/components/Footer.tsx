'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 主要內容區塊 */}
        <div className="bg-white rounded-lg border border-gray-100 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* 網站資訊 */}
            <div>
              <h3 className="text-lg font-playfair font-bold mb-4 text-black">Windows to elsewhere</h3>
              <p className="text-black text-sm font-sans mb-4">
                這是一場移動中的人生實驗，也是一種人生態度。
              </p>
            </div>

            {/* 快速連結 */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-black font-inter">快速連結</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-black hover:text-gray-600 text-sm font-sans">
                    首頁
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-black hover:text-gray-600 text-sm font-sans">
                    部落格
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-black hover:text-gray-600 text-sm font-sans">
                    經歷
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black hover:text-gray-600 text-sm font-sans">
                    聯絡我
                  </Link>
                </li>
              </ul>
            </div>

            {/* 社群連結 */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-black font-inter">社群連結</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 text-sm font-sans"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-600 text-sm font-sans"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-sans text-center">
            © {new Date().getFullYear()} Windows to elsewhere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 