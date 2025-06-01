import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* About Me Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* 左側：照片與下方內文 */}
            <div className="flex flex-col items-center">
              {/* 第一區：大頭照和名字 */}
              <div className="mb-16">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-100 mb-8">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover scale-125"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
                <h2 className="text-xl font-playfair font-bold mb-8 text-black text-center w-80">許方綺｜Fang Chi Hsu</h2>
              </div>
            </div>
            {/* 右側：標題 About me、四段自我介紹、預留照片空格 */}
            <div className="flex flex-col items-center">
              {/* 第一區：About me */}
              <div className="mb-16 mt-16">
                <h1 className="text-xl font-playfair font-bold mb-8 text-black">About me</h1>
                <div className="space-y-6 text-black font-sans text-left max-w-sm w-full">
                  <p className="text-base">我是FC，喜歡文字與觀點的交會。</p>
                  <p className="text-base">在台灣的行銷職涯中，<br />我學會如何說服、包裝與轉化。</p>
                  <p className="text-base">在英國奢侈品銷售，<br />我學會傾聽、觀察與適應。</p>
                  <p className="text-base whitespace-nowrap">這是一場移動中的人生實驗，也是一種人生態度。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 分隔標題區塊 */}
      <section className="pt-1 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-8 text-xl font-playfair text-gray-600">The Moment the Window Opened</span>
            </div>
          </div>
        </div>
      </section>
      {/* 第二區：內文 */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-8 sm:px-12">
          <div className="space-y-4 text-black font-sans text-left">
            <p className="text-base">目前正在英國打工度假。</p>
            <p className="text-base">起初，我以為只要夠勇敢，就能換來自由；只要離開舒適圈，就會離夢想更近。但現實沒有腳本：我遇到語言的斷裂、文化的衝突、金錢的壓力，還有深夜裡數不清的自我懷疑。</p>
            <p className="text-base">「我為什麼來到這裡？」</p>
            <p className="text-base">「離開原本的舒適圈，值得嗎？」</p>
            <p className="text-base">「我正在變成什麼樣的人？」</p>
            <p className="text-base">「打工度假結束後，下一步是什麼？」</p>
            <p className="text-base">這些問題至今都還沒有一個正確答案。</p>
            <p className="text-base">我用文字整理混亂的思緒，記錄沿途的風景，也記下那些慢慢浮現的答案。</p>
            <p className="text-base">於是，這個網站誕生了。</p>
            <br/>
            <p className="text-base">「Windows to elsewhere」不只是旅行的窗景，更是通往內心對話的入口。</p>
            <p className="text-base">這裡是我的觀察筆記，也是我與世界對話的方式。</p>
          </div>
        </div>
      </section>
      {/* Footer */}
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