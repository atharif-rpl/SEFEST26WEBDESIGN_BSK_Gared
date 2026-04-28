'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { dealsData, Deal } from './deals';
import DealModal from './DealModal';

export default function Explore() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Ref untuk masing-masing baris slider
  const sliderTopRef = useRef<HTMLDivElement>(null);
  const sliderBottomRef = useRef<HTMLDivElement>(null);

  // Bagi data: 5 pertama untuk baris atas, sisa 5 untuk baris bawah
  const rowTop = dealsData.slice(0, 5);
  const rowBottom = dealsData.slice(5, 10);

  useEffect(() => {
    const sliderTop = sliderTopRef.current;
    const sliderBottom = sliderBottomRef.current;
    if (!sliderTop || !sliderBottom) return;

    let animationId: number;
    let scrollPosTop = 0;
    // Mulai baris bawah dari posisi paling kanan
    let scrollPosBottom = sliderBottom.scrollWidth - sliderBottom.clientWidth;

    const scroll = () => {
      const speed = 0.6; // Kecepatan gerak

      // Gerakan Baris Atas (Ke Kiri / ++ scrollLeft)
      scrollPosTop += speed;
      if (scrollPosTop >= sliderTop.scrollWidth - sliderTop.clientWidth) {
        scrollPosTop = 0;
      }
      sliderTop.scrollLeft = scrollPosTop;

      // Gerakan Baris Bawah (Ke Kanan / -- scrollLeft)
      scrollPosBottom -= speed;
      if (scrollPosBottom <= 0) {
        scrollPosBottom = sliderBottom.scrollWidth - sliderBottom.clientWidth;
      }
      sliderBottom.scrollLeft = scrollPosBottom;

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause saat hover
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(scroll); };

    [sliderTop, sliderBottom].forEach(el => {
      el.addEventListener('mouseenter', pause);
      el.addEventListener('mouseleave', resume);
      el.addEventListener('touchstart', pause);
      el.addEventListener('touchend', resume);
    });

    return () => cancelAnimationFrame(animationId);
  }, []);

  const openModal = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDeal(null), 300);
  };

  // Komponen Card Kecil (Reusable Internal)
  const CompactCard = ({ deal }: { deal: Deal }) => (
    <div 
      onClick={() => openModal(deal)}
      className="bg-white rounded-[24px] border-[2.5px] border-[#295F2A] shadow-[5px_5px_0px_#295F2A] flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-300 w-[240px] md:w-[260px] cursor-pointer flex-shrink-0"
    >
      <div className={`h-28 ${deal.bgColor} border-b-[2.5px] border-[#295F2A] relative flex items-center justify-center`}>
        <div className="absolute top-2 left-2 bg-white border-2 border-[#295F2A] px-2 py-0.5 rounded-lg font-['Unbounded'] font-black text-[8px] text-[#295F2A]">
          {deal.status}
        </div>
        <span className="text-5xl drop-shadow-sm">{deal.emoji}</span>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#D13838] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-md animate-pulse">URGENT</span>
          <span className="font-['Poppins'] text-[10px] font-semibold text-[#D13838]">⏳ {deal.timeLeft}</span>
        </div>
        <p className="font-['Poppins'] text-[#1E4620] font-semibold text-[9px] uppercase opacity-70 truncate">{deal.resto}</p>
        <h3 className="font-['Unbounded'] text-sm font-bold text-[#295F2A] mb-3 leading-tight truncate">{deal.item}</h3>
        <div className="mt-auto flex justify-between items-end pt-2 border-t-2 border-[#295F2A] border-dashed">
          <div>
            <span className="block line-through text-[9px] font-bold text-gray-400 leading-none">{deal.oldPrice}</span>
            <span className="block font-['Unbounded'] font-black text-[#D13838] text-lg leading-none">{deal.newPrice}</span>
          </div>
          <div className="w-7 h-7 bg-[#F0C45C] border-2 border-[#295F2A] rounded-full flex items-center justify-center font-black text-sm text-[#295F2A] shadow-[2px_2px_0px_#295F2A]">
            +
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="explore" className="relative py-24 bg-[#F7F3E2] overflow-hidden z-10 border-t-4 border-[#295F2A]">
      
      {/* Watermark DEALS */}
      <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="font-['Unbounded'] text-[24vw] font-black text-transparent tracking-tighter leading-none transform -rotate-1" style={{ WebkitTextStroke: '2px rgba(41, 95, 42, 0.08)' }}>
          DEALS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 animate-on-scroll">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 bg-white border-[2px] border-[#295F2A] rounded-full px-4 py-1 mb-4 shadow-[3px_3px_0px_#295F2A]">
              <span className="w-2 h-2 rounded-full bg-[#D13838] animate-pulse"></span>
              <span className="font-['Unbounded'] font-bold text-[#295F2A] text-[10px] tracking-widest uppercase">Live Rescues</span>
            </div>
            <h2 className="font-['Unbounded'] text-4xl md:text-6xl font-black text-[#295F2A] uppercase leading-[0.9] tracking-tighter">
              SAVE <span className="text-[#D13838]">FOOD.</span><br/>
              SAVE <span className="text-[#D13838]">MONEY.</span>
            </h2>
          </div>
          
          {/* Tombol See More yang Sangat Eye-Catching */}
          <Link href="/explore" className="group relative inline-flex items-center gap-3 bg-[#A7F3D0] border-[3px] border-[#295F2A] px-8 py-4 rounded-2xl shadow-[6px_6px_0px_#295F2A] hover:shadow-[2px_2px_0px_#295F2A] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 overflow-hidden">
            <span className="font-['Unbounded'] font-black text-[#295F2A] text-sm uppercase relative z-10">See All Deals</span>
            <span className="text-xl relative z-10 group-hover:translate-x-1 transition-transform">🚀</span>
            <div className="absolute inset-0 bg-[#F0C45C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* --- DUAL SLIDER --- */}
        <div className="flex flex-col gap-8">
          
          {/* Baris 1: Bergerak ke Kiri */}
          <div 
            ref={sliderTopRef}
            className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar cursor-grab"
          >
            {rowTop.map((deal) => <CompactCard key={deal.id} deal={deal} />)}
            {/* Duplikasi buat smooth infinite feel */}
            {rowTop.map((deal) => <CompactCard key={`dup1-${deal.id}`} deal={deal} />)}
          </div>

          {/* Baris 2: Bergerak ke Kanan */}
          <div 
            ref={sliderBottomRef}
            className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar cursor-grab"
          >
            {rowBottom.map((deal) => <CompactCard key={deal.id} deal={deal} />)}
            {/* Duplikasi buat smooth infinite feel */}
            {rowBottom.map((deal) => <CompactCard key={`dup2-${deal.id}`} deal={deal} />)}
          </div>

        </div>

      </div>

      <DealModal deal={selectedDeal} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}