import Hero from "@/components/Hero";
import About from "@/components/Aboutus";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
