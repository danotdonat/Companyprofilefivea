import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Gallery } from "./components/Gallery";
import { Articles } from "./components/Articles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Gallery />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
