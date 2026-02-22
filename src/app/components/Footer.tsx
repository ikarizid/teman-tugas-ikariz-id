import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              KARIZ.ID
            </div>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Solusi terpercaya untuk kebutuhan akademik Anda. Profesional, berkualitas, dan tepat waktu.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ikariz.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/628814372007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('skripsi')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  Jasa Skripsi
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('tugas')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  Jasa Tugas
                </button>
              </li>
              <li>
                <a href="#" className="text-purple-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-purple-300" />
                <span className="text-purple-100">
                  Bantur, Malang <br />
                  Jawa timur 65179
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-purple-300" />
                <a
                  href="https://wa.me/6281234567890"
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  +62 881-437-2007
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-purple-300" />
                <a
                  href="mailto:info@akademikpro.com"
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  ikariz.id@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 flex-shrink-0 text-purple-300" />
                <a
                  href="https://instagram.com/akademikpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-100 hover:text-white transition-colors"
                >
                  @ikariz.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-purple-200 text-sm">
              © 2026 IKARIZ.ID. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
