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
    </div>
  );
} 