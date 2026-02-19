import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzE0MjQ3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGRlYWx8ZW58MXx8fHwxNzcxMzQ4NzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50JTIwY29udHJhY3R8ZW58MXx8fHwxNzcxNDMwODM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1765438869297-6fa4b627906a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcxNDEwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc2VydmVyJTIwcm9vbSUyMGRhdGF8ZW58MXx8fHwxNzcxNDc1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBjZW50ZXJ8ZW58MXx8fHwxNzcxNDc1NTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galeri Aktivitas</h2>
          <p className="text-gray-600">Dokumentasi kegiatan dan lingkungan kerja kami.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md group"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
