import { Award, Clock, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Profesional & Berpengalaman',
      description: 'Tim ahli dengan pengalaman bertahun-tahun dalam bidang akademik',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Tepat Waktu',
      description: 'Garansi penyelesaian sesuai deadline yang telah disepakati',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Anti Plagiarisme',
      description: '100% original dengan pemeriksaan Turnitin dan Plagscan',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Konsultasi Gratis',
      description: 'Diskusi dan konsultasi tanpa batas untuk hasil maksimal',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Memilih <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Kami?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan standar kualitas tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 text-purple-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
