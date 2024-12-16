import { CheckCircle } from 'lucide-react'

const features = [
  'أكثر من 15 عامًا من الخبرة في مجال النقل',
  'فريق محترف ومدرب على أعلى مستوى',
  'أسطول حديث من الشاحنات والمعدات',
  'خدمة عملاء متميزة على مدار الساعة',
  'تأمين شامل على جميع عمليات النقل',
  'حلول مخصصة لتلبية احتياجات كل عميل',
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">من نحن</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            لماذا تختار سماء الأزرق للنقل
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            نحن نسعى جاهدين لتقديم أفضل خدمات النقل مع التركيز على الجودة والموثوقية ورضا العملاء.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mr-16 text-lg leading-6 font-medium text-gray-900">{feature}</p>
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

