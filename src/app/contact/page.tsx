'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function ContactLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_31aru7h', // EmailJS Service ID
        'template_c00up3f', // EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'windowstoelsewhere@gmail.com'
        },
        'VMA8avtqdPgSvFq2P' // EmailJS Public Key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 pt-24">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center">
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
          <span className="px-8 text-xl font-playfair text-black">Write from Your Window to Mine</span>
          <div className="h-[1px] bg-gray-200 w-[400px]"></div>
        </div>
        <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mt-8">
        每段旅程都值得一段對話，歡迎寄來屬於你的故事。
        </p>
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            className="cursor-pointer relative w-64 h-40 bg-[#ddd2c7] rounded-md shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <div className="absolute bottom-0 w-0 h-0 border-l-[128px] border-r-[128px] border-b-[80px] border-l-transparent border-r-transparent border-b-[#c7b9a9] rounded-t" />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8 mt-4 relative"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
            aria-label="關閉信封"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 font-noto">來信吧 ✉️</h2>
          <p className="mb-6 text-gray-600 font-noto">
            無論你在哪個時區、什麼心情，都可以在這裡留下話語。
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="姓名 Name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c7b9a9] font-noto"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="信箱 Email"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c7b9a9] font-noto"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="你想對我說什麼？ What do you want to say to me?"
              rows={4}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c7b9a9] font-noto"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`w-full bg-[#c7b9a9] text-white px-6 py-2 rounded-lg hover:bg-[#b4a89a] transition font-noto ${
                (isSubmitting || !isFormValid) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '寄送中...' : '寄出這封信'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4 font-noto">
                信件已成功寄出！謝謝你的來信。
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-4 font-noto">
                抱歉，寄信時發生錯誤，請稍後再試。
              </p>
            )}
          </form>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-4 mt-16 w-full">
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