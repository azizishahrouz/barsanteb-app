import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
// import CategorySection from '@/components/CategorySection/CategorySection';
// import HerbalStoresSection from '@/components/HerbalStoresSection/HerbalStoresSection';
// import DoctorsSection from '@/components/DoctorsSection/DoctorsSection';
// import OrganicStoresSection from '@/components/OrganicStoresSection/OrganicStoresSection';
// import MyTemperamentSection from '@/components/MyTemperamentSection/MyTemperamentSection';
// import AISection from '@/components/AISection/AISection';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <CategorySection /> */}
      {/* <HerbalStoresSection /> */}
      {/* <DoctorsSection /> */}
      {/* <OrganicStoresSection /> */}
      {/* <MyTemperamentSection /> */}
      {/* <AISection /> */}
      <ContactSection />
    </main>
  );
}

