'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "ما هي الخدمات التي تقدمونها؟",
    answer: "نقدم مجموعة شاملة من خدمات النقل بما في ذلك النقل المنزلي، والنقل التجاري، وخدمات التعبئة والتغليف، والنقل لمسافات طويلة، والنقل الدولي، وحلول التخزين الآمن."
  },
  {
    question: "كيف يتم تحديد تكلفة خدمات النقل؟",
    answer: "تعتمد تكلفة النقل على عدة عوامل مثل المسافة، وحجم الممتلكات المنقولة، والخدمات الإضافية المطلوبة. نقدم تقييمًا مجانيًا وعرض أسعار مفصل لكل عملية نقل."
  },
  {
    question: "هل توفرون خدمات التعبئة والتغليف؟",
    answer: "نعم، نقدم خدمات تعبئة وتغليف احترافية. يستخدم فريقنا المدرب مواد تغليف عالية الجودة لضمان حماية ممتلكاتك أثناء النقل."
  },
  {
    question: "كيف يمكنني حجز خدمة النقل معكم؟",
    answer: "يمكنك حجز خدمة النقل عن طريق الاتصال بنا هاتفيًا، أو من خلال موقعنا الإلكتروني، أو بزيارة مكتبنا. سنقوم بترتيب موعد لتقييم احتياجاتك وتقديم عرض سعر."
  },
  {
    question: "هل تقدمون خدمات النقل الدولي؟",
    answer: "نعم، نقدم خدمات النقل الدولي. نتعامل مع جميع جوانب النقل الدولي بما في ذلك الوثائق الجمركية والشحن البحري والجوي."
  },
  {
    question: "ما هي سياسة التأمين الخاصة بكم؟",
    answer: "نحن نقدم تغطية تأمينية شاملة لجميع عمليات النقل. يمكنك أيضًا اختيار تغطية إضافية للأغراض ذات القيمة العالية. سنناقش خيارات التأمين معك بالتفصيل قبل عملية النقل."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">الأسئلة الشائعة</h2>
          <p className="mt-4 text-xl text-gray-600">إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا</p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-right px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-blue-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

