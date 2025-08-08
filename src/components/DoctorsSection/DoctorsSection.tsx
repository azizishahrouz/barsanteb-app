import Link from 'next/link';

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: 'دکتر احمد محمدی',
      specialty: 'پزشک طب سنتی',
      location: 'تهران، خیابان ولیعصر',
      rating: 4.9,
      reviews: 234,
      experience: '15 سال',
      education: 'دکترای طب سنتی',
      image: '/api/placeholder/300/300',
      isOnline: true,
      consultationFee: '150,000 تومان',
    },
    {
      id: 2,
      name: 'دکتر فاطمه کریمی',
      specialty: 'متخصص تغذیه',
      location: 'اصفهان، خیابان چهارباغ',
      rating: 4.7,
      reviews: 189,
      experience: '12 سال',
      education: 'دکترای تغذیه',
      image: '/api/placeholder/300/300',
      isOnline: false,
      consultationFee: '120,000 تومان',
    },
    {
      id: 3,
      name: 'دکتر علی رضایی',
      specialty: 'پزشک عمومی',
      location: 'شیراز، خیابان زند',
      rating: 4.8,
      reviews: 156,
      experience: '18 سال',
      education: 'دکترای پزشکی عمومی',
      image: '/api/placeholder/300/300',
      isOnline: true,
      consultationFee: '100,000 تومان',
    },
  ];

  return (
    <section className='py-16 bg-gra'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            پزشکان متخصص
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            با بهترین پزشکان متخصص در زمینه طب سنتی و تغذیه مشاوره کنید
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100'
            >
              <div className='relative'>
                <div className='h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center'>
                  <div className='text-6xl'>👨‍⚕️</div>
                </div>
                {doctor.isOnline && (
                  <div className='absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center'>
                    <div className='w-2 h-2 bg-white rounded-full ml-1'></div>
                    آنلاین
                  </div>
                )}
                <div className='absolute top-4 left-4 flex items-center bg-white bg-opacity-90 px-2 py-1 rounded-full'>
                  <svg
                    className='w-4 h-4 text-yellow-400 ml-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <span className='text-sm font-medium'>{doctor.rating}</span>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                  {doctor.name}
                </h3>
                <p className='text-green-600 font-medium mb-2'>
                  {doctor.specialty}
                </p>
                <p className='text-gray-600 text-sm mb-3 flex items-center'>
                  <svg
                    className='w-4 h-4 ml-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  {doctor.location}
                </p>

                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='text-center'>
                    <p className='text-xs text-gray-500'>تجربه</p>
                    <p className='text-sm font-medium text-gray-900'>
                      {doctor.experience}
                    </p>
                  </div>
                  <div className='text-center'>
                    <p className='text-xs text-gray-500'>مشاوره</p>
                    <p className='text-sm font-medium text-gray-900'>
                      {doctor.consultationFee}
                    </p>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>
                    {doctor.reviews} نظر
                  </span>
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
                  >
                    رزرو مشاوره
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Link
            href='/doctors'
            className='inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200'
          >
            مشاهده همه پزشکان
            <svg
              className='mr-2 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
