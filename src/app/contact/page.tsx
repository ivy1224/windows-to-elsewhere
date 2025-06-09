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
    <div className="min-h-screen flex flex-col pt-24 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 max-w-2xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-full">
            <div className="h-px min-w-[24px] bg-gray-500 flex-grow"></div>
            <span className="px-2 text-2xl font-playfair text-black text-center whitespace-nowrap">
              Write from Your Window to Mine
            </span>
            <div className="h-px min-w-[24px] bg-gray-500 flex-grow"></div>
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
              className="cursor-pointer relative w-full max-w-xs h-40 bg-[#ddd2c7] rounded-md shadow-lg flex items-center justify-center"
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
      </div>
    </div>
  );
} 