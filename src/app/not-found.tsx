import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-playfair text-primary mb-4">找不到頁面</h2>
      <p className="text-text mb-4">抱歉，您訪問的頁面不存在。</p>
      <Link 
        href="/"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
      >
        返回首頁
      </Link>
    </div>
  );
} 