import { CheckCircle, Star, Shield, Clock, Truck, Settings } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'خبرة تفوق 15 عاماً في نقل الأثاث',
    description: 'نقدم خدمات نقل احترافية موثوقة في جدة منذ أكثر من 15 عاماً'
  },
  {
    icon: Shield,
    title: 'فريق متخصص في فك وتركيب الأثاث',
    description: 'نجارين وفنيين محترفين مدربين على التعامل مع جميع أنواع الأثاث'
  },
  {
    icon: Truck,
    title: 'أسطول شاحنات مجهز للنقل الآمن',
    description: 'شاحنات حديثة مجهزة بأحدث معدات النقل والتغليف لحماية أثاثك'
  },
  {
    icon: Clock,
    title: 'خدمة عملاء على مدار 24 ساعة',
    description: 'فريق خدمة عملاء متاح دائماً للرد على استفساراتك وطلباتك'
  },
  {
    icon: Shield,
    title: 'ضمان شامل على نقل العفش',
    description: 'نقدم ضمان كامل على سلامة الأثاث أثناء النقل والفك والتركيب'
  },
  {
    icon: Settings,
    title: 'حلول نقل مخصصة حسب الطلب',
    description: 'نصمم خطة نقل تناسب احتياجاتك وميزانيتك بدقة عالية'
  }
]

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,166,0,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center space-y-6">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">شركة نقل عفش في جدة</h2>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            لماذا تختار هوم موف لنقل الأثاث؟
          </h3>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
            نحن شركة متخصصة في نقل الأثاث في جدة، نقدم خدمات نقل العفش المنزلي والمكتبي مع ضمان الجودة والأمان. فريقنا المحترف يضمن لك تجربة نقل سلسة وآمنة لممتلكاتك.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative group p-6 bg-white bg-opacity-50 rounded-2xl hover:bg-opacity-100 transition-all duration-300 shadow-sm hover:shadow-md">
                <dt className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 h-14 w-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                      {feature.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About
