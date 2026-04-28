'use client';

import { useEffect } from 'react';
import { Deal } from './deals'; // <-- Import nya sekarang ke file sebelah

interface DealModalProps {
  deal: Deal | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DealModal({ deal, isOpen, onClose }: DealModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !deal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-[#1E4620]/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>

      <div className="bg-[#FFFDEE] w-full max-w-xl rounded-[32px] border-[3px] border-[#295F2A] shadow-[12px_12px_0px_#295F2A] relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white border-2 border-[#295F2A] rounded-full flex items-center justify-center font-bold text-xl text-[#295F2A] hover:bg-[#D13838] hover:text-white transition-colors z-20 shadow-[2px_2px_0px_#295F2A]"
        >
          ✕
        </button>

        <div className={`${deal.bgColor} h-40 border-b-[3px] border-[#295F2A] flex items-center justify-center relative flex-shrink-0`}>
          <span className="text-8xl drop-shadow-lg transform hover:scale-110 transition-transform">{deal.emoji}</span>
          <div className="absolute bottom-3 left-4 bg-white border-2 border-[#295F2A] px-3 py-1 rounded-xl font-['Unbounded'] font-black text-[10px] text-[#295F2A]">
            {deal.status}
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="font-['Poppins'] text-[#1E4620] font-semibold text-xs uppercase tracking-wider opacity-80 mb-1">
                {deal.resto}
              </p>
              <h2 className="font-['Unbounded'] text-2xl md:text-3xl font-black text-[#295F2A] leading-tight">
                {deal.item}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-6">
             <div className="bg-white border-2 border-[#295F2A] p-3 rounded-xl shadow-[2px_2px_0px_#295F2A]">
                <p className="font-['Poppins'] text-[10px] font-bold text-gray-500 mb-1">WAKTU TERSISA</p>
                <p className="font-['Unbounded'] font-black text-[#D13838]">{deal.timeLeft}</p>
             </div>
             <div className="bg-white border-2 border-[#295F2A] p-3 rounded-xl shadow-[2px_2px_0px_#295F2A]">
                <p className="font-['Poppins'] text-[10px] font-bold text-gray-500 mb-1">JARAK & LOKASI</p>
                <p className="font-['Unbounded'] font-black text-[#295F2A]">{deal.distance}</p>
             </div>
          </div>

          <div className="mb-6">
            <h4 className="font-['Unbounded'] font-bold text-[#295F2A] text-sm mb-2">Details:</h4>
            <p className="font-['Poppins'] text-[#1E4620] text-sm leading-relaxed">
              {deal.description}
            </p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-['Unbounded'] font-bold text-[#295F2A] text-sm mb-2">Pick-up Address:</h4>
            <p className="font-['Poppins'] text-[#1E4620] text-sm bg-white p-3 border-2 border-dashed border-[#295F2A] rounded-xl">
              📍 {deal.address}
            </p>
          </div>
        </div>

        <div className="bg-[#A7F3D0] p-6 border-t-[3px] border-[#295F2A] flex justify-between items-center flex-shrink-0">
          <div>
            <span className="block line-through text-xs font-bold text-[#1E4620] opacity-70 mb-0.5">
              {deal.oldPrice}
            </span>
            <span className="block font-['Unbounded'] font-black text-[#295F2A] text-3xl leading-none">
              {deal.newPrice}
            </span>
          </div>
          <button className="bg-[#295F2A] text-[#F0C45C] border-[2.5px] border-[#295F2A] rounded-xl px-8 py-3 font-['Unbounded'] font-black text-lg shadow-[4px_4px_0px_#1E4620] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#1E4620] transition-all">
            BUY NOW
          </button>
        </div>

      </div>
    </div>
  );
}