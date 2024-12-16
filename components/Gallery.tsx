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
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">معرض أعمالنا</h2>
          <p className="mt-4 text-xl text-gray-600">شاهد لمحات من خدماتنا وعملياتنا</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-lg font-semibold px-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

