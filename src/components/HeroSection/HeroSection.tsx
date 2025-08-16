"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [openShop, setOpenShop] = useState(false);
  const [openHealth, setOpenHealth] = useState(false);
  const [openDoctors, setOpenDoctors] = useState(false);
  const [openAI, setOpenAI] = useState(false);
  const [openHealthTest, setOpenHealthTest] = useState(false);

  return (
    <section className='relative py-1 lg:py-2 overflow-hidden'>
      {/* Enhanced Professional Background for Medical Website */}
      <div className='absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-teal-50/80 to-cyan-50/80 backdrop-blur-sm'>
        {/* Medical-themed Floating Elements */}
        <div className='absolute top-16 right-16 w-36 h-36 bg-gradient-to-br from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-300/25 to-emerald-300/25 rounded-full blur-2xl animate-pulse'></div>
        <div className='absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-teal-300/15 to-cyan-300/15 rounded-full blur-2xl animate-pulse' style={{animationDelay: '1s'}}></div>
        <div className='absolute top-3/4 right-1/3 w-16 h-16 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-xl animate-pulse' style={{animationDelay: '2s'}}></div>
        
        {/* Additional Medical-themed Elements */}
        <div className='absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-lg animate-pulse' style={{animationDelay: '0.5s'}}></div>
        <div className='absolute bottom-1/4 right-1/4 w-14 h-14 bg-gradient-to-br from-teal-300/15 to-blue-300/15 rounded-full blur-lg animate-pulse' style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Content */}
          <div className='text-center lg:text-right relative'>
            {/* Animated Tree Background */}
            <div className='absolute -top-8 -right-8 w-32 h-32 opacity-20 animate-pulse'>
              <svg viewBox='0 0 100 100' className='w-full h-full'>
                <defs>
                  <linearGradient id='treeGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' style={{stopColor: '#10B981', stopOpacity: 1}} />
                    <stop offset='100%' style={{stopColor: '#059669', stopOpacity: 1}} />
                  </linearGradient>
                  <filter id='glow'>
                    <feGaussianBlur stdDeviation='2' result='coloredBlur'/>
                    <feMerge> 
                      <feMergeNode in='coloredBlur'/>
                      <feMergeNode in='SourceGraphic'/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Tree Trunk */}
                <rect x='45' y='70' width='10' height='25' fill='#8B4513' rx='2' className='animate-pulse' />
                {/* Tree Leaves with Glow Effect */}
                <circle cx='50' cy='45' r='20' fill='url(#treeGradient)' className='animate-bounce' style={{animationDelay: '0.5s'}} filter='url(#glow)' />
                <circle cx='40' cy='35' r='15' fill='url(#treeGradient)' className='animate-bounce' style={{animationDelay: '1s'}} filter='url(#glow)' />
                <circle cx='60' cy='35' r='15' fill='url(#treeGradient)' className='animate-bounce' style={{animationDelay: '1.5s'}} filter='url(#glow)' />
                <circle cx='50' cy='25' r='12' fill='url(#treeGradient)' className='animate-bounce' style={{animationDelay: '2s'}} filter='url(#glow)' />
              </svg>
            </div>
            
            {/* Additional Floating Elements */}
            <div className='absolute -top-4 -right-20 w-8 h-8 opacity-30 animate-spin' style={{animationDuration: '20s'}}>
              <div className='w-full h-full bg-green-300 rounded-full'></div>
            </div>
            <div className='absolute -top-12 -right-32 w-6 h-6 opacity-40 animate-ping'>
              <div className='w-full h-full bg-emerald-400 rounded-full'></div>
            </div>
            
            {/* Floating Leaves Animation */}
            <div className='absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none'>
              <div className='absolute top-4 right-8 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-bounce' style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className='absolute top-8 right-16 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-bounce' style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className='absolute top-12 right-4 w-2 h-2 bg-green-500 rounded-full opacity-60 animate-bounce' style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
              <div className='absolute top-16 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-60 animate-bounce' style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
            </div>
            
            <div className='relative z-10'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 drop-shadow-lg'>
              سلامتی شما،
                <span className='text-green-600 block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-pulse'>اولویت ماست</span>
            </h1>
              <p className='text-lg md:text-xl text-gray-600 mb-6 leading-relaxed drop-shadow'>
                با برسان طب، دسترسی آسان به بهترین عطاری‌ها، پزشکان متخصص و
              محصولات ارگانیک را تجربه کنید. سلامت شما با ما در امان است.
            </p>
            </div>
          </div>

          {/* Enhanced Professional Cards */}
          <div className='relative z-10'>
            <div className='relative'>
              {/* Main Container with Professional Glassmorphism */}
              <div className='rounded-xl p-0.5 lg:p-1 relative overflow-hidden'>
                {/* Professional Background Pattern */}
                <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl'></div>
                
                <div className='grid grid-cols-2 gap-2 relative z-10'>
                  {/* پزشکان متخصص - Professional Card with Background Image */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-white rounded-lg p-0.5 shadow-md border border-gray-100 cursor-pointer transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg aspect-square' onClick={() => setOpenDoctors(!openDoctors)}>
                      {/* Background Image */}
                      <div className='w-full h-44 mb-1 rounded-lg overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center bg-no-repeat rounded-lg' style={{backgroundImage: 'url(/young-handsome-physician-medical-robe-with-stethoscope.jpg)'}}></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className='text-center pt-2'>
                        <h3 className='font-bold text-xl text-black mb-0'>
                          پزشکان متخصص
                        </h3>
                      </div>
                    </div>
                    
                    {/* Modal for Doctors - Opens on the card */}
                    {/* {openDoctors && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-2'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/60 w-full transform transition-all duration-300 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-3'>
                              <div className='space-y-2'>
                                <Link href='/doctors' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  مشاهده پزشکان
                                </Link>
                                <Link href='/consultation' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  مشاوره آنلاین
                  </Link>
                                <button onClick={() => setOpenDoctors(false)} className='block w-full py-1 px-3 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* فروشگاه - Professional Card with Background Image */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-white rounded-lg p-0.5 shadow-md border border-gray-100 cursor-pointer transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg aspect-square' onClick={() => setOpenShop(!openShop)}>
                      {/* Background Image */}
                      <div className='w-full h-44 mb-1 rounded-lg overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center bg-no-repeat rounded-lg' style={{backgroundImage: 'url(/green-smoothie-empty-notepad.jpg)'}}></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className='text-center pt-2'>
                        <h3 className='font-bold text-xl text-black mb-0'>
                           فروشگاه ها
                    </h3>
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for Shop */}
                    {openShop && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-2'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/60 w-full transform transition-all duration-300 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-3'>
                              <div className='space-y-2'>
                                <Link href='/organic-stores' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  فروشگاه های ارگانیک
                                </Link>
                                <Link href='/herbal-stores' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  عطاری ها
                                </Link>
                                <button onClick={() => setOpenShop(false)} className='block w-full py-1 px-3 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* هوش مصنوعی - Professional Card with Background Image */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-white rounded-lg p-0.5 shadow-md border border-gray-100 cursor-pointer transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg aspect-square' onClick={() => setOpenAI(!openAI)}>
                      {/* Background Image */}
                      <div className='w-full h-44 mb-1 rounded-lg overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center bg-no-repeat rounded-lg' style={{backgroundImage: 'url(/top-view-abstract-innovation-arrangement.jpg)'}}></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className='text-center pt-2'>
                        <h3 className='font-bold text-xl text-black mb-0'>
                          هوش مصنوعی
                    </h3>
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for AI */}
                    {/* {openAI && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-2'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/60 w-full transform transition-all duration-300 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-3'>
                              <div className='space-y-2'>
                                <Link href='/ai-consultation' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  مشاوره هوشمند
                                </Link>
                                <Link href='/health-test' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  تست سلامت
                                </Link>
                                <button onClick={() => setOpenAI(false)} className='block w-full py-1 px-3 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* تست سلامت - Professional Card with Background Image */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-white rounded-lg p-0.5 shadow-md border border-gray-100 cursor-pointer transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-lg aspect-square' onClick={() => setOpenHealthTest(!openHealthTest)}>
                      {/* Background Image */}
                      <div className='w-full h-44 mb-1 rounded-lg overflow-hidden'>
                        <div className='w-full h-full bg-cover bg-center bg-no-repeat rounded-lg' style={{backgroundImage: 'url(/flat-lay-medical-composition-with-copyspace.jpg)'}}></div>
                      </div>
                      
                      {/* Text Content */}
                      <div className='text-center pt-2'>
                        <h3 className='font-bold text-xl text-black mb-0'>
                           تست سلامت
                    </h3>
                  </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for Health Test */}
                    {openHealthTest && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-2'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-lg p-3 shadow-2xl border border-white/60 w-full transform transition-all duration-300 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-3'>
                              <div className='space-y-2'>
                                <Link href='/bmi-calculator' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  محاسبه BMI
                                </Link>
                                <Link href='/health-assessment' className='block w-full py-2 px-3 text-xs font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  ارزیابی سلامت
                                </Link>
                                <button onClick={() => setOpenHealthTest(false)} className='block w-full py-1 px-3 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Professional Decorative Elements */}
            <div className='absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-green-300/25 to-emerald-300/25 rounded-full blur-2xl animate-pulse'></div>
                     </div>
         </div>
       </div>
       {/* Blog Section */}
     </section>
   );
 };

export default HeroSection;
