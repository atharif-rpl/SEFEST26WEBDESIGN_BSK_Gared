'use client';

import { useState, useEffect } from 'react';

export default function Intro() {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Kunci scroll body selama intro jalan
    document.body.style.overflow = 'hidden';

    // Timer 1: Mulai animasi naik ke atas setelah 2 detik
    const timer1 = setTimeout(() => {
      setSlideUp(true);
    }, 2000);

    // Timer 2: Hapus komponen intro dari layar setelah 2.8 detik (animasi selesai)
    const timer2 = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset'; // Buka lagi scroll body-nya
      window.scrollTo(0, 0); // Pastiin web mulai dari paling atas
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] bg-[#295F2A] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        slideUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background Dotted Gelap */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255, 253, 238, 0.3) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Roti Muter */}
        <div className="w-20 h-20 bg-[#FFFDEE] border-4 border-[#F0C45C] rounded-full flex items-center justify-center text-4xl mb-6 shadow-[6px_6px_0px_#1E4620] animate-[spin_3s_linear_infinite]">
        <img src="/images/logogreenbite.png" alt=""  />
        </div>
        
        {/* Teks Logo */}
        <div className="overflow-hidden">
          <h1 className="font-['Unbounded'] text-5xl md:text-7xl font-black text-[#F0C45C] tracking-tighter uppercase animate-[translate-y-0_0.5s_ease-out]">
            GreenBite.
          </h1>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-2 bg-[#1E4620] rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-[#A7F3D0] rounded-full animate-[loading_1.5s_ease-in-out_forwards]"></div>
        </div>

        {/* Keyframe khusus loading bar */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loading {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}} />
      </div>
    </div>
  );
}