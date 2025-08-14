

'use client';

import { FaTelegramPlane, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* برند */}
        <div>
          <h3 className="text-2xl font-bold mb-4">برسان طب</h3>
          <p className="text-green-100 leading-relaxed">
            ارائه خدمات پزشکی و مشاوره تخصصی با بهترین کادر درمانی.
          </p>
        </div>

        {/* اطلاعات تماس */}
        <div>
          <h4 className="text-lg font-semibold mb-4">اطلاعات تماس</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              <span>021-12345678</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white" />
              <span>info@barsanteb.ir</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white" />
              <span>تهران، خیابان ولیعصر</span>
            </li>
          </ul>
        </div>

        {/* ساعات کاری */}
        <div>
          <h4 className="text-lg font-semibold mb-4">ساعات کاری</h4>
          <ul className="space-y-2 text-green-100">
            <li className="flex items-center gap-3">
              <FaClock />
              <span>شنبه تا چهارشنبه: 9:00 - 18:00</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock />
              <span>پنجشنبه: 9:00 - 14:00</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock />
              <span>جمعه: تعطیل</span>
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h4 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h4>
          <div className="flex gap-3">
            <a
              href="https://t.me/Barsanteb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <FaTelegramPlane size={20} />
            </a>
            <a
              href="https://instagram.com/Barsanteb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:info@barsanteb.ir"
              className="w-10 h-10 bg-white text-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* کپی رایت */}
      <div className="border-t border-green-500 mt-10 pt-4 text-center text-sm text-green-100">
        © {new Date().getFullYear()} برسان طب - تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
