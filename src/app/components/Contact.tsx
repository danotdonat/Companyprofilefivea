import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real app, this would send to an API.
    // For now, we simulate success and could potentially use mailto or Supabase.
    console.log("Form Data:", data);
    toast.success("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    reset();
    
    // Optional: redirect to mailto for immediate action if no backend
    // window.location.href = `mailto:info@fiveaproject.my.id?subject=Pesan dari ${data.name}&body=${data.message}%0A%0AContact: ${data.phone}`;
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-blue-200 mb-8 text-lg">
              Diskusikan kebutuhan bisnis Anda bersama konsultan ahli kami. Kami siap membantu Anda mencapai target perusahaan.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:info@fiveaproject.my.id" className="text-blue-200 hover:text-white transition-colors">
                    info@fiveaproject.my.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telepon/WhatsApp</h3>
                  <p className="text-blue-200">+62 812-9213-3814 </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kantor</h3>
                  <p className="text-blue-200">
                    Bali resort D1/15 Kab. Bogor, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  {...register("name", { required: "Nama wajib diisi" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Nama Anda"
                />
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  {...register("email", { required: "Email wajib diisi" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="email@perusahaan.com"
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                <input
                  type="tel"
                  {...register("phone", { required: "Nomor telepon wajib diisi" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="+62..."
                />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                <textarea
                  {...register("message", { required: "Pesan wajib diisi" })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Ceritakan kebutuhan bisnis Anda..."
                />
                {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg mt-2"
              >
                <Send className="w-4 h-4" /> Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
