"use client";
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
const Footer = () => {
  const [message, setMessage] = useState("");

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، ${message}`
  );
  return (
    <footer className="bg-[linear-gradient(135deg,#0a2a3f_0%,#041d2e_50%,#020c15_100%)] pt-24 pb-10 text-white font-sans" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Call to Action Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            مستني إيه؟ ابدأ دلوقتي!
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            تواصل معنا وهنساعدك تختار الحل المناسب لشغلك
          </p>
        </motion.div>
        {/* <div className="flex items-center overflow-hidden rounded-2xl">
          <input
            type="text"
            placeholder="اكتب اسمك أو رقمك..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="grow bg-[#1a2e3c]/50 p-5 text-right outline-none focus:bg-[#1a2e3c] transition-all text-white placeholder:text-gray-500"
          />

          <Link
            href={`https://wa.me/201553132233?text=${whatsappMessage}`}
            target="_blank"
            className="ml-auto"
          >
            <button className="bg-[#003d6b] hover:bg-[#005a9c] px-10 py-5 font-bold flex items-center justify-center gap-2 transition-all group border-r border-white/5">
              تواصل معنا
              <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </button>
          </Link>
        </div> */}


        {/* Lead Generation Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row gap-0 max-w-2xl mx-auto mb-32 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <input
            type="text"

            value={message}
            placeholder="اكتب اسمك أو رقمك..."
            onChange={(e) => setMessage(e.target.value)}
            className="grow bg-[#1a2e3c]/50 p-5 text-right outline-none focus:bg-[#1a2e3c] transition-all text-white placeholder:text-gray-500"
          />
          <Link
            href={`https://wa.me/201553132233?text=${whatsappMessage}`}
             target="_blank"
          >
            <button className="bg-[#003d6b] hover:bg-[#005a9c] px-10 py-5 font-bold flex items-center justify-center gap-2 transition-all group border-r border-white/5">
              تواصل معنا <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>

        {/* Bottom Footer Credits */}
        <div className="border-t border-white/5 pt-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span>© 2025 <span className="text-[#00a3ff] font-bold">Helper10</span></span>
            <span>— جميع الحقوق محفوظة</span>
          </div>
          <span className="hidden md:block">|</span>
          <div className="flex flex-wrap justify-center gap-4">
            <span>برمجة</span>
            <span>•</span>
            <span>تسويق رقمي</span>
            <span>•</span>
            <span>حلول ذكاء اصطناعي</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer