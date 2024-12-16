import { Truck, Home, Building, Box, Globe, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'النقل المنزلي',
    description: 'نقدم خدمات نقل منزلية شاملة مع عناية فائقة بجميع ممتلكاتك.',
    icon: Home,
  },
  {
    name: 'النقل التجاري',
    description: 'خدمات نقل متخصصة للشركات والمكاتب مع أقل قدر من التعطيل لأعمالك.',
    icon: Building,
  },
  {
    name: 'التعبئة والتغليف',
    description: 'خدمات تعبئة احترافية باستخدام أفضل المواد لحماية مقتنياتك.',
    icon: Box,
  },
  {
    name: 'النقل لمسافات طويلة',
    description: 'خبرة في إدارة عمليات النقل لمسافات طويلة بين المدن والمناطق.',
    icon: Truck,
  },
  {
    name: 'النقل الدولي',
    description: 'خدمات نقل دولية شاملة مع التعامل مع كافة الإجراءات الجمركية.',
    icon: Globe,
  },
  {
    name: 'التخزين الآمن',
    description: 'مرافق تخزين آمنة ومكيفة لتلبية احتياجات التخزين قصيرة وطويلة المدى.',
    icon: ShieldCheck,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">خدماتنا المتميزة</h2>
          <p className="mt-4 text-xl text-gray-600">نقدم مجموعة شاملة من خدمات النقل لتلبية جميع احتياجاتك</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

