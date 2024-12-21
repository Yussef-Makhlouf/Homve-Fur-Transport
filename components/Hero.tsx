import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,166,0,0.1),transparent_50%)]"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Text Content - Spans 5 columns */}
          <div className="lg:col-span-5 space-y-8 text-right order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">انقل أغراضك في جده</span>
              <span className="block bg-gradient-to-l from-orange-600 to-orange-400 bg-clip-text text-transparent">
                بكل راحة وأمان
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              مع هوموف لنقل الاثاث و العفش، نضمن لك تجربة نقل سلسة وآمنة
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:0565265233"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold transition-all duration-300 hover:shadow-[0_10px_20px_-10px_rgba(255,137,53,0.7)] hover:-translate-y-1"
              >
                احصل على عرض سعر
              </Link>
              <Link
                href="https://wa.me/+966565265233"
                className="px-8 py-4 rounded-xl border-2 border-orange-400 text-orange-500 font-bold transition-all duration-300 hover:bg-orange-50 hover:-translate-y-1"
              >
                WhatsApp{" "}
              </Link>
            </div>
          </div>

          {/* Image Container - Spans 7 columns */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden bg-white p-2">
                <Image
                  src="/03.png"
                  alt="خدمة النقل"
                  width={800}
                  height={800}
                  className="w-full h-auto transform transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
