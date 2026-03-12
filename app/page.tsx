import Hero from "@/app/components/landing/Hero";
import Stats from "@/app/components/landing/Stats";
import Section1 from "@/app/components/landing/Section1";
import Offers from "@/app/components/landing/Offers";
import PreviousEvents from "@/app/components/landing/PreviousEvents";
import Events from "@/app/components/landing/Events";
import Footer from "@/app/components/landing/Footer";
import Announcement from "@/app/components/landing/Announcement"; // Import the Announcement component

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Announcement />
      <Hero />
      <Stats />
      <Section1 />
      <Offers />
      <PreviousEvents />
      <Events />
      <Footer />
    </div>
  );
}