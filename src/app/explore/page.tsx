'use client';

import { useState } from 'react';
import Link from 'next/link';
import { dealsData, Deal } from '@/components/Explore/deals';
import DealModal from '@/components/Explore/DealModal';

export default function ExplorePage() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDeal(null), 300);
  };

  // Filter pencarian sederhana
  const filteredDeals = dealsData.filter(deal => 
    deal.item.toLowerCase().includes(searchQuery.toLowerCase()) || 
    deal.resto.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFFDEE] font-['Poppins']">
      
      {/* Navbar Simple Khusus Halaman Explore */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-[#295F2A] px-5 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/" className="w-10 h-10 bg-[#F0C45C] border-2 border-[#295F2A] rounded-full flex items-center justify-center font-bold text-xl text-[#295F2A] hover:bg-[#295F2A] hover:text-[#F0C45C] transition-colors">
            ←
          </Link>
          <span className="font-['Unbounded'] font-black text-xl text-[#295F2A] tracking-tighter">GB.</span>
        </div>
        
        {/* Search Bar Ala E-commerce */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <input 
            type="text" 
            placeholder="Cari Roti, Sushi, atau Restoran..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-[#295F2A] rounded-full px-5 py-2.5 outline-none focus:ring-4 focus:ring-[#A7F3D0] transition-all font-medium text-sm"
          />
          <span className="absolute right-4 top-2.5 text-lg">🔍</span>
        </div>

        <div className="flex items-center gap-3">
           <div className="bg-[#B3E5FC] border-2 border-[#295F2A] px-4 py-2 rounded-full font-bold text-xs text-[#295F2A] hidden sm:block">
             📍 Jakarta Selatan
           </div>
           <div className="w-10 h-10 bg-[#295F2A] border-2 border-[#295F2A] rounded-full flex items-center justify-center text-white">
             🛒
           </div>
        </div>
      </header>

      {/* Konten Utama E-commerce */}
      <main className="max-w-7xl mx-auto px-5 py-8">
        
        {/* Mobile Search Bar (Muncul kalau di HP) */}
        <div className="md:hidden mb-8 relative">
          <input 
            type="text" 
            placeholder="Cari makanan..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-[#295F2A] rounded-full px-5 py-3 outline-none focus:ring-4 focus:ring-[#A7F3D0] transition-all font-medium text-sm"
          />
        </div>

        <div className="flex justify-between items-end mb-8 border-b-2 border-dashed border-[#295F2A] pb-4">
          <div>
            <h1 className="font-['Unbounded'] text-3xl md:text-5xl font-black text-[#295F2A] uppercase tracking-tight">
              Katalog <span className="text-[#D13838]">Rescue</span>
            </h1>
            <p className="text-[#1E4620] mt-2 font-medium">Menampilkan {filteredDeals.length} makanan siap diselamatkan.</p>
          </div>
          
          {/* Mockup Filter Button */}
          <button className="bg-white border-2 border-[#295F2A] px-4 py-2 rounded-xl font-bold text-sm text-[#295F2A] flex items-center gap-2 hover:bg-[#F7F3E2] shadow-[2px_2px_0px_#295F2A]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filter
          </button>
        </div>

        {/* Grid Katalog Full Screen */}
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredDeals.map((deal) => (
              <div 
                key={deal.id} 
                onClick={() => openModal(deal)}
                className="bg-white rounded-2xl border-2 border-[#295F2A] shadow-[4px_4px_0px_#295F2A] flex flex-col overflow-hidden hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
              >
                <div className={`h-32 ${deal.bgColor} border-b-2 border-[#295F2A] relative flex items-center justify-center`}>
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm border-2 border-[#295F2A] px-2 py-0.5 rounded-full font-['Poppins'] font-bold text-[9px] text-[#1E4620]">
                    {deal.distance}
                  </div>
                  <span className="text-5xl drop-shadow-sm">{deal.emoji}</span>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[#D13838] font-bold text-[10px] mb-1">Ends in {deal.timeLeft}</span>
                  <p className="font-['Poppins'] text-[#1E4620] font-semibold text-[9px] uppercase opacity-70 truncate">{deal.resto}</p>
                  <h3 className="font-['Unbounded'] text-sm font-bold text-[#295F2A] leading-tight mb-3 line-clamp-2">{deal.item}</h3>
                  
                  <div className="mt-auto flex justify-between items-end pt-2 border-t border-[#295F2A]/20">
                    <div>
                      <span className="block line-through text-[9px] font-bold text-gray-400 leading-none mb-0.5">{deal.oldPrice}</span>
                      <span className="block font-['Unbounded'] font-black text-[#D13838] text-lg leading-none">{deal.newPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">😢</span>
            <h3 className="font-['Unbounded'] text-xl font-bold text-[#295F2A]">Yah, makanannya gak ketemu.</h3>
            <p className="text-[#1E4620]">Coba cari pakai kata kunci lain.</p>
          </div>
        )}

      </main>

      {/* Pop-up Modal masih bisa dipake di sini! */}
      <DealModal deal={selectedDeal} isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}