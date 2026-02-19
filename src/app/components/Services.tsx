import { motion } from "motion/react";
import { 
  TrendingUp, 
  Settings, 
  Megaphone, 
  Users, 
  HeartHandshake, 
  Cpu, 
  GraduationCap, 
  Scale, 
  Award, 
  Network
} from "lucide-react";

const services = [
  {
    title: "Pengembangan Bisnis",
    icon: <TrendingUp className="w-6 h-6" />,
    items: [
      "Strategi bisnis dan perencanaan",
      "Franchise / lisensi & kemitraan",
      "Pengembangan organisasi",
      "Analisa pengembangan bisnis",
      "Strategi & analisa bisnis berkelanjutan"
    ]
  },
  {
    title: "Sistem & Tata Kelola",
    icon: <Settings className="w-6 h-6" />,
    items: [
      "Penyusunan SOP",
      "Perbaikan sistem manajemen",
      "Peraturan perusahaan",
      "Good corporate governance",
      "Analisa & strategi kinerja"
    ]
  },
  {
    title: "Manajemen Marketing",
    icon: <Megaphone className="w-6 h-6" />,
    items: [
      "Analisa trend & segmentasi",
      "Branding & pencitraan",
      "Komunikasi efektif",
      "Strategi marketing efektif",
      "Digital marketing"
    ]
  },
  {
    title: "Manajemen SDM",
    icon: <Users className="w-6 h-6" />,
    items: [
      "Analisa & evaluasi kinerja",
      "Rekrutmen karyawan",
      "Strategi pengelolaan SDM",
      "Pengembangan kinerja SDM",
      "Perencanaan sistem SDM"
    ]
  },
  {
    title: "Customer Fokus",
    icon: <HeartHandshake className="w-6 h-6" />,
    items: [
      "Survey kepuasan pelanggan",
      "Manajemen budaya organisasi",
      "Manajemen perubahan"
    ]
  },
  {
    title: "Teknologi Informasi",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      "Penciptaan website",
      "Analisa digital marketing",
      "SEO & Google Ads",
      "Solusi IT perusahaan",
      "Upgrade sistem IT"
    ]
  },
  {
    title: "Training & Development",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Kami menyiapkan materi training sesuai kebutuhan dari perusahaan / organisasi sehingga diharapkan setelah mengikuti training akan tercapai tujuan yang diharapkan.",
    fullWidth: true
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pelayanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            FiveA Konsultan memberikan solusi komprehensif untuk setiap aspek bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-800 ${service.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              {service.items ? (
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Specialized Services Sections */}
        <div className="mt-20 space-y-16">
          
          {/* Legal Compliance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 bg-blue-900 text-white p-10 flex flex-col justify-center">
              <Scale className="w-12 h-12 mb-6 text-red-400" />
              <h3 className="text-2xl font-bold mb-4">Legal Compliance & Business Licensing</h3>
              <p className="text-blue-100">Solusi lengkap untuk legalitas dan perizinan usaha Anda.</p>
            </div>
            <div className="md:w-2/3 p-10 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Pendirian Badan Usaha</h4>
                <p className="text-sm text-gray-600">Proses legal formal PT, CV, Koperasi, Yayasan. Dari akta notaris hingga pengesahan Kemenkumham.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Perizinan Usaha</h4>
                <p className="text-sm text-gray-600">Pengurusan NIB, izin operasional, izin lingkungan, dan izin sektoral khusus.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Kontrak & Perjanjian</h4>
                <p className="text-sm text-gray-600">Pembuatan dan tinjauan kontrak kerjasama, sewa, franchise, dan perjanjian khusus.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Konsultasi Berkelanjutan</h4>
                <p className="text-sm text-gray-600">Mitra jangka panjang untuk memastikan kepatuhan regulasi terbaru.</p>
              </div>
            </div>
          </motion.div>

          {/* Halal Certification */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl overflow-hidden shadow-xl border border-green-100 p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Pendampingan Sertifikasi Halal</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Mulai tahun 2027, seluruh produk wajib bersertifikat Halal. Kami siap mendampingi UMKM hingga industri skala nasional untuk mendapatkan sertifikat Halal dari BPJPH.
                </p>
                <p className="text-gray-600 mb-6">
                  Sertifikasi Halal meningkatkan kepercayaan konsumen, nilai brand, dan jangkauan pasar yang lebih luas. Percayakan prosesnya kepada FiveA.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Konsultasi Halal Sekarang
                </button>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1765438863717-49fca900f861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHdvcmtzaG9wJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzcxNDc1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Halal Certification" 
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Integrated Systems (Sadhana) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <Network className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Sadhana: Sistem Bisnis Terintegrasi</h3>
              <p className="text-xl text-gray-300 mb-8">
                Satu ekosistem untuk semua kebutuhan bisnis Anda. Absensi, Kepegawaian, Keuangan, Operasional, Marketing, hingga Penjualan. Semua terkoneksi untuk keputusan yang lebih cepat dan tepat.
              </p>
              <a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
                Pelajari Lebih Lengkap Tentang Sadhana
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
