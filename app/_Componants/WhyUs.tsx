"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { FiShield, FiClock, FiHeadphones, FiDollarSign } from 'react-icons/fi';
const WhyUs = () => {
    const features = [
    {
      title: "جودة مضمونة",
      desc: "كل مشروع ستسلّم بأعلى معايير الجودة والاحترافية",
      icon: <FiShield />,
      delay: 0.1,
      gridClass: "md:col-span-1"
    },
    {
      title: "التسليم في الوقت",
      desc: "نلتزم بمواعيد التسليم المتفق عليها دون تأخير",
      icon: <FiClock />,
      delay: 0.2,
      gridClass: "md:col-span-1"
    },
    {
      title: "دعم 24/7",
      desc: "فريق دعم متاح في أي وقت لحل أي مشكلة تواجهك",
      icon: <FiHeadphones />,
      delay: 0.3,
      gridClass: "md:col-span-1"
    },
    {
      title: "أسعار تنافسية",
      desc: "حلول احترافية بأسعار تناسب جميع أحجام الأعمال",
      icon: <FiDollarSign />,
      delay: 0.4,
      gridClass: "md:col-start-2 md:col-span-1" // لعمل التوزيع غير المنتظم كما في الصورة
    }
  ];
  return (
      <section className="py-20 px-6 bg-[#f9fafb]" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* عنوان القسم */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00a3ff] font-bold text-3xl mb-2"
          >
            ليه Helper10؟
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-black text-5xl font-black leading-tight"
          >
            اللي بيميزنا
          </motion.h2>
        </div>

        {/* شبكة الخدمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#00a3ff] hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* أيقونة الخدمة */}
              <div className="w-16 h-16 bg-linear-to-br from-[#005a9c] to-[#00a3ff] rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>

              {/* عنوان الخدمة */}
              <h3 className="text-xl font-bold text-[#00a3ff] mb-3">{service.title}</h3>
              
              {/* وصف الخدمة */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">{service.desc}</p>

              {/* زر التفاصيل */}
             
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyUs