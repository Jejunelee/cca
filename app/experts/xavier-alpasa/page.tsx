import Header from "@/app/experts/xavier-alpasa/components/Header"; // Import the Header component
import Footer from "@/app/components/landing/Footer";
import Section from "@/app/experts/xavier-alpasa/components/Section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}