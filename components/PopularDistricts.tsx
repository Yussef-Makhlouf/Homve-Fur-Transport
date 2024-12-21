'use client'
import { MapPin, Building2, Car, ShoppingBag, Palmtree } from 'lucide-react'

const districts = [
  {
    name: 'حي الحمراء',
    description: 'من أرقى أحياء جدة السكنية، يتميز بقربه من الكورنيش وتوفر المجمعات التجارية الفاخرة',
    icon: Building2,
    features: ['مجمعات سكنية راقية', 'مطاعم عالمية', 'مراكز تسوق']
  },
  {
    name: 'حي الروضة',
    description: 'حي سكني راقٍ يضم العديد من المدارس العالمية والمرافق الترفيهية المتميزة',
    icon: Palmtree,
    features: ['مدارس عالمية', 'حدائق عامة', 'مراكز طبية']
  },
  {
    name: 'حي الشاطئ',
    description: 'يتميز بإطلالته المباشرة على البحر الأحمر وقربه من أشهر شواطئ جدة',
    icon: MapPin,
    features: ['واجهة بحرية', 'منتجعات', 'مطاعم بحرية']
  },
  {
    name: 'حي الفيصلية',
    description: 'من الأحياء التجارية النشطة، يضم العديد من المحلات والأسواق المتنوعة',
    icon: ShoppingBag,
    features: ['أسواق شعبية', 'مراكز تجارية', 'مطاعم متنوعة']
  },
  {
    name: 'حي السلامة',
    description: 'حي حيوي يجمع بين السكن والتجارة، مع سهولة الوصول لكافة مناطق جدة',
    icon: Car,
    features: ['مجمعات سكنية', 'مدارس', 'أسواق']
  },
  {
    name: 'حي الزهراء',
    description: 'من الأحياء العائلية المميزة، يضم العديد من المرافق التعليمية والترفيهية',
    icon: MapPin,
    features: ['حدائق', 'مدارس', 'مراكز ترفيهية']
  }
]

const PopularDistricts = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            خدمات النقل في أحياء جدة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات نقل احترافية في جميع أحياء جدة الراقية والحيوية
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {districts.map((district, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-[0_10px_20px_-10px_rgba(255,137,53,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <district.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                {district.name}
              </h3>
              
              <p className="mt-4 text-gray-600 leading-relaxed">
                {district.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {district.features.map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDistricts
