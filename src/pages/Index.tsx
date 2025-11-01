import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Calendar from "@/components/Calendar";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <Calendar />
      <Location />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
