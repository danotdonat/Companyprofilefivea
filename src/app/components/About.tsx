import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTQ2NTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tentang FiveA Project"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-50 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-blue-800">FiveA Project</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              FiveA Project adalah Lembaga Konsultan & Bisnis yang fokus pada pengembangan organisasi dan bisnis, sumber daya manusia, manajemen marketing, sistem operasional dan standarisasi Internasional.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Kami senantiasa memberikan saran-saran untuk pencapaian kinerja terbaik bagi individu maupun organisasi / perusahaan sehingga mampu menjalankan aktifitas bisnis menjadi lebih baik, efisien dan efektif. Dengan dukungan tenaga ahli yang profesional dan berpengalaman, kami memberikan wawasan, perencanaan dan solusi yang aplikatif dan tepat.
            </p>

            <div className="space-y-4">
              {[
                "Pengembangan Organisasi & Bisnis",
                "Manajemen SDM Profesional",
                "Solusi Aplikatif & Tepat Guna",
                "Standarisasi Internasional"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
