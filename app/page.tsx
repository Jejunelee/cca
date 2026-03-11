import Hero from "@/app/components/landing/Hero";
import Stats from "@/app/components/landing/Stats";
import Section1 from "@/app/components/landing/Section1";
import Offers from "@/app/components/landing/Offers";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Hero />
      <Stats />
      <Section1 />
      <Offers />
    </div>
  );
}