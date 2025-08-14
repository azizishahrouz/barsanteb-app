'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import icon from '../../../../../../public/barsan-logo.svg';
import icon from '../../../assets/hero (2).png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'عطاری‌ها', href: '/herbal-stores' },
    { name: 'پزشکان', href: '/doctors' },
    { name: 'فروشگاه‌های ارگانیک', href: '/organic-stores' },
    { name: 'دسته‌بندی محصولات', href: '/categories' },
    { name: 'مزاج من', href: '/temperament' },
    { name: 'هوش مصنوعی', href: '/ai' },
    { name: 'ارتباط با ما', href: '/contact' },
  ];

  return (
    <header className='sticky top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-black/30 border-b border-white/20 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <div className=' bg-green- rounded-lg flex items-center justify-center'>
                {/* <span className='text-white font-bold text-xl'>ب</span> */}
                <Image
                  src={icon}
                  width={80}
                  height={80}
                  alt='Picture of the author'
                ></Image>
              </div>
              <span className='mr-3 text-xl font-bold text-gray-900'></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className='hidden md:flex space-x-8 space-x-reverse'>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-gray-800 hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400 px-3 py-2 text-sm font-semibold transition-colors duration-200'
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className='hidden md:flex items-center space-x-4 space-x-reverse'>
            <Link
              href='/login'
              className='text-gray-800 hover:text-green-700 dark:text-gray-200 dark:hover:text-green-400 px-3 py-2 text-sm font-semibold transition-colors duration-200'
            >
              ورود
            </Link>
            <Link
              href='/signup'
              className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md'
            >
              عضویت
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md border-t border-white/20 shadow-sm rounded-b-xl'>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='text-gray-800 hover:text-green-700 block px-3 py-2 text-base font-semibold transition-colors duration-200'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className='pt-4 pb-3 border-t border-gray-200'>
                <Link
                  href='/login'
                  className='text-gray-800 hover:text-green-700 block px-3 py-2 text-base font-semibold transition-colors duration-200'
                  onClick={() => setIsMenuOpen(false)}
                >
                  ورود
                </Link>
                <Link
                  href='/signup'
                  className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 mt-2 shadow-sm hover:shadow-md'
                  onClick={() => setIsMenuOpen(false)}
                >
                  عضویت
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
