import Link from 'next/link';
import { GiHerbsBundle } from 'react-icons/gi';
import { PiMoneyFill } from 'react-icons/pi';
// import { GiTeaCup } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';
import { GiChiliPepper } from 'react-icons/gi';
import { GiOlive } from 'react-icons/gi';
import { MdMedication } from 'react-icons/md';
const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'گیاهان دارویی',
      description: 'انواع گیاهان دارویی و داروهای گیاهی',
      icon: <GiHerbsBundle className="w-10 h-10 text-green-700" />,
      color: 'bg-green-100',
      textColor: 'text-green-800',
      href: '/categories/herbs'
    },
    {
      id: 2,
      name: 'عسل و فرآورده‌های زنبور',
      description: 'عسل طبیعی و محصولات زنبور عسل',
      icon: <PiMoneyFill className="w-10 h-10 text-yellow-600" />,
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      href: '/categories/honey'
    },
    {
      id: 3,
      name: 'ادویه‌جات',
      description: 'انواع ادویه و چاشنی‌های طبیعی',
      icon: <GiChiliPepper className="w-10 h-10 text-red-600" />,
      color: 'bg-red-100',
      textColor: 'text-red-800',
      href: '/categories/spices'
    },
    {
      id: 4,
      name: 'چای و دمنوش',
      description: 'انواع چای و دمنوش‌های گیاهی',
      // icon: <GiTeaCup className="w-10 h-10 text-orange-500" />,
      // icon: <GiTea className="w-10 h-10 text-orange-500" />,
      icon: <GiCoffeeCup className="w-10 h-10 text-orange-500" />,
      color: 'bg-orange-100',
      textColor: 'text-orange-800',
      href: '/categories/tea'
    },
    {
      id: 5,
      name: 'روغن‌های طبیعی',
      description: 'روغن‌های گیاهی و طبیعی',
      icon: <GiOlive className="w-10 h-10 text-emerald-700" />,
      color: 'bg-emerald-100',
      textColor: 'text-emerald-800',
      href: '/categories/oils'
    },
    {
      id: 6,
      name: 'مکمل‌های غذایی',
      description: 'مکمل‌های طبیعی و ارگانیک',
      icon: <MdMedication className="w-10 h-10 text-blue-700" />,
      color: 'bg-blue-100',
      textColor: 'text-blue-800',
      href: '/categories/supplements'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            دسته‌بندی محصولات
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            محصولات متنوع و با کیفیت ما را در دسته‌بندی‌های مختلف مشاهده کنید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group block"
            >
              <div className={`${category.color} rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg`}> 
                <div className="flex items-center justify-center mb-4">{category.icon}</div>
                <h3 className={`text-xl font-semibold ${category.textColor} mb-2`}>
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-green-600 font-medium text-sm">
                  مشاهده محصولات
                  <svg className="mr-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            مشاهده همه دسته‌بندی‌ها
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 