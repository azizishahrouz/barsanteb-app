import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 to-white/90 z-10" />
        <img
          src="/herbs-bg.jpg"
          alt="گیاهان دارویی"
          className="w-full h-full object-cover object-center opacity-70 blur-[1px] scale-105"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
              سلامتی شما،
              <span className="text-green-600 block">اولویت ماست</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed drop-shadow">
              با بارسان طب، دسترسی آسان به بهترین عطاری‌ها، پزشکان متخصص و محصولات ارگانیک را تجربه کنید. 
              سلامت شما با ما در امان است.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/categories"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/doctors"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                مشاوره پزشکی
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative z-10">
            <div className="relative z-10">
              <div className="bg-green-100 rounded-3xl p-8 lg:p-12 bg-opacity-80 backdrop-blur-md">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">عطاری‌های معتبر</h3>
                    <p className="text-sm text-gray-600">بهترین عطاری‌های شهر</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">پزشکان متخصص</h3>
                    <p className="text-sm text-gray-600">مشاوره تخصصی</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">محصولات ارگانیک</h3>
                    <p className="text-sm text-gray-600">طبیعی و سالم</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">هوش مصنوعی</h3>
                    <p className="text-sm text-gray-600">مشاوره هوشمند</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 