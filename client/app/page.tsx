import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BestO2Section from "@/components/O2Section";
import TrendingPlants from "@/components/Trending";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 relative">
      {/* Natural green overlay patterns */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-950/50 via-transparent to-emerald-900/30 z-0" />

      {/* Organic texture overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #059669 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, #047857 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <TrendingPlants/>
        <BestO2Section/>
        <Footer/>
      </div>
    </div>
  )
}
