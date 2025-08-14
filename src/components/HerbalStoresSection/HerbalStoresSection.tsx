// import Link from 'next/link';

// const HerbalStoresSection = () => {
//   const stores = [
//     {
//       id: 1,
//       name: 'عطاری سنتی تهران',
//       location: 'تهران، خیابان ولیعصر',
//       rating: 4.8,
//       reviews: 156,
//       specialties: ['گیاهان دارویی', 'عسل طبیعی', 'ادویه‌جات'],
//       image: '/api/placeholder/300/200',
//       isVerified: true,
//     },
//     {
//       id: 2,
//       name: 'عطاری طبیعت',
//       location: 'اصفهان، خیابان چهارباغ',
//       rating: 4.6,
//       reviews: 89,
//       specialties: ['دمنوش‌های گیاهی', 'روغن‌های طبیعی', 'مکمل‌ها'],
//       image: '/api/placeholder/300/200',
//       isVerified: true,
//     },
//     {
//       id: 3,
//       name: 'عطاری سلامت',
//       location: 'شیراز، خیابان زند',
//       rating: 4.9,
//       reviews: 203,
//       specialties: ['گیاهان دارویی', 'عسل', 'چای'],
//       image: '/api/placeholder/300/200',
//       isVerified: false,
//     },
//   ];

//   return (
//     <section className='py-16 bg-whit'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='text-center mb-12'>
//           <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
//             بهترین عطاری‌های شهر
//           </h2>
//           <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
//             با معتبرترین عطاری‌های شهر آشنا شوید و محصولات با کیفیت تهیه کنید
//           </p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {stores.map((store) => (
//             <div
//               key={store.id}
//               className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100'
//             >
//               <div className='relative'>
//                 <div className='h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center'>
//                   <div className='text-6xl'>🏥</div>
//                 </div>
//                 {store.isVerified && (
//                   <div className='absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium'>
//                     تایید شده
//                   </div>
//                 )}
//                 <div className='absolute top-4 left-4 flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full'>
//                   <svg
//                     className='w-4 h-4 text-yellow-400 ml-1'
//                     fill='currentColor'
//                     viewBox='0 0 20 20'
//                   >
//                     <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
//                   </svg>
//                   <span className='text-sm font-medium'>{store.rating}</span>
//                 </div>
//               </div>

//               <div className='p-6'>
//                 <h3 className='text-xl font-semibold text-gray-900 mb-2'>
//                   {store.name}
//                 </h3>
//                 <p className='text-gray-600 text-sm mb-3 flex items-center'>
//                   <svg
//                     className='w-4 h-4 ml-1'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
//                     />
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
//                     />
//                   </svg>
//                   {store.location}
//                 </p>

//                 <div className='mb-4'>
//                   <p className='text-sm text-gray-500 mb-2'>تخصص‌ها:</p>
//                   <div className='flex flex-wrap gap-1'>
//                     {store.specialties.map((specialty, index) => (
//                       <span
//                         key={index}
//                         className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'
//                       >
//                         {specialty}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className='flex items-center justify-between'>
//                   <span className='text-sm text-gray-500'>
//                     {store.reviews} نظر
//                   </span>
//                   <Link
//                     href={`/herbal-stores/${store.id}`}
//                     className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
//                   >
//                     مشاهده عطاری
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className='text-center mt-12'>
//           <Link
//             href='/herbal-stores'
//             className='inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200'
//           >
//             مشاهده همه عطاری‌ها
//             <svg
//               className='mr-2 w-5 h-5'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d='M17 8l4 4m0 0l-4 4m4-4H3'
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HerbalStoresSection;
