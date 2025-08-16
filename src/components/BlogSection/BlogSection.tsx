'use client';

import { useState, useEffect } from 'react';
import { usePosts } from '@/hooks/usePosts';
import Link from 'next/link';

// Mock data for fallback
const mockPosts = [
  {
    id: 1,
    title: 'زعفران قاینات',
    caption: 'زعفران گرانترین و گرمترین ادویه جهان است که خواص بی نهایتی دارد. فروشگاه ما مفتخر است که بهترین و با کیفیت ترین زعفران جهان را به شما ارائه دهد.',
    store: 12,
    date: '2025-02-11',
    time: '15:24:50',
    likes_count: 12,
    dislikes_count: 5
  },
  {
    id: 2,
    title: 'شوید ترکی اصل',
    caption: 'کپشن2',
    store: 11,
    date: '2025-02-13',
    time: '07:58:58',
    likes_count: 4,
    dislikes_count: 3
  }
];

// Store names mapping
const storeNames = {
  11: 'گیاهان دارویی',
  12: 'ادویه جات',
  1: 'طب سنتی',
  2: 'گیاهان دارویی'
};

// Format date to Persian
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('fa-IR');
};

export default function BlogSection() {
  const { data: posts, isLoading, error } = usePosts();
  const [useMockData, setUseMockData] = useState(false);

  // Use mock data if API fails
  const displayPosts = useMockData ? mockPosts : (posts || []);

  if (isLoading) {
    return (
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">آخرین مقالات پزشکی</h2>
            <p className="text-gray-600 text-lg">دانش و تجربه پزشکان متخصص در اختیار شما</p>
          </div>
          
          {/* Loading Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && !useMockData) {
    return (
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">آخرین مقالات پزشکی</h2>
            <p className="text-gray-600 text-lg">دانش و تجربه پزشکان متخصص در اختیار شما</p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
            <div className="text-yellow-800 mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="text-lg font-semibold mb-2">خطا در دریافت مقالات</h3>
              <p className="text-sm mb-4">{error.message}</p>
              <button 
                onClick={() => setUseMockData(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                نمایش مقالات نمونه
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">آخرین مقالات پزشکی</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            دانش و تجربه پزشکان متخصص در اختیار شما. مقالات تخصصی در زمینه طب سنتی، تغذیه سالم و سلامت عمومی
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Post Image */}
                <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-teal-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                      {storeNames[post.store as keyof typeof storeNames] || 'طب سنتی'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.caption}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        {post.likes_count}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {post.dislikes_count}
                      </span>
                    </div>
                    <span className="text-emerald-600 font-medium">{post.time}</span>
                  </div>

                  {/* Read More Button */}
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    مطالعه مقاله
                    <svg className="w-4 h-4 mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-500 hover:border-emerald-600 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            مشاهده همه مقالات
            <svg className="w-5 h-5 mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mock Data Notice */}
        {useMockData && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              در حال نمایش مقالات نمونه - اتصال به سرور در دسترس نیست
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
