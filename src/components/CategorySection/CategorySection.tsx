// import Link from 'next/link';
// import { GiHerbsBundle } from 'react-icons/gi';
// import { PiMoneyFill } from 'react-icons/pi';
// import { GiCoffeeCup } from 'react-icons/gi';
// import { GiChiliPepper } from 'react-icons/gi';
// import { GiOlive } from 'react-icons/gi';
// import { MdMedication } from 'react-icons/md';

// const CategorySection = () => {
//   const categories = [
//     {
//       id: 1,
//       name: 'گیاهان دارویی',
//       description: 'انواع گیاهان دارویی و داروهای گیاهی با کیفیت برتر',
//       icon: <GiHerbsBundle className='w-12 h-12 text-white' />,
//       gradient: 'from-emerald-500 to-green-600',
//       bgColor: 'bg-emerald-50',
//       borderColor: 'border-emerald-200',
//       textColor: 'text-emerald-800',
//       href: '/categories/herbs',
//       productCount: '150+ محصول',
//     },
//     {
//       id: 2,
//       name: 'عسل و فرآورده‌های زنبور',
//       description: 'عسل طبیعی و محصولات زنبور عسل ارگانیک',
//       icon: <PiMoneyFill className='w-12 h-12 text-white' />,
//       gradient: 'from-amber-500 to-orange-500',
//       bgColor: 'bg-amber-50',
//       borderColor: 'border-amber-200',
//       textColor: 'text-amber-800',
//       href: '/categories/honey',
//       productCount: '80+ محصول',
//     },
//     {
//       id: 3,
//       name: 'ادویه‌جات',
//       description: 'انواع ادویه و چاشنی‌های طبیعی و تازه',
//       icon: <GiChiliPepper className='w-12 h-12 text-white' />,
//       gradient: 'from-red-500 to-pink-500',
//       bgColor: 'bg-red-50',
//       borderColor: 'border-red-200',
//       textColor: 'text-red-800',
//       href: '/categories/spices',
//       productCount: '120+ محصول',
//     },
//     {
//       id: 4,
//       name: 'چای و دمنوش',
//       description: 'انواع چای و دمنوش‌های گیاهی و سنتی',
//       icon: <GiCoffeeCup className='w-12 h-12 text-white' />,
//       gradient: 'from-orange-500 to-red-500',
//       bgColor: 'bg-orange-50',
//       borderColor: 'border-orange-200',
//       textColor: 'text-orange-800',
//       href: '/categories/tea',
//       productCount: '95+ محصول',
//     },
//     {
//       id: 5,
//       name: 'روغن‌های طبیعی',
//       description: 'روغن‌های گیاهی و طبیعی با خواص درمانی',
//       icon: <GiOlive className='w-12 h-12 text-white' />,
//       gradient: 'from-teal-500 to-cyan-500',
//       bgColor: 'bg-teal-50',
//       borderColor: 'border-teal-200',
//       textColor: 'text-teal-800',
//       href: '/categories/oils',
//       productCount: '65+ محصول',
//     },
//     {
//       id: 6,
//       name: 'مکمل‌های غذایی',
//       description: 'مکمل‌های طبیعی و ارگانیک برای سلامتی',
//       icon: <MdMedication className='w-12 h-12 text-white' />,
//       gradient: 'from-blue-500 to-indigo-500',
//       bgColor: 'bg-blue-50',
//       borderColor: 'border-blue-200',
//       textColor: 'text-blue-800',
//       href: '/categories/supplements',
//       productCount: '110+ محصول',
//     },
//   ];

//   return (
//     <section className='py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50'>
//       <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//         <div className='text-center mb-16'>
//           <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-6'>
//             <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
//               <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
//             </svg>
//           </div>
//           <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
//             دسته‌بندی محصولات
//           </h2>
//           <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
//             محصولات متنوع و با کیفیت ما را در دسته‌بندی‌های مختلف مشاهده کنید
//           </p>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//           {categories.map((category) => (
//             <Link
//               key={category.id}
//               href={category.href}
//               className='group block'
//             >
//               <div className={`relative overflow-hidden rounded-3xl p-8 h-full ${category.bgColor} border-2 ${category.borderColor} transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2`}>
//                 {/* Background Pattern */}
//                 <div className='absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500'>
//                   <div className={`w-full h-full bg-gradient-to-br ${category.gradient} rounded-full blur-2xl`}></div>
//                 </div>
                
//                 {/* Icon Container */}
//                 <div className={`relative mb-6 w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
//                   {category.icon}
//                   <div className='absolute inset-0 bg-white/20 rounded-2xl'></div>
//                 </div>

//                 {/* Content */}
//                 <div className='relative z-10'>
//                   <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:${category.textColor} transition-colors duration-300`}>
//                   {category.name}
//                 </h3>
//                   <p className='text-gray-600 text-base leading-relaxed mb-6'>
//                     {category.description}
//                   </p>
                  
//                   {/* Product Count Badge */}
//                   <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.bgColor} ${category.textColor} border border-current/20 mb-4`}>
//                     {category.productCount}
//                   </div>

//                   {/* CTA Button */}
//                   <div className='flex items-center justify-between'>
//                     <span className='text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors duration-300'>
//                   مشاهده محصولات
//                     </span>
//                     <div className={`w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300`}>
//                   <svg
//                         className='w-4 h-4 text-white'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'
//                   >
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M9 5l7 7-7 7'
//                     />
//                   </svg>
//                 </div>
//                   </div>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         <div className='text-center mt-16'>
//           <Link
//             href='/categories'
//             className='group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
//           >
//             مشاهده همه دسته‌بندی‌ها
//             <svg
//               className='mr-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300'
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

// export default CategorySection;
