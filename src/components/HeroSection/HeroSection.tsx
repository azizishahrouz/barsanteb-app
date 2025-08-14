"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [openShop, setOpenShop] = useState(false);
  const [openHealth, setOpenHealth] = useState(false);
  const [openDoctors, setOpenDoctors] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  return (
    
    <section className='relative py-8 lg:py-12 overflow-hidden'>
      {/* Enhanced Background with Nature Pattern */}
      <div className='absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100'>
        {/* Background Image */}
        <div className='absolute inset-0 bg-[url("/green-smoothie-empty-notepad.jpg")] bg-contain bg-center bg-no-repeat opacity-30'></div>
        
        {/* Nature Pattern Background */}
        {/* <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232BA84A' fill-opacity='0.08'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zm0 0c0 22.091-17.909 40-40 40V0c22.091 0 40 17.909 40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-70'></div> */}
        
        <div className='absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl animate-pulse'></div>
        <div className='absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full blur-2xl animate-pulse'></div>
        <div className='absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-xl animate-pulse'></div>
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
              {/* <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link
                  href='/categories'
                  className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                >
                  مشاهده محصولات
                </Link>
                <Link
                  href='/doctors'
                  className='border-2 border-green-600 text-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                >
                  مشاوره پزشکی
                </Link>
              </div> */}
            </div>
          </div>

                        {/* Enhanced Professional Cards */}
              <div className='relative z-10'>
                <div className='relative'>
                  {/* Main Container with Professional Glassmorphism */}
                  <div className='rounded-3xl p-4 lg:p-6 relative overflow-hidden'>
                    {/* Professional Background Pattern */}
                    <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl'></div>
                    
                    <div className='grid grid-cols-2 gap-4 relative z-10'>
                  {/* پزشکان متخصص - Professional Card with Background Image */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 cursor-pointer transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl aspect-square' onClick={() => setOpenDoctors(!openDoctors)}>
                      {/* Background Image with Green Overlay */}
                      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{backgroundImage: 'url(/young-handsome-physician-medical-robe-with-stethoscope.jpg)'}}></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-green-600/45 to-emerald-600/55 z-10'></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-green-500/8 to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl z-20'></div>
                      
                      {/* Enhanced Icon Container */}
                      <div className='relative mb-4 z-30'>
                        {/* <div className='w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3'>
                          <svg
                            className='w-10 h-10 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                            />
                          </svg>
                        </div> */}
                        {/* Icon Glow Effect */}
                        <div className='absolute inset-0 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                      </div>
                      
                      <div className='relative z-30 text-center'>
                        <h3 className='font-bold text-lg text-white mb-2 transition-all duration-500 group-hover:text-emerald-200 group-hover:scale-105 px-3 py-1 drop-shadow-lg'>
                          پزشکان متخصص
                        </h3>
                        <p className='text-white text-xs leading-relaxed px-3 py-1 font-semibold drop-shadow-md'>مشاوره تخصصی</p>
                        
                        {/* Professional Badge */}
                        {/* <div className='mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30'>
                          <div className='w-2 h-2 bg-white rounded-full mr-2 animate-pulse'></div>
                          آنلاین
                        </div> */}
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for Doctors */}
                    {/* {openDoctors && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-4'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 max-w-xs w-full transform transition-all duration-500 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-4'>
                              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg'>
                                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                                </svg>
                              </div>
                              <h3 className='font-bold text-lg text-gray-800'>پزشکان متخصص</h3>
                              <p className='text-sm text-gray-600'>مشاوره تخصصی و حرفه‌ای</p>
                              <div className='space-y-2'>
                                <Link href='/doctors' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  مشاهده پزشکان
                                </Link>
                                <button onClick={() => setOpenDoctors(false)} className='block w-full py-2 px-4 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* فروشگاه - Professional Card with Background Image and Enhanced Sublinks */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 cursor-pointer transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl aspect-square' onClick={() => setOpenShop(!openShop)}>
                      {/* Background Image with Green Overlay */}
                      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{backgroundImage: 'url(/flat-lay-natural-medicinal-spices-herbs.jpg)'}}></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-green-600/45 to-emerald-600/55 z-10'></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-amber-500/8 to-orange-500/8 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl z-20'></div>
                      
                      {/* Enhanced Icon Container */}
                      <div className='relative mb-4 z-30'>
                        {/* <div className='w-20 h-20 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3'>
                          <svg
                            className='w-10 h-10 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                        />
                      </svg>
                    </div> */}
                        {/* Icon Glow Effect */}
                        <div className='absolute inset-0 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                      </div>
                      
                      <div className='relative z-30 text-center'>
                        <h3 className='font-bold text-lg text-white mb-2 transition-all duration-500 group-hover:text-orange-200 group-hover:scale-105 px-3 py-1 drop-shadow-lg'>
                          فروشگاه
                        </h3>
                        <p className='text-white text-xs leading-relaxed px-3 py-1 font-semibold drop-shadow-md'>
                          بهترین فروشگاه های شهر
                        </p>
                        
                        {/* Professional Badge */}
                        {/* <div className='mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30'>
                          <div className='w-2 h-2 bg-white rounded-full mr-2 animate-pulse'></div>
                          متنوع
                        </div> */}
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for Shop */}
                    {openShop && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-4'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 max-w-xs w-full transform transition-all duration-500 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-4'>
                              {/* <div className='w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg'>
                                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
                                </svg>
                              </div>
                              <h3 className='font-bold text-lg text-gray-800'>فروشگاه</h3>
                              <p className='text-sm text-gray-600'>بهترین فروشگاه های شهر</p> */}
                              <div className='space-y-2'>
                                <Link href='/organic-stores' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  فروشگاه های ارگانیک
                                </Link>
                                <Link href='/herbal-stores' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  عطاری ها
                                </Link>
                                <button onClick={() => setOpenShop(false)} className='block w-full py-2 px-4 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300'>
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
                    <div className='relative overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 cursor-pointer transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl aspect-square' onClick={() => setOpenAI(!openAI)}>
                      {/* Background Image with Green Overlay */}
                      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{backgroundImage: 'url(/top-view-abstract-innovation-arrangement.jpg)'}}></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-green-600/45 to-emerald-600/55 z-10'></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl z-20'></div>
                      
                      {/* Enhanced Icon Container */}
                      <div className='relative mb-4 z-30'>
                        {/* <div className='w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3'>
                          <svg
                            className='w-10 h-10 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                        />
                      </svg>
                    </div> */}
                        {/* Icon Glow Effect */}
                        <div className='absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                      </div>
                      
                      <div className='relative z-30 text-center'>
                        <h3 className='font-bold text-lg text-white mb-2 transition-all duration-500 group-hover:text-indigo-200 group-hover:scale-105 px-3 py-1 drop-shadow-lg'>
                          هوش مصنوعی
                        </h3>
                        <p className='text-white text-xs leading-relaxed px-3 py-1 font-semibold drop-shadow-md'>مشاوره هوشمند</p>
                        
                        {/* Professional Badge */}
                        {/* <div className='mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30'>
                          <div className='w-2 h-2 bg-white rounded-full mr-2 animate-pulse'></div>
                          پیشرفته
                        </div> */}
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for AI */}
                    {/* {openAI && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-4'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 max-w-xs w-full transform transition-all duration-500 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-4'>
                              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg'>
                                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                                </svg>
                              </div>
                              <h3 className='font-bold text-lg text-gray-800'>هوش مصنوعی</h3>
                              <p className='text-sm text-gray-600'>مشاوره هوشمند و پیشرفته</p>
                              <div className='space-y-2'>
                                <Link href='/ai' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  شروع مشاوره
                                </Link>
                                <button onClick={() => setOpenAI(false)} className='block w-full py-2 px-4 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300'>
                                  بستن
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </div>

                  {/* تست سلامتی - Professional Card with Background Image and Enhanced Sublinks */}
                  <div className='relative group'>
                    <div className='relative overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/60 cursor-pointer transition-all duration-700 transform group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl aspect-square' onClick={() => setOpenHealth(!openHealth)}>
                      {/* Background Image with Green Overlay */}
                      <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{backgroundImage: 'url(/flat-lay-medical-composition-with-copyspace.jpg)'}}></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-green-600/45 to-emerald-600/55 z-10'></div>
                      <div className='absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl z-20'></div>
                      
                      {/* Enhanced Icon Container */}
                      <div className='relative mb-4 z-30'>
                        {/* <div className='w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3'>
                          <svg
                            className='w-10 h-10 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
                        />
                      </svg>
                    </div> */}
                        {/* Icon Glow Effect */}
                        <div className='absolute inset-0 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                      </div>
                      
                      <div className='relative z-30 text-center'>
                        <h3 className='font-bold text-lg text-white mb-2 transition-all duration-500 group-hover:text-purple-200 group-hover:scale-105 px-3 py-1 drop-shadow-lg'>
                          تست سلامتی
                        </h3>
                        <p className='text-white text-xs leading-relaxed px-3 py-1 font-semibold drop-shadow-md'>سلامتی‌ات رو همین حالا چک کن</p>
                        
                        {/* Professional Badge */}
                        {/* <div className='mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30'>
                          <div className='w-2 h-2 bg-white rounded-full mr-2 animate-pulse'></div>
                          دقیق
                        </div> */}
                      </div>
                    </div>
                    
                    {/* Enhanced Professional Modal for Health Test */}
                    {openHealth && (
                      <div className='absolute inset-0 z-40'>
                        <div className='absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl'></div>
                        <div className='absolute inset-0 flex items-center justify-center p-4'>
                          <div className='bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/60 max-w-xs w-full transform transition-all duration-500 animate-in slide-in-from-bottom-2'>
                            <div className='text-center space-y-4'>
                              {/* <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg'>
                                <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
                                </svg>
                              </div>
                              <h3 className='font-bold text-lg text-gray-800'>تست سلامتی</h3>
                              <p className='text-sm text-gray-600'>سلامتی‌ات رو همین حالا چک کن</p> */}
                              <div className='space-y-2'>
                                <Link href='/temperament-test' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
                                  تست مزاج شناسی
                                </Link>
                                <Link href='/categories' className='block w-full py-3 px-4 text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform'>
BMI
                                </Link>
                                <button onClick={() => setOpenHealth(false)} className='block w-full py-2 px-4 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all duration-300'>
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
    </section>
  );
};

export default HeroSection;
