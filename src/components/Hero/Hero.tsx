'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax Effect khusus Desktop (>768px). Kalau di HP diganti animasi CSS biasa.
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768 || !heroRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      const floatingElements = heroRef.current.querySelectorAll('.parallax-el');
      floatingElements.forEach((el, index) => {
        const speed = (index + 1) * 0.8;
        const x = moveX * speed;
        const y = moveY * speed;
        const baseRotate = (el as HTMLElement).dataset.rotate || 'rotate(0deg)';
        (el as HTMLElement).style.transform = `translate(${-x}px, ${-y}px) ${baseRotate}`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen bg-[#FFFDEE] flex flex-col justify-center items-center overflow-hidden border-b-4 border-[#295F2A]">
      
      {/* Animasi Floating buat di Mobile & Marquee Ticker */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentle-float {
          0%, 100% { transform: translateY(0px) rotate(var(--base-rot)); }
          50% { transform: translateY(-12px) rotate(calc(var(--base-rot) + 3deg)); }
        }
        .mobile-float { animation: gentle-float 4s ease-in-out infinite; }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker { animation: ticker 20s linear infinite; display: flex; width: max-content; }
      `}} />

      {/* Dotted Background */}
      <div className="absolute inset-0 opacity-50 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(41, 95, 42, 0.2) 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>

      {/* TULISAN TENGAH (KEMBALI KE ASLI) */}
      <div className="text-center z-20 px-5 animate-on-scroll">
        <h1 className="font-['Unbounded'] text-6xl md:text-8xl lg:text-[100px] font-black text-[#295F2A] tracking-tight mb-2">
          GreenBite
        </h1>
        <p className="font-['Poppins'] text-xl md:text-3xl text-[#1E4620] font-bold" style={{ transitionDelay: '0.2s' }}>
          Stop Waste. Share Taste.
        </p>
      </div>

      {/* =======================================================
          ASET & ORNAMEN (DIATUR POSISINYA BIAR GAK SEPI DI HP)
          ======================================================= */}

      {/* 1. Polaroid 1 (Croissant) -> Kiri Atas */}
      <div 
        className="parallax-el mobile-float absolute top-[12%] left-[5%] md:top-[20%] md:left-[15%] z-10 w-[140px] md:w-[200px]" 
        data-rotate="rotate(-8deg)" 
        style={{ '--base-rot': '-8deg' } as React.CSSProperties}
      >
        <div className="bg-white p-3 pb-8 md:pb-12 rounded-[20px] border-[3px] border-[#295F2A] shadow-[6px_6px_0px_#295F2A] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#A7F3D0]/90 border border-[#295F2A]/20 rotate-[-4deg]"></div>
          <div className="w-full h-24 md:h-32 bg-[#F7F3E2] border-2 border-[#295F2A] rounded-xl flex items-center justify-center text-5xl md:text-6xl">🥐</div>
          <span className="font-['Unbounded'] font-bold text-[10px] md:text-xs text-[#295F2A] absolute bottom-3 left-0 w-full text-center">Rescued!</span>
        </div>
      </div>

      {/* 2. Starburst (80% OFF) -> Kanan Atas */}
      <div 
        className="parallax-el mobile-float absolute top-[18%] right-[5%] md:top-[15%] md:right-[20%] z-20"
        data-rotate="rotate(15deg)"
        style={{ '--base-rot': '15deg' } as React.CSSProperties}
      >
        <div className="w-20 h-20 md:w-28 md:h-28 bg-[#D13838] flex items-center justify-center text-center transform rotate-45 border-[3px] border-[#295F2A] shadow-[4px_4px_0px_#295F2A]">
          <div className="transform -rotate-45 text-white">
             <span className="block font-['Poppins'] font-bold text-[8px] md:text-xs leading-none">UP TO</span>
             <span className="block font-['Unbounded'] font-black text-xl md:text-3xl leading-none my-0.5">80%</span>
             <span className="block font-['Poppins'] font-bold text-[8px] md:text-xs leading-none">OFF</span>
          </div>
        </div>
      </div>

      {/* 3. Discount Tag (SURPLUS DEALS) -> Kanan Tengah/Bawah */}
      <div 
        className="parallax-el mobile-float absolute bottom-[40%] right-[2%] md:bottom-[40%] md:right-[15%] z-10"
        data-rotate="rotate(8deg)"
        style={{ '--base-rot': '8deg' } as React.CSSProperties}
      >
        <div className="bg-[#F0C45C] border-[3px] border-[#295F2A] px-4 py-2 rounded-xl font-['Unbounded'] font-black text-[10px] md:text-sm text-[#295F2A] shadow-[4px_4px_0px_#295F2A]">
          SURPLUS DEALS 🛒
        </div>
      </div>

      {/* 4. Polaroid 2 (Bento Box) -> Kiri Bawah */}
      <div 
        className="parallax-el mobile-float absolute bottom-[20%] left-[5%] md:bottom-[25%] md:left-[18%] z-10 w-[130px] md:w-[180px]" 
        data-rotate="rotate(6deg)"
        style={{ '--base-rot': '6deg' } as React.CSSProperties}
      >
        <div className="bg-white p-3 pb-8 md:pb-10 rounded-[20px] border-[3px] border-[#295F2A] shadow-[6px_6px_0px_#295F2A] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#D13838]/80 border border-[#295F2A]/20 rotate-[4deg]"></div>
          <div className="w-full h-20 md:h-28 bg-[#FFFDEE] border-2 border-[#295F2A] rounded-xl flex items-center justify-center text-4xl md:text-5xl">🍱</div>
          <span className="font-['Unbounded'] font-bold text-[10px] md:text-xs text-[#295F2A] absolute bottom-3 left-0 w-full text-center">Bento Box</span>
        </div>
      </div>

      {/* 5. Live Badge -> Kanan Bawah */}
      <div 
        className="parallax-el mobile-float absolute bottom-[22%] right-[8%] md:bottom-[20%] md:right-[25%] z-30"
        data-rotate="rotate(-3deg)"
        style={{ '--base-rot': '-3deg' } as React.CSSProperties}
      >
        <div className="bg-white border-[2.5px] border-[#295F2A] px-4 py-2 rounded-full shadow-[4px_4px_0px_#295F2A] font-['Unbounded'] font-black text-[10px] md:text-sm text-[#295F2A] flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#D13838] rounded-full animate-pulse"></span>
          LIVE: 50+ Meals
        </div>
      </div>

      {/* Ornamen Tambahan Khusus Mobile (Mencegah ruang kosong) */}
      <div className="md:hidden absolute top-[35%] left-[8%] z-10 mobile-float" style={{ '--base-rot': '-15deg' } as React.CSSProperties}>
        <div className="bg-[#A7F3D0] border-2 border-[#295F2A] px-3 py-1 rounded-full shadow-[2px_2px_0px_#295F2A] font-['Unbounded'] font-bold text-[8px] text-[#295F2A]">
          SAVE 🌍
        </div>
      </div>

      {/* =======================================================
          TICKER MARQUEE (BARIS BERJALAN DI BAWAH)
          ======================================================= */}
      <div className="absolute bottom-0 left-0 w-full bg-[#295F2A] border-t-4 border-[#1E4620] overflow-hidden py-3 z-40">
        <div className="animate-ticker flex whitespace-nowrap">
          <div className="flex gap-8 items-center px-4 font-['Unbounded'] font-bold text-sm md:text-base text-[#F0C45C] uppercase tracking-wider">
            <span>• Save Food, Save Earth</span>
            <span>• Zero Waste Movement</span>
            <span>• Grab A Bite</span>
            <span>• Green Community</span>
            <span>• Daily Surplus Deals</span>
            <span>• Save Food, Save Earth</span>
            <span>• Zero Waste Movement</span>
            <span>• Grab A Bite</span>
            <span>• Green Community</span>
            <span>• Daily Surplus Deals</span>
          </div>
        </div>
      </div>

    </section>
  );
}