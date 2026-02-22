import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PricingCard from './PricingCard';

export default function TugasSection() {
  const [activeTab, setActiveTab] = useState('priceList');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingPlans = [
    {
      title: '🎓 JASA TUGAS KULIAH – FAST & RESPONSIVE',
      price: 'Melayani berbagai jenis tugas:',
      features: [
         "Makalah",
         "Resume & Review Jurnal",
         "Essay",
         "Artikel Ilmiah",
          "Proposal Non Skripsi",
         "Laporan Praktikum",
          "PPT Presentasi",
          "Soal & Pembahasan",
          "Parafrase & Perapian Tugas",
          "Cek Plagiasi"
      ],
      note:'Dan Berbagai Macam Tugas Lainya'
    },
    {
      title: 'Paket Express',
      price: 'Deadline H- Jam',
      features: [
          "Prioritas utama",
          "Pengerjaan cepat & fokus",
          "Update real-time via chat",
          "Revisi diprioritaskan",
          "Bisa selesai dalam hitungan jam"
      ],
      popular: true,
      note:'🟣 Solusi untuk tugas dadakan & deadline mepet',
      noteHighlight :'Harga mulai dari 80k (tergantung jenis dan kesulitan)'
    },
    {
      title: 'Paket Reguler',
      price: 'Deadline 1–2 Hari',
      features: [
         "Prioritas pengerjaan",
          "Revisi 2x",
          "Format sesuai kampus",
          "Cek plagiasi basic",
          "File siap kumpul",
      ],
      note:'🟣 Ideal untuk deadline mendekat.',
      noteHighlight:'Harga Mulai 50K'
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan tugas?',
      answer: 'Waktu pengerjaan bervariasi: Basic 2-3 hari, Standard 1-2 hari, Premium bisa express 1 hari tergantung kompleksitas.',
    },
    {
      question: 'Bisa mengerjakan semua mata kuliah?',
      answer: 'Ya, kami melayani berbagai mata kuliah dari berbagai jurusan. Tim kami memiliki expert di berbagai bidang.',
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer: 'Pembayaran bisa dilakukan melalui transfer bank atau e-wallet. DP 50% di awal, pelunasan setelah tugas selesai.',
    },
    {
      question: 'Apakah ada garansi?',
      answer: 'Ya, kami memberikan garansi revisi sesuai paket. Jika ada kendala, kami siap revisi hingga Anda puas.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Konsultasi',
      description: 'Kirim detail tugas dan deadline Anda',
    },
    {
      number: '02',
      title: 'Deal & DP',
      description: 'Konfirmasi harga dan bayar DP 50%',
    },
    {
      number: '03',
      title: 'Proses Pengerjaan',
      description: 'Tim mulai mengerjakan tugas Anda',
    },
    {
      number: '04',
      title: 'Revisi & Selesai',
      description: 'Review, revisi jika perlu, dan pelunasan',
    },
  ];

  return (
    <section id="tugas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1741699428220-65f37f3fbbcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3AlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTU0NTA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jasa Pengerjaan Tugas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 to-purple-900/90 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Jasa Pengerjaan Tugas</h2>
              <p className="text-xl text-pink-100">Bantuan cepat untuk semua tugas kuliah Anda</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {[
            { id: 'priceList', label: 'Price List' },
            { id: 'detail', label: 'Detail Layanan' },
            { id: 'caraPesan', label: 'Cara Pesan' },
            { id: 'faq', label: 'FAQ' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {activeTab === 'priceList' && (
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
          )}

          {activeTab === 'detail' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-[300px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc3MTQ4NDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Detail Layanan Tugas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Layanan Pengerjaan Tugas Kuliah</h3>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Kesulitan menyelesaikan tugas kuliah karena deadline yang mepet atau materi yang kompleks? Kami siap membantu Anda dengan layanan pengerjaan tugas yang profesional dan terpercaya.
                    </p>
                    <p>
                      Tim kami berpengalaman dalam mengerjakan berbagai jenis tugas kuliah dari berbagai jurusan dan mata kuliah. Setiap tugas dikerjakan dengan teliti, mengikuti instruksi yang diberikan, dan diselesaikan tepat waktu.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Jenis Tugas yang Kami Kerjakan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Essay dan artikel akademik</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Makalah dan paper penelitian</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Resume dan rangkuman buku/jurnal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Tugas analisis dan studi kasus</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Presentasi PowerPoint</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Laporan praktikum dan observasi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Dan berbagai jenis tugas lainnya</span>
                      </li>
                    </ul>

                    <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Keunggulan Layanan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Pengerjaan cepat dan tepat waktu</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Konten original dan berkualitas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Referensi lengkap dan valid</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Format sesuai ketentuan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Harga terjangkau dan fleksibel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'caraPesan' && (
            <div className="max-w-5xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Cara Pemesanan Mudah
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                      <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-4">
                        {step.number}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Pertanyaan yang Sering Diajukan
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-left">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-purple-600 transition-transform ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
