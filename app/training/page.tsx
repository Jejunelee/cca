import Header from "@/app/training/components/Header"; // Import the Header component
import Footer from "@/app/components/landing/Footer";
import Section1 from "@/app/training/components/Section1"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section1 />
      <Footer />
    </div>
  );
}