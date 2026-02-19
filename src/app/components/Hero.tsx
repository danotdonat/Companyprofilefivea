import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBjb25zdWx0aW5nfGVufDF8fHx8MTc3MTQwNTg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Business Meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Solusi Bisnis & Pengembangan Organisasi Terpercaya
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            Kami memberikan wawasan, perencanaan, dan solusi aplikatif untuk kinerja terbaik individu maupun organisasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Layanan Kami <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-semibold rounded-full transition-all flex items-center justify-center shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
