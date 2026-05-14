import Header from "./components/Header"; // Import the Header component
import Section1 from "./components/Section1";
import Footer from "@/app/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1 />
      <Footer />
    </div>
  );
}   