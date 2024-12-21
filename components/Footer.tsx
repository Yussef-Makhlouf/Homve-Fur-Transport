import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  خدماتنا
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      النقل المنزلي
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      النقل التجاري
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      التعبئة والتغليف
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      التخزين
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  الدعم
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      الأسئلة الشائعة
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      الأسعار
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      جدولة النقل
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base hover:text-blue-300">
                      اتصل بنا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <Link 
              href="https://fashne.net" 
              target="_blank"
              className="group inline-flex flex-col items-center space-y-2 transition-colors duration-300"
            >
              <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Designed by
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-orange-300">
                Fashne
              </span>
              <span className="text-sm text-gray-400">
                for Digital Marketing
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-blue-300">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-blue-300">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2023 سماء الأزرق للنقل. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

