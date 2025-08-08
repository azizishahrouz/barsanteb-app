'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'تلفن تماس',
      value: '021-12345678',
      description: 'شنبه تا پنجشنبه 9 صبح تا 6 عصر',
    },
    {
      icon: '📧',
      title: 'ایمیل',
      value: 'info@barsanteb.ir',
      description: 'پاسخگویی در کمتر از 24 ساعت',
    },
    {
      icon: '📍',
      title: 'آدرس',
      value: 'تهران، خیابان ولیعصر',
      description: 'دفتر مرکزی بارسان طب',
    },
  ];

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            ارتباط با ما
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            برای سوالات، پیشنهادات و همکاری با ما در تماس باشید
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* فرم تماس */}
          <div className='bg-white rounded-3xl p-8 shadow-lg'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              ارسال پیام
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='نام خود را وارد کنید'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    ایمیل
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='ایمیل خود را وارد کنید'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    شماره تماس
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    placeholder='شماره تماس خود را وارد کنید'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    موضوع
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                    required
                  >
                    <option value=''>موضوع را انتخاب کنید</option>
                    <option value='suggestion'>پیشنهاد</option>
                    <option value='complaint'>شکایت</option>
                    <option value='cooperation'>همکاری</option>
                    <option value='support'>پشتیبانی</option>
                    <option value='other'>سایر</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  پیام
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200'
                  placeholder='پیام خود را بنویسید...'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105'
              >
                ارسال پیام
              </button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                اطلاعات تماس
              </h3>
              <div className='space-y-6'>
                {contactInfo.map((info, index) => (
                  <div key={index} className='flex items-start gap-2'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center'>
                        <span className='text-2xl'>{info.icon}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className='text-lg font-semibold text-gray-900 mb-1'>
                        {info.title}
                      </h4>
                      <p className='text-green-600 font-medium mb-1'>
                        {info.value}
                      </p>
                      <p className='text-sm text-gray-600'>
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ساعات کاری */}
            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                ساعات کاری
              </h4>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>شنبه تا چهارشنبه:</span>
                  <span className='font-medium'>9:00 - 18:00</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>پنجشنبه:</span>
                  <span className='font-medium'>9:00 - 14:00</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>جمعه:</span>
                  <span className='font-medium'>تعطیل</span>
                </div>
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className='bg-white rounded-2xl p-6 shadow-lg'>
              <h4 className='text-lg font-semibold text-gray-900 mb-4'>
                شبکه‌های اجتماعی
              </h4>
              <div className='flex gap-2'>
                <a
                  href='#'
                  className='w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200'
                >
                  <span className='text-lg'>📱</span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200'
                >
                  <span className='text-lg'>📘</span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200'
                >
                  <span className='text-lg'>📷</span>
                </a>
                <a
                  href='#'
                  className='w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-200'
                >
                  <span className='text-lg'>📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
