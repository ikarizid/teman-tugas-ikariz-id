import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IKARIZ.ID
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('skripsi')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Skripsi
            </button>
            <button
              onClick={() => scrollToSection('tugas')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Tugas
            </button>
            <button
              onClick={() => scrollToSection('testimoni')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Kontak
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Konsultasi Sekarang
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('beranda')}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-left"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection('skripsi')}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-left"
              >
                Skripsi
              </button>
              <button
                onClick={() => scrollToSection('tugas')}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-left"
              >
                Tugas
              </button>
              <button
                onClick={() => scrollToSection('testimoni')}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-left"
              >
                Testimoni
              </button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="text-gray-700 hover:text-purple-600 transition-colors py-2 text-left"
              >
                Kontak
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all">
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
