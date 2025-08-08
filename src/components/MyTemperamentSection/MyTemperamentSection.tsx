import Link from 'next/link';

const MyTemperamentSection = () => {
  const temperaments = [
    {
      id: 1,
      name: 'گرم و خشک',
      description: 'صفراوی مزاج',
      characteristics: ['گرمایی', 'خشکی', 'زردی'],
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800'
    },
    {
      id: 2,
      name: 'گرم و تر',
      description: 'دموی مزاج',
      characteristics: ['گرمایی', 'ترکی', 'سرخی'],
      color: 'bg-red-100',
      textColor: 'text-red-800'
    },
    {
      id: 3,
      name: 'سرد و تر',
      description: 'بلغمی مزاج',
      characteristics: ['سردی', 'ترکی', 'سفیدی'],
      color: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      id: 4,
      name: 'سرد و خشک',
      description: 'سوداوی مزاج',
      characteristics: ['سردی', 'خشکی', 'سیاهی'],
      color: 'bg-gray-100',
      textColor: 'text-gray-800'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مزاج من
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            با شناخت مزاج خود، رژیم غذایی و سبک زندگی مناسب را انتخاب کنید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* مزاج‌ها */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temperaments.map((temperament) => (
              <div
                key={temperament.id}
                className={`${temperament.color} rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
              >
                <h3 className={`text-xl font-semibold ${temperament.textColor} mb-2`}>
                  {temperament.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {temperament.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {temperament.characteristics.map((char, index) => (
                    <span
                      key={index}
                      className={`${temperament.textColor} bg-white bg-opacity-50 text-xs px-2 py-1 rounded-full`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* تست مزاج */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                تست مزاج
              </h3>
              <p className="text-gray-600">
                با پاسخ به چند سوال ساده، مزاج خود را بشناسید
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">ویژگی‌های تست:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    تست سریع و دقیق
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    توصیه‌های شخصی‌سازی شده
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    رژیم غذایی مناسب
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    سبک زندگی سالم
                  </li>
                </ul>
              </div>

              <Link
                href="/temperament-test"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-center transition-colors duration-200 block"
              >
                شروع تست مزاج
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/temperament"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            اطلاعات بیشتر درباره مزاج
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyTemperamentSection; 