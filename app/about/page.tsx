import Header from "@/app/about/components/Header"; // Import the Header component
import Section1 from "./components/Section1";
import PoweredBy from "./components/PoweredBy";
import Team from "./components/Team";
import Footer from "@/app/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1 />
      <PoweredBy />
      <Team />
      <Footer />
    </div>
  );
}