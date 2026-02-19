import logo from 'figma:asset/9b7ee2ffb41c7664ce6e1b389ec3a917044be0d4.png';
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logo} alt="FiveA Project" className="h-12 w-auto bg-white/10 rounded p-1" />
            <p className="text-gray-400 leading-relaxed">
              Lembaga Konsultan & Bisnis yang fokus pada pengembangan organisasi, SDM, dan sistem manajemen untuk mencapai kinerja terbaik.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#articles" className="text-gray-400 hover:text-white transition-colors">Artikel</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Layanan Utama</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Pengembangan Bisnis</li>
              <li className="text-gray-400">Manajemen SDM</li>
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">Legal & Perizinan</li>
              <li className="text-gray-400">Sertifikasi Halal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Kontak</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <strong className="block text-white mb-1">Email:</strong>
                info@fiveaproject.my.id
              </li>
              <li className="text-gray-400">
                <strong className="block text-white mb-1">Lokasi:</strong>
                Bali resort D1/15 Kab. Bogor, Jawa Barat
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FiveA Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
