import Image from 'next/image'

const images = [
  { src: '/Untitled-1Artboard-10 copy.webp', alt: 'عملية نقل أثاث منزلي' },
  { src: '/Untitled-1Artboard-11 copy.webp', alt: 'تعبئة وتغليف محترف' },
  { src: '/Untitled-1Artboard-12 copy.webp', alt: 'نقل مكتبي' },
  { src: '/Untitled-1Artboard-9 copy.webp', alt: 'تخزين آمن' },
  { src: '/Untitled-1Artboard-10 copy.webp', alt: 'نقل دولي' },
  { src: '/Untitled-1Artboard-11 copy.webp', alt: 'فريق النقل المحترف' },
]

const Gallery = () => {
  return (
    <section className="relative py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,166,0,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شاهد لمحات من خدماتنا وعملياتنا
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(255,137,53,0.3)] transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery