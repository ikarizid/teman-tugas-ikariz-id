import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import PricingCard from './PricingCard';

export default function SkripsiSection() {
  const [activeTab, setActiveTab] = useState('priceList');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingPlans = [
    {
      title: 'Paket SEMPRO',
      price: 'Mulai 800K',
      features: [
        'Bimbingan konsultasi awal',
        'Pengerjaan BAB 1-3',
        'Revisi Sampai ACC',
        'Format sesuai kampus',
        'Cek plagiarisme basic',
      ],
    },
    {
      title: 'Paket Siap Lulus',
      price: 'Mulai 2,5 Juta',
      features: [
        'Semua fitur Basic',
        'Pengerjaan BAB 1-5 lengkap',
        'Revisi unlimited',
        'Analisis data SPSS/R',
        'Cek plagiarisme premium',
        'Konsultasi bimbingan dosen',
      ],
      popular: true,
    },
    {
      title: 'Paket Per BAB',
      price: 'Mulai 200K Per BAB',
      features: [
        'BAB I Mulai 150k',
        'BAB II Mulai 300',
        'BAB III Mulai 300',
        'BAB IV Mulai 450K',
        'BAB V Mulai 100K',
      ],
      note:'Pricelist Hanya Untuk Format 5 Bab'  
    },
    {
      title: 'Paket Hemat (santai)',
      price: 'Estimasi 1-2 Bulan',
      features: [
        'Berlaku untuk semua paket utama',
        'Harga Lebih Hemat',
        'Cocok Untuk Yang Tidak Buru-Buru',
        'Tetap Dapat Revisi Seperti Paket Utama',
        'Bisa Di Gabung Dengan Semua Paket',
        'Garansi ACC hingga sidang',
      ],
    },
     {
      title: 'Paket Kilat Siap Lulus',
      price: 'Estimasi 1-2 Minggu',
      features: [
        'Priosritas Pengerjaan',
        'Update Progres Harian',
        'Revisi Di Prioritaskan',
        'Cocok Untuk Deadline Mepet',
        'Bisa digabung dengan SEMPRO / Siap Lulus / Per Bab',
      ],
      popular: true,
      note:'Harga Naik 10-30% Dari Paket normalnya'
    },
  ];

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan skripsi?',
      answer: 'Waktu pengerjaan bervariasi tergantung paket dan kompleksitas. Rata-rata 1-3 bulan untuk skripsi lengkap.',
    },
    {
      question: 'Apakah ada garansi revisi?',
      answer: 'Ya, kami menyediakan revisi sesuai paket yang dipilih. Paket Standard dan Premium mendapat revisi unlimited.',
    },
    {
      question: 'Bagaimana dengan kerahasiaan data?',
      answer: 'Semua data dan informasi klien dijamin kerahasiaannya dengan perjanjian NDA (Non-Disclosure Agreement).',
    },
    {
      question: 'Apakah bisa request tema atau topik tertentu?',
      answer: 'Tentu saja! Kami siap membantu dengan tema yang Anda inginkan atau memberikan rekomendasi topik yang sesuai.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Konsultasi',
      description: 'Diskusikan kebutuhan dan detail skripsi Anda',
    },
    {
      number: '02',
      title: 'Deal & DP',
      description: 'Setujui harga dan pembayaran DP 50%',
    },
    {
      number: '03',
      title: 'Proses Pengerjaan',
      description: 'Tim kami mulai mengerjakan dengan update berkala',
    },
    {
      number: '04',
      title: 'Revisi & Selesai',
      description: 'Revisi hingga sempurna dan pelunasan',
    },
  ];

  return (
    <section id="skripsi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1726406814732-dc5aa0c9df1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwd3JpdGluZyUyMHRoZXNpcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzcxNTU0MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Jasa Skripsi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Jasa Skripsi</h2>
              <p className="text-xl text-purple-100">Solusi terpercaya untuk skripsi berkualitas</p>
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
                    alt="Detail Layanan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Layanan Jasa Skripsi Profesional</h3>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Kami menyediakan layanan jasa penulisan skripsi yang komprehensif dan profesional untuk membantu mahasiswa menyelesaikan tugas akhir mereka dengan hasil terbaik.
                    </p>
                    <p>
                      Tim kami terdiri dari para akademisi berpengalaman yang ahli di berbagai bidang ilmu. Setiap skripsi dikerjakan dengan teliti, mengikuti metodologi penelitian yang benar, dan disesuaikan dengan panduan dari kampus masing-masing.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Fasilitas yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Konsultasi intensif dengan expert di bidang Anda</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Pengerjaan sesuai metodologi penelitian yang tepat</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Analisis data menggunakan software statistik (SPSS, R, Stata, dll)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Pengecekan plagiarisme menggunakan Turnitin/Plagscan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Format sesuai dengan pedoman kampus</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Revisi hingga ACC dari dosen pembimbing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Bantuan persiapan presentasi dan sidang</span>
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
