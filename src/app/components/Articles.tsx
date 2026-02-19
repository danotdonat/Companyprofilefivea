import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Placeholder data since no articles were provided
const articles = [
  {
    title: "Pentingnya Digital Marketing untuk Bisnis Modern",
    excerpt: "Di era digital saat ini, pemasaran online bukan lagi pilihan, melainkan keharusan untuk menjangkau pasar yang lebih luas.",
    date: "12 Februari 2026",
    image: "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcxNDEwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Strategi Mengelola SDM di Masa Krisis",
    excerpt: "Tips dan trik menjaga produktivitas dan moral karyawan ketika perusahaan menghadapi tantangan ekonomi.",
    date: "10 Januari 2026",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTQ2NTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Sertifikasi Halal: Peluang Pasar Baru",
    excerpt: "Bagaimana sertifikasi Halal dapat membuka pintu ekspor dan meningkatkan kepercayaan konsumen muslim.",
    date: "5 Januari 2026",
    image: "https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHdvcmtzaG9wJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDc1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Articles() {
  return (
    <section id="articles" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Artikel Terbaru</h2>
            <p className="text-gray-600">Wawasan dan berita terkini seputar dunia bisnis.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-blue-800 font-semibold hover:gap-3 transition-all">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-blue-600 mb-2 block">{article.date}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <a href="#" className="text-sm font-semibold text-gray-900 flex items-center gap-1 group-hover:text-red-600 transition-colors">
                  Baca Selengkapnya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-blue-800 font-semibold">
            Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
