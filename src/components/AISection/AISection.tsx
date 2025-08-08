import Link from 'next/link';

const AISection = () => {
  const aiFeatures = [
    {
      id: 1,
      title: 'تشخیص گیاهان',
      description: 'با عکس‌برداری از گیاهان، نوع و خواص آن‌ها را شناسایی کنید',
      icon: '🌿',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    },
    {
      id: 2,
      title: 'مشاوره تغذیه',
      description: 'بر اساس مزاج و شرایط شما، رژیم غذایی مناسب پیشنهاد می‌دهد',
      icon: '🍎',
      color: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      id: 3,
      title: 'تشخیص بیماری',
      description: 'با توصیف علائم، بیماری احتمالی و راه‌های درمان را معرفی می‌کند',
      icon: '🏥',
      color: 'bg-red-100',
      textColor: 'text-red-800'
    },
    {
      id: 4,
      title: 'توصیه دارویی',
      description: 'بر اساس شرایط شما، داروهای گیاهی مناسب را پیشنهاد می‌دهد',
      icon: '💊',
      color: 'bg-purple-100',
      textColor: 'text-purple-800'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            هوش مصنوعی بارسان طب
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            با استفاده از هوش مصنوعی پیشرفته، خدمات پزشکی و تغذیه‌ای هوشمند دریافت کنید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ویژگی‌های هوش مصنوعی */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold ${feature.textColor} mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* چت هوش مصنوعی */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                چت هوشمند
              </h3>
              <p className="text-gray-600">
                با هوش مصنوعی بارسان طب گفتگو کنید و پاسخ سوالات خود را دریافت کنید
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">قابلیت‌های چت:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    پاسخ فوری و دقیق
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    تشخیص هوشمند
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    توصیه‌های شخصی‌سازی شده
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    پشتیبانی 24/7
                  </li>
                </ul>
              </div>

              <Link
                href="/ai-chat"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-200 block transform hover:scale-105"
              >
                شروع چت هوشمند
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ai"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            اطلاعات بیشتر درباره هوش مصنوعی
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AISection; 