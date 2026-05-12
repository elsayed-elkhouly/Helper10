import Image from "next/image";
import DigitalTransformationHero from "./_Componants/DigitalTransformationHero";
import ServicesGrid from "./_Componants/ServicesGrid";
import WhyUs from "./_Componants/WhyUs";
import Footer from "./_Componants/Footer";
import Link from "next/link";
import heroimage from '../public/Copilot_20260512_161244 (1).png';
export default function Home() {
  return (
    <>
      <nav className="px-6 py-4 bg-[#1A1A1A] border-b border-white/5 font-sans" dir="rtl">
        <ul className="flex items-center justify-between max-w-7xl mx-auto">

          {/* اللوجو - مستوحى من image_d5358c.png */}
          <li className="flex flex-col items-start">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-1">
              <Image src={heroimage} alt="Logo" width={100} height={100} className="w-full" />

            </div>
          </li>

          {/* زر العمل - تم تطبيق تدرج الشعار عليه */}
          <li>

            <Link
              href="https://wa.me/201553132233?text=السلام عليكم، عاوز أبدأ مشروع"
              target="_blank"
              className="group relative flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(0,163,255,0.3)] md:w-[158px]"

            >
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#70a449] to-[#00a3ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur"></div>

              <div className="relative flex items-center gap-2">

                <span>ابدأ الآن</span>
              </div>
            </Link>


          </li>

        </ul>
      </nav>
      <DigitalTransformationHero />
      <ServicesGrid />
      <WhyUs />
      <Footer />
    </>
  );
}
