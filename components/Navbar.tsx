'use client'

import { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import Link from 'next/link'
// import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Home className="h-full w-full text-orange-500" />
                {/* <Image src="/03.png" alt="Homve" fill className="object-contain w-100" /> */}
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Homve
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-8">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">الرئيسية</Link>
              <Link href="#services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">خدماتنا</Link>
              <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">من نحن</Link>
              <Link href="#contact" className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">اتصل بنا</Link>
            </div>
          </div>
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <span className="sr-only">افتح القائمة الرئيسية</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">الرئيسية</Link>
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">خدماتنا</Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 transition-colors">من نحن</Link>
            <Link href="tel:0565265233" className="block px-3 py-2 rounded-md text-base font-medium text-orange-500 hover:text-orange-600 transition-colors">اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
