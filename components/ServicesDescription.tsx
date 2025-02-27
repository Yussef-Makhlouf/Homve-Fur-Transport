import { FC } from 'react'

const ServicesDescription: FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          خدماتنا المتميزة في المملكة العربية السعودية
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <article className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              خدمات التواصل المباشر
            </h2>
            <p className="text-gray-600 mb-4">
              نقدم خدمة عملاء متميزة على مدار الساعة عبر الواتساب والاتصال المباشر. فريقنا المتخصص جاهز لتلبية احتياجاتكم بكفاءة عالية وسرعة استجابة فورية.
            </p>
            <div className="space-y-2">
              <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full mr-2">خدمة 24/7</span>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">دعم فوري</span>
            </div>
          </article>

          {/* Service Card 2 */}
          <article className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              استشارات متخصصة
            </h2>
            <p className="text-gray-600 mb-4">
              نوفر استشارات احترافية مع خبراء متخصصين في مجالات متعددة. حلول مبتكرة وتوجيه مهني يناسب احتياجات عملائنا في السوق السعودي.
            </p>
            <div className="space-y-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2">خبرة عالية</span>
              <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">حلول مخصصة</span>
            </div>
          </article>

          {/* Service Card 3 */}
          <article className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              خدمات رقمية متكاملة
            </h2>
            <p className="text-gray-600 mb-4">
              نقدم باقة متكاملة من الخدمات الرقمية تشمل التسويق الإلكتروني، تطوير المواقع، وحلول الأعمال المتكاملة في المملكة العربية السعودية.
            </p>
            <div className="space-y-2">
              <span className="inline-block bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full mr-2">تقنيات حديثة</span>
              <span className="inline-block bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full">حلول رقمية</span>
            </div>
          </article>
        </div>

        {/* SEO-optimized content */}
        <div className="mt-16 prose prose-lg mx-auto text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            لماذا تختار خدماتنا؟
          </h2>
          <p>
            نفخر بتقديم أفضل الخدمات في المملكة العربية السعودية، مع التركيز على الجودة والاحترافية في كل ما نقدمه. خدماتنا مصممة خصيصاً لتلبية احتياجات السوق السعودي المتنامي.
          </p>
          <p>
            نستخدم أحدث التقنيات والأساليب المبتكرة لضمان رضا عملائنا. فريقنا المتخصص يمتلك خبرة واسعة في مجالات متعددة، مما يجعلنا الخيار الأمثل لشركائنا في النجاح.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesDescription
