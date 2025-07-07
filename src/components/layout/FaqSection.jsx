import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa itu LinkKu?",
      answer: "LinkKu adalah platform gratis yang memungkinkan kamu menyimpan, mengatur, dan mengakses semua link favoritmu dalam satu tempat. Dengan LinkKu, kamu bisa mengelola bookmark dengan mudah dan mengaksesnya kapan saja dari perangkat apapun."
    },
    {
      question: "Apakah LinkKu benar-benar gratis?",
      answer: "Ya, LinkKu 100% gratis selamanya! Tidak ada biaya pendaftaran, langganan bulanan, atau biaya tersembunyi. Kamu bisa menyimpan link sebanyak yang kamu mau tanpa ada batasan dan tanpa khawatir tentang expired account."
    },
    {
      question: "Bagaimana cara menggunakan LinkKu?",
      answer: "Sangat mudah! Cukup daftar dan login ke akun LinkKu kamu. Setelah itu, kamu bisa langsung mulai menyimpan link dengan mengkategorikannya sesuai keinginan. Semua link yang tersimpan bisa diakses dengan cepat dan aman dari dashboard kamu."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Questions? Answered
          </h2>
          <p className="text-blue-800 text-lg max-w-2xl mx-auto">
            Temukan jawaban dari pertanyaan yang sering ditanyakan tentang LinkKu
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-200 rounded-2xl overflow-hidden hover:bg-blue-100 transition-all duration-300 shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <h3 className="text-xl font-semibold text-blue-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-blue-300 mb-4"></div>
                  <p className="text-blue-800 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-blue-700 mb-6">
            Masih ada pertanyaan lain? Jangan ragu untuk mencoba LinkKu sekarang!
          </p>
          <a
            href="/login"
            className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block hover:bg-blue-800"
          >
            Mulai Menggunakan LinkKu
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;