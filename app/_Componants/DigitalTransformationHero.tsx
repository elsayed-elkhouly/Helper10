"use client";
import React from 'react'
import { motion } from 'framer-motion';
import heroimage from '../../public/WhatsApp Image 2026-05-11 at 4.50.22 PM.jpeg';
import Image from 'next/image';
import Link from 'next/link';
const DigitalTransformationHero = () => {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* الجزء الأيمن: المحتوى النصي */}
        <div className="text-right space-y-8 order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-[#003d6b] leading-tight"
          >
            حوّل عملك إلى نظام ذكي مع <br />
            <span className="text-[#005a9c]">Helper10</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            نحن شركاؤك في التحول الرقمي. نقدم حلولاً برمجية متكاملة واستراتيجيات تسويق مبتكرة تدفع نمو أعمالك نحو آفاق جديدة من الكفاءة والتميز التكنولوجي.
          </motion.p>

          {/* الأزرار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          > 
            <Link
              href="https://wa.me/201553132233?text=السلام عليكم، عاوز أبدأ مشروع"
              target="_blank"
              className="bg-[#005a9c] hover:bg-[#003d6b] text-white px-10 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#005a9c]/20 inline-block"
            >
              ابدأ مشروعك الآن
            </Link>
            <button className="border-2 border-gray-200 hover:border-[#005a9c] hover:text-[#005a9c] text-gray-700 px-10 py-3 rounded-xl font-bold transition-all">
              تعرف علينا
            </button>
          </motion.div>
        </div>

        {/* الجزء الأيسر: الصورة التوضيحية */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative order-1 md:order-2"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl ">
            <Image
              width={800}
              height={600}
              src={heroimage}
              alt="Data Analysis Dashboard"
            />
          </div>
          {/* تأثير ضوئي خلف الصورة */}
          <div className="absolute -inset-4 bg-linear-to-r from-blue-100 to-transparent blur-3xl -z-10 opacity-50"></div>
        </motion.div>

      </div>
    </section>)
}

export default DigitalTransformationHero