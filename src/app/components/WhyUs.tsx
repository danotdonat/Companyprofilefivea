import { motion } from "motion/react";
import { CheckCircle, Briefcase, Users, Lightbulb, Target } from "lucide-react";

const reasons = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "Berpengalaman",
    desc: "Berpengalaman semenjak tahun 2024 dalam menangani berbagai industri."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Theory & Practice",
    desc: "Menggabungkan manajemen ilmiah dengan konsep aplikatif yang relevan untuk industri."
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Dukungan Ahli",
    desc: "Didukung oleh akademisi dan asosiasi industri yang sesuai dengan kebutuhan klien."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-500" />,
    title: "Solusi Tepat",
    desc: "Memberikan solusi yang spesifik dan dapat diterapkan langsung (aplikatif)."
  },
  {
    icon: <Target className="w-8 h-8 text-purple-600" />,
    title: "Fokus Tujuan",
    desc: "Membantu pencapaian tujuan organisasi menjadi lebih terarah dan efektif."
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa FiveA Project?</h2>
          <p className="text-gray-600">Keunggulan kami sebagai mitra pertumbuhan bisnis Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
