'use client';

import { useEffect, useState, useRef } from 'react';

// Sub-komponen buat bikin efek angka berjalan (Counting Up)
const Counter = ({ end, duration, prefix = '', suffix = '' }: { end: number, duration: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 19); // 60fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          observer.disconnect(); // Biar animasinya jalan sekali aja
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  // Format angka biar ada titik (contoh: 12000 -> 12.000)
  const formattedCount = count.toLocaleString('id-ID');

  return <span ref={ref}>{prefix}{formattedCount}{suffix}</span>;
};


export default function Impact() {
  return (
    <section id="impact" className="relative py-28 px-5 bg-[#A7F3D0] overflow-hidden z-10 border-t-4 border-[#295F2A]">
      
      {/* 1. Giant Aesthetic Soft Watermark */}
      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 
          className="font-['Unbounded'] text-[22vw] font-black text-transparent tracking-tighter leading-none transform rotate-1" 
          style={{ WebkitTextStroke: '3px rgba(41, 95, 42, 0.15)' }}
        >
          IMPACT
        </h1>
      </div>

      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-40 z-0" style={{ backgroundImage: 'radial-gradient(rgba(41, 95, 42, 0.2) 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 animate-on-scroll gap-6">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FFFDEE] border-[2.5px] border-[#295F2A] rounded-full px-5 py-1.5 mb-5 shadow-[3px_3px_0px_#295F2A]">
              <span className="text-lg">🌍</span>
              <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs tracking-widest uppercase">Eco-Tracker</span>
            </div>
            <h2 className="font-['Unbounded'] text-5xl md:text-6xl font-black text-[#295F2A] uppercase leading-[0.9] tracking-tighter">
              BEYOND <span className="text-white bg-[#295F2A] px-3 pb-1 border-[3px] border-[#295F2A] rounded-2xl transform -rotate-2 inline-block shadow-[4px_4px_0px_#FFFDEE]">THE BITE.</span>
            </h2>
          </div>
          
          <div className="max-w-sm text-center md:text-right bg-white/60 backdrop-blur-sm p-4 rounded-2xl border-2 border-[#295F2A] border-dashed">
            <p className="font-['Poppins'] text-[#1E4620] font-semibold text-sm">
              Setiap makanan yang lo selamatkan berkontribusi langsung pada penurunan emisi gas rumah kaca.
            </p>
          </div>
        </div>

        {/* --- STATISTIC BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Meals Rescued */}
          <div className="bg-white p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative flex flex-col justify-between hover:-translate-y-2 transition-transform animate-on-scroll">
            <div className="absolute -top-4 right-6 bg-[#F0C45C] border-[2.5px] border-[#295F2A] px-3 py-1 rounded-lg font-['Unbounded'] font-black text-[10px] text-[#295F2A] shadow-[2px_2px_0px_#295F2A] transform rotate-3">
              KONSUMSI
            </div>
            
            <div className="w-16 h-16 bg-[#F7F3E2] border-2 border-[#295F2A] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0px_#295F2A]">
              🍱
            </div>
            
            <div>
              <p className="font-['Poppins'] text-[#1E4620] font-bold text-xs tracking-widest uppercase opacity-80 mb-1">Porsi Terselamatkan</p>
              <h3 className="font-['Unbounded'] text-4xl md:text-5xl font-black text-[#D13838] leading-none mb-3">
                <Counter end={12450} duration={2000} suffix="+" />
              </h3>
              <p className="font-['Poppins'] text-[#1E4620] text-sm font-medium">
                Porsi makanan lezat yang berhasil dicegah dari tempat sampah bulan ini.
              </p>
            </div>
          </div>

          {/* Card 2: CO2 Prevented (Highlight/Beda Warna) */}
          <div className="bg-[#B3E5FC] p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative flex flex-col justify-between transform md:-translate-y-4 hover:-translate-y-6 transition-transform animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="absolute -top-4 left-6 bg-white border-[2.5px] border-[#295F2A] px-3 py-1 rounded-lg font-['Unbounded'] font-black text-[10px] text-[#295F2A] shadow-[2px_2px_0px_#295F2A] transform -rotate-2">
              LINGKUNGAN
            </div>

            <div className="w-16 h-16 bg-[#FFFDEE] border-2 border-[#295F2A] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0px_#295F2A]">
              🌿
            </div>
            
            <div>
              <p className="font-['Poppins'] text-[#1E4620] font-bold text-xs tracking-widest uppercase opacity-80 mb-1">Emisi CO2 Dicegah</p>
              <h3 className="font-['Unbounded'] text-4xl md:text-5xl font-black text-[#295F2A] leading-none mb-3">
                <Counter end={8200} duration={2500} suffix=" kg" />
              </h3>
              <p className="font-['Poppins'] text-[#1E4620] text-sm font-medium">
                Setara dengan menanam ratusan pohon baru di tengah kota Jakarta.
              </p>
            </div>
          </div>

          {/* Card 3: Money Saved */}
          <div className="bg-[#FFFDEE] p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative flex flex-col justify-between hover:-translate-y-2 transition-transform animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="absolute -top-4 right-6 bg-[#D13838] border-[2.5px] border-[#295F2A] px-3 py-1 rounded-lg font-['Unbounded'] font-black text-[10px] text-white shadow-[2px_2px_0px_#295F2A] transform rotate-3">
              EKONOMI
            </div>

            <div className="w-16 h-16 bg-[#A7F3D0] border-2 border-[#295F2A] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-[2px_2px_0px_#295F2A]">
              💸
            </div>
            
            <div>
              <p className="font-['Poppins'] text-[#1E4620] font-bold text-xs tracking-widest uppercase opacity-80 mb-1">Uang Dihemat User</p>
              <h3 className="font-['Unbounded'] text-4xl md:text-5xl font-black text-[#F0C45C] leading-none mb-3">
                <Counter end={150} duration={3000} prefix="Rp" suffix=" JT+" />
              </h3>
              <p className="font-['Poppins'] text-[#1E4620] text-sm font-medium">
                Total uang yang berhasil dihemat pengguna GreenBite dari diskon surplus.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}