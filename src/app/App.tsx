import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SkripsiSection from './components/SkripsiSection';
import TugasSection from './components/TugasSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <SkripsiSection />
        <TugasSection />
      </main>
      <Footer />
    </div>
  );
}
