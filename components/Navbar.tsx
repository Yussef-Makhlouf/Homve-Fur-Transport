'use client'

import { useState } from 'react'
import { Truck, Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Truck className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">سماء الأزرق للنقل</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">الرئيسية</Link>
              <Link href="#services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">خدماتنا</Link>
              <Link href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">من نحن</Link>
              <Link href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">اتصل بنا</Link>
            </div>
          </div>
          <div className="-ml-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors">الرئيسية</Link>
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors">خدماتنا</Link>
            <Link href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors">من نحن</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition-colors">اتصل بنا</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

