"use client";
import React from 'react'
import { 
  FiUsers, FiMessageSquare, FiSmartphone, 
  FiGlobe, FiShoppingCart, FiBarChart2, 
  FiShare2, FiLayers, FiPenTool, 
  FiArrowRight
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
const ServicesGrid = () => {
    const services = [
    { title: "CRM System", desc: "إدارة العملاء والمبيعات والمتابعة بشكل احترافي ومنظم", icon: <FiUsers /> },
    { title: "AI Chatbot", desc: "بوت ذكي يرد على عملائك 24/7 ويزود مبيعاتك تلقائياً", icon: <FiMessageSquare /> },
    { title: "WhatsApp API", desc: "واتساب رسمي موثق من ميتا مع رد تلقائي وتنظيم العملاء", icon: <FaWhatsapp /> },
    { title: "Mobile Apps", desc: "تطبيقات Android و iPhone بتصميم احترافي وأداء سريع", icon: <FiSmartphone /> },
    { title: "E-Commerce", desc: "متاجر إلكترونية كاملة للبيع أونلاين بسهولة واحترافية", icon: <FiShoppingCart /> },
    { title: "Websites", desc: "مواقع احترافية للشركات والخدمات والمتاجر بأعلى جودة", icon: <FiGlobe /> },
    { title: "Social Media", desc: "إدارة السوشيال ميديا والتصميمات والمحتوى باحترافية", icon: <FiShare2 /> },
    { title: "Digital Marketing", desc: "إعلانات ممولة وتسويق رقمي لزيادة العملاء والمبيعات", icon: <FiBarChart2 /> },
    { title: "ERP & SaaS", desc: "أنظمة إدارة الشركات والمخازن والحسابات والموظفين", icon: <FiLayers /> },
    { title: "UI/UX Design", desc: "واجهات حديثة وسهلة الاستخدام للمواقع والتطبيقات", icon: <FiPenTool /> },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // الفارق الزمني بين ظهور كل كرت وآخر
      },
    },
  };

  // إعدادات حركة الكرت الواحد (Item Variants)
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut"  }
    }as const ,
  };
  return ( 
      <section className="bg-[#1a1a1a] py-20 px-6 font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* رأس القسم مع أنيميشن بسيط */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00a3ff] font-bold text-sm mb-4">خدماتنا</p>
          <h2 className="text-white text-4xl md:text-5xl font-black italic">كل اللي شغلك محتاجه</h2>
        </motion.div>

        {/* شبكة الخدمات المتحركة */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // يبدأ الأنيميشن عند ظهور 20% من القسم
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                backgroundColor: "#2d2d2d",
                borderColor: "rgba(0, 163, 255, 0.3)" 
              }}
              className="bg-[#262626] p-8 rounded-[25px] border border-white/5 cursor-default transition-colors duration-300 group flex flex-col items-center text-center shadow-lg"
            >
              {/* الأيقونة مع تأثير نبض خفيف عند الهوفر */}
              <motion.div 
                whileHover={{ rotate: 5 }}
                className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-[#00a3ff] text-3xl mb-6 shadow-inner"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* سهم التمرير المتحرك (Floating Animation) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-500">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGrid