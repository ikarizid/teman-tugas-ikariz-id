export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Solusi Cepat & Profesional
              </span>
              <br />
              <span className="text-gray-800">
                untuk Tugas dan Skripsi Anda
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bimbingan, revisi, dan pengerjaan terpercaya dengan hasil berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('skripsi')}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Lihat Layanan
              </button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300"
              >
                Hubungi Kami
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3AlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTU0NTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Student studying"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-500/20"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
