import image_e2f3abdb9f6513382a9957bd5ccbcabbff96e8da from 'figma:asset/e2f3abdb9f6513382a9957bd5ccbcabbff96e8da.png'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from 'figma:asset/9b7ee2ffb41c7664ce6e1b389ec3a917044be0d4.png';

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Keunggulan", href: "#why-us" },
  { name: "Galeri", href: "#gallery" },
  { name: "Kontak", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src={image_e2f3abdb9f6513382a9957bd5ccbcabbff96e8da} alt="FiveA Project Logo" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                scrolled ? "text-gray-800" : "text-gray-900 bg-white/50 px-2 py-1 rounded-md hover:bg-white/80"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-lg"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 font-medium hover:text-blue-800"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
