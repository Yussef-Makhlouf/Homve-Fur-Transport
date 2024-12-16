import Image from 'next/image'
import { Truck, Home, Building, Box, Globe, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'النقل المنزلي',
    description: 'خدمات نقل منزلية شاملة مع عناية فائقة بجميع ممتلكاتك.',
    icon: Home,
    image: '/cover 03.webp'
  },
  {
    name: 'النقل التجاري',
    description: 'حلول نقل متخصصة للشركات والمكاتب مع الحد الأدنى من تعطيل الأعمال.',
    icon: Building,
    image: '/cover 03.webp'
  },
  {
    name: 'التعبئة والتغليف',
    description: 'خدمات تعبئة احترافية باستخدام مواد عالية الجودة لحماية مقتنياتك.',
    icon: Box,
    image: '/cover 03.webp'
  },
  {
    name: 'النقل لمسافات طويلة',
    description: 'خدمات نقل آمنة وفعالة للانتقال بين المدن والمناطق البعيدة.',
    icon: Truck,
    image: '/cover 03.webp'
  },
  {
    name: 'النقل الدولي',
    description: 'خدمات نقل دولية شاملة مع التعامل مع كافة الإجراءات الجمركية.',
    icon: Globe,
    image: '/cover 03.webp'
  },
  {
    name: 'التخزين الآمن',
    description: 'مرافق تخزين آمنة ومكيفة لتلبية احتياجات التخزين قصيرة وطويلة المدى.',
    icon: ShieldCheck,
    image: '/cover 03.webp'
  },
]

const ServiceCardsWithImages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">خدماتنا المتميزة</h2>
          <p className="mt-4 text-xl text-gray-600">نقدم مجموعة شاملة من خدمات النقل لتلبية جميع احتياجاتك</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  className="w-full h-full object-center"
                  loading="lazy"
                  objectFit="cover"
              
                />
                <div  >
                  <service.icon className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceCardsWithImages

