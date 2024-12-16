import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="relative bg-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 bg-blue-700 sm:bg-transparent">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-right">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">انقل أغراضك بكل</span>{' '}
                <span className="block text-blue-300">راحة وأمان</span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                مع سماء الأزرق للنقل، نضمن لك تجربة نقل سلسة وآمنة. فريقنا المحترف يهتم بكل التفاصيل لضمان وصول ممتلكاتك بأمان إلى وجهتها الجديدة.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-colors">
                    احصل على عرض سعر
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:mr-3">
                  <Link href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10 transition-colors">
                  
                    استكشف خدماتنا
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
      <Image
  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
  src="/03.png"
  alt="خدمة النقل من سماء الأزرق"
  loading="lazy"
  width={500} // Specify an appropriate width
  height={500} // Specify an appropriate height
  style={{
    objectFit: 'cover',
    objectPosition: 'center',
    paddingBlock: '10px',
    borderRadius: '10px',
    margin: '0 auto',
  }}
/>

      </div>
    </div>
  )
}

export default Hero

