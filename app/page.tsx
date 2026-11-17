import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import RoomMap from '@/components/RoomMap';
import TechOverlay from '@/components/TechOverlay';
import PhilosophySection from '@/components/PhilosophySection';
import HarvestBoard from '@/components/HarvestBoard';
import TechEthicsSection from '@/components/TechEthicsSection';
import EnrollmentTrail from '@/components/EnrollmentTrail';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RoomMap />
        <TechOverlay />
        <PhilosophySection />
        <HarvestBoard />
        <TechEthicsSection />
        <EnrollmentTrail />
      </main>
      <Footer />
    </>
  );
}
