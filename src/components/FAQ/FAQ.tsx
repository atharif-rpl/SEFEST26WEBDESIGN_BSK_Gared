'use client';

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah makanannya masih aman dikonsumsi?",
      a: "100% aman! Makanan surplus yang dijual di GreenBite adalah makanan segar yang tidak terjual di hari itu, BUKAN makanan sisa dari piring orang lain atau makanan basi."
    },
    {
      q: "Kapan waktu terbaik buat pesen (Rescue Window)?",
      a: "Biasanya menu akan muncul 1-2 jam sebelum jam tutup restoran (sekitar jam 8-10 malam). Pantau terus notifikasi aplikasi lo!"
    },
    {
      q: "Apakah saya perlu bawa wadah sendiri?",
      a: "Sangat disarankan! Beberapa restoran menyediakan kemasan, tapi membawa wadah (tumbler/kotak makan) sendiri akan memberikan lo tambahan Poin Eco di aplikasi."
    },
    {
      q: "Gimana cara pembayarannya?",
      a: "Semua transaksi dilakukan 100% cashless via aplikasi (QRIS, GoPay, OVO, Virtual Account). Saat di restoran, lo cukup tunjukin Barcode/Digital Receipt untuk ambil makanannya."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-5 bg-[#F7F3E2] z-10 border-t-4 border-[#295F2A]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-block bg-[#FFFDEE] border-2 border-[#295F2A] rounded-full px-4 py-1 mb-4 shadow-[3px_3px_0px_#295F2A]">
            <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs">🤔 Masih Ragu?</span>
          </div>
          <h2 className="font-['Unbounded'] text-4xl md:text-5xl font-black text-[#295F2A] uppercase">
            FAQ.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border-[3px] border-[#295F2A] rounded-2xl transition-all duration-300 ${
                activeIndex === index ? 'shadow-[6px_6px_0px_#295F2A]' : 'shadow-[2px_2px_0px_#295F2A] hover:shadow-[4px_4px_0px_#295F2A]'
              }`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center bg-white rounded-2xl text-left focus:outline-none z-10 relative"
              >
                <span className="font-['Unbounded'] font-bold text-[#295F2A] text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <span className={`w-8 h-8 rounded-full border-2 border-[#295F2A] flex items-center justify-center flex-shrink-0 font-bold text-[#295F2A] transition-transform duration-300 ${activeIndex === index ? 'bg-[#D13838] text-white rotate-180' : 'bg-[#A7F3D0]'}`}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {/* THE ULTIMATE FIX: Inline CSS */}
              <div 
                style={{
                  maxHeight: activeIndex === index ? '500px' : '0px',
                  opacity: activeIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t-2 border-dashed border-[#295F2A]/20">
                    <p className="font-['Poppins'] text-[#1E4620] text-sm font-medium leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}