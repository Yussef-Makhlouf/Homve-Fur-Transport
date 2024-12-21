import { CheckCircle } from 'lucide-react'

const features = [
  'أكثر من 15 عاماً من الخبرة في مجال النقل',
  'فريق محترف ومدرب على أعلى مستوى',
  'أسطول حديث من الشاحنات والمعدات',
  'خدمة عملاء متميزة على مدار الساعة',
  'تأمين شامل على جميع عمليات النقل',
  'حلول مخصصة لتلبية احتياجات كل عميل',
]

const About = () => {
  return (
    <section id="about" className="relative py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,137,53,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,166,0,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center space-y-4">
          <h3 className="text-base text-orange-500 font-semibold tracking-wide uppercase">من نحن</h3>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            لماذا تختارهوموف للنقل
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            نحن نسعى جاهدين لتقديم أفضل خدمات النقل مع التركيز على الجودة والموثوقية ورضا العملاء.
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature} className="relative group">
                <dt className="flex items-center space-x-4 space-x-reverse">
                  <div className="flex-shrink-0 h-14 w-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <CheckCircle className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    {feature}
                  </p>
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
