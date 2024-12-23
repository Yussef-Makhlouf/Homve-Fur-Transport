import { Truck, Home, Building, Box, Globe, ShieldCheck } from 'lucide-react'

const services = [
  {
    name: 'النقل المنزلي',
    description: 'خدمات نقل منزلية شاملة مع عناية فائقة بجميع ممتلكاتك.',
    icon: Home,
  },
  {
    name: 'النقل التجاري',
    description: 'حلول نقل متخصصة للشركات والمكاتب مع الحد الأدنى من تعطيل الأعمال.',
    icon: Building,
  },
  {
    name: 'التعبئة والتغليف',
    description: 'خدمات تعبئة احترافية باستخدام مواد عالية الجودة لحماية مقتنياتك.',
    icon: Box,
  },
  {
    name: 'النقل لمسافات طويلة',
    description: 'خدمات نقل آمنة وفعالة للانتقال بين المدن والمناطق البعيدة.',
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
    <section id="services" className="relative py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,166,0,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            خدماتنا المتميزة
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات النقل لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(255,137,53,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
