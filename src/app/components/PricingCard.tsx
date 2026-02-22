import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  note?: string;
  noteHighlight?: string;
}

export default function PricingCard({ 
  title, 
  price, 
  features, 
  popular = false,
  note,
  noteHighlight,
}: PricingCardProps) {

  const phoneNumber = "628814372007";

  const message = `Halo, saya ingin pesan ${title}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
        popular ? 'border-2 border-purple-500' : 'border border-gray-200'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
            Paling Populer
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            {price}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-purple-600" />
            </div>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      {note && (
  <div className="text-sm text-gray-500 mb-6">
    {note}
  </div>
)}
 {noteHighlight && (
  <div className="text-sm font-semibold italic text-gray-700 mb-6">
    {noteHighlight}
  </div>
)} 
      {title === "Paket Hemat (santai)" && (
  <div className="text-sm text-gray-500 mb-6">
    <p className="font-semibold">Harga bisa:</p>
    <p>Diskon 10–15%</p>
  </div>
  
  
)}

      <button
      onClick={() => window.open(whatsappUrl, "_blank")}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:scale-105'
            : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
        }`}
      >
        Pesan Sekarang
      </button>
    </div>
  );
}
