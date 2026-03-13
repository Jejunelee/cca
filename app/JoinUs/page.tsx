import Header from "@/app/JoinUs/components/Header"; // Import the Header component
import Footer from "@/app/components/landing/Footer";
import JoinUs from "@/app/JoinUs/components/JoinUs"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <JoinUs />
      <Footer />
    </div>
  );
}