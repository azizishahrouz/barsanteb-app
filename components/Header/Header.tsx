import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="inline-block rounded-full bg-gradient-to-br from-green-500 to-green-300 p-1 shadow-lg transition-transform group-hover:scale-105">
                <Image
                  src="/barsan-logo.svg"
                  alt="لوگو بارسان طب"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain rounded-full bg-white shadow-md"
                  priority
                />
              </span>
              <span className="text-2xl font-extrabold text-green-700 tracking-tight drop-shadow-sm group-hover:text-green-600 transition-colors duration-200">
                بارسان طب
              </span>
            </Link>
          </div>
          {/* Add other header elements here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;