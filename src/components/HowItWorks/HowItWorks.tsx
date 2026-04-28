'use client';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-5 bg-[#FFFDEE] overflow-hidden z-10 border-t-4 border-[#295F2A]">
      
      {/* 1. Giant Aesthetic Soft Watermark "PROCESS" */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none flex justify-center items-center">
        <h1 
          className="font-['Unbounded'] text-[22vw] font-black text-transparent tracking-tighter leading-none transform rotate-1" 
          style={{ WebkitTextStroke: '3px rgba(41, 95, 42, 0.08)' }}
        >
          PROCESS
        </h1>
      </div>

      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-60 z-0" style={{ backgroundImage: 'radial-gradient(rgba(41, 95, 42, 0.15) 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#A7F3D0] border-[2.5px] border-[#295F2A] rounded-full px-5 py-1.5 mb-6 shadow-[3px_3px_0px_#295F2A]">
            <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs tracking-widest uppercase">Tutorial</span>
          </div>
          <h2 className="font-['Unbounded'] text-5xl md:text-6xl font-black text-[#295F2A] uppercase mb-4 leading-tight tracking-tight">
            Rescue In <span className="text-[#F0C45C] bg-[#295F2A] px-4 pb-1 border-[3px] border-[#295F2A] rounded-[20px] transform rotate-2 inline-block shadow-[4px_4px_0px_#F0C45C]">3 STEPS.</span>
          </h2>
          <p className="font-['Poppins'] text-[#1E4620] font-medium text-lg max-w-xl mx-auto mt-4">
            Menyelamatkan makanan nggak pernah semudah ini. Cepat, murah, dan berdampak besar buat bumi.
          </p>
        </div>

        {/* PERFECT BENTO GRID */}
        {/* Pake items-stretch biar tinggi card di baris yang sama otomatis sejajar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">

          {/* ================= BARIS 1 ================= */}
          
          {/* STEP 1: Discover (Kiri Atas - Lebar 7 Kolom) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative hover:-translate-y-1 transition-transform animate-on-scroll flex flex-col justify-between">
            {/* Tag Label Rapi di Edge */}
            <div className="absolute -top-4 left-6 bg-[#F0C45C] border-[2.5px] border-[#295F2A] px-4 py-1.5 rounded-xl font-['Unbounded'] font-black text-sm text-[#295F2A] shadow-[3px_3px_0px_#295F2A] transform -rotate-2">
              STEP 01
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center h-full mt-2">
              {/* Ilustrasi HP/Map */}
              <div className="w-28 h-28 bg-[#F7F3E2] rounded-2xl border-2 border-[#295F2A] border-dashed flex items-center justify-center relative flex-shrink-0">
                 <span className="text-4xl">📍</span>
                 <div className="absolute -bottom-3 -right-3 bg-[#D13838] text-white text-[10px] font-bold px-3 py-1.5 rounded-full border-2 border-[#295F2A]">1.2 km</div>
              </div>
              {/* Teks rata kiri rapi */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-['Unbounded'] text-2xl font-bold text-[#295F2A] mb-3">Explore Surplus</h3>
                <p className="font-['Poppins'] text-[#1E4620] font-medium leading-relaxed">
                  Buka GreenBite menjelang jam tutup restoran. Radar kami nampilin daftar makanan yang masih <span className="font-bold underline decoration-[#F0C45C] decoration-2">100% layak</span> di sekitarmu.
                </p>
              </div>
            </div>
          </div>

          {/* PRO TIP (Kanan Atas - Lebar 5 Kolom) */}
          <div className="lg:col-span-5 bg-[#D13838] p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative transform rotate-1 hover:rotate-0 transition-transform animate-on-scroll flex flex-col justify-center" style={{ transitionDelay: '0.2s' }}>
             {/* Pin Center */}
             <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-[#F0C45C] border-2 border-[#295F2A] rounded-full"></div>
             </div>
             
             <div className="text-center">
               <h4 className="font-['Unbounded'] text-xl font-black text-white mb-3 flex items-center justify-center gap-2">
                 <span>💡</span> PRO TIP!
               </h4>
               <p className="font-['Poppins'] text-white font-medium text-sm leading-relaxed opacity-95">
                 Banyak "Mystery Box" muncul di atas jam 8 malam. Pantau terus buat dapet <i>high-end pastry</i> seharga jajanan pasar!
               </p>
             </div>
          </div>

          {/* ================= BARIS 2 ================= */}

          {/* STEP 2: Claim (Kiri Bawah - Lebar 5 Kolom) */}
          <div className="lg:col-span-5 bg-[#B3E5FC] p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative hover:-translate-y-1 transition-transform animate-on-scroll flex flex-col">
            <div className="absolute -top-4 left-6 bg-white border-[2.5px] border-[#295F2A] px-4 py-1.5 rounded-xl font-['Unbounded'] font-black text-sm text-[#295F2A] shadow-[3px_3px_0px_#295F2A] transform rotate-2">
              STEP 02
            </div>
            
            <div className="mt-2 text-center sm:text-left">
              <h3 className="font-['Unbounded'] text-2xl font-bold text-[#295F2A] mb-3">Claim & Pay</h3>
              <p className="font-['Poppins'] text-[#1E4620] font-medium leading-relaxed mb-6">
                Amankan porsi lu di aplikasi. Bayar <i>cashless</i>, dan restoran gak perlu buang modal mereka.
              </p>
            </div>
            
            {/* mt-auto memastikan elemen struk ini selalu nempel di bawah kotak (Rapi) */}
            <div className="mt-auto bg-white border-2 border-[#295F2A] rounded-xl p-4 flex justify-between items-center shadow-[4px_4px_0px_#295F2A] w-full">
               <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs">TOTAL BAYAR</span>
               <div className="text-right">
                 <span className="block line-through text-[10px] font-bold text-gray-400 leading-none mb-1">Rp 50.000</span>
                 <span className="block font-['Unbounded'] font-black text-[#D13838] text-xl leading-none">Rp 15k</span>
               </div>
            </div>
          </div>

          {/* STEP 3: Pick Up (Kanan Bawah - Lebar 7 Kolom) */}
          <div className="lg:col-span-7 bg-[#F0C45C] p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative hover:-translate-y-1 transition-transform animate-on-scroll flex flex-col justify-between" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute -top-4 right-6 bg-[#A7F3D0] border-[2.5px] border-[#295F2A] px-4 py-1.5 rounded-xl font-['Unbounded'] font-black text-sm text-[#295F2A] shadow-[3px_3px_0px_#295F2A] transform -rotate-1">
              STEP 03
            </div>

            <div className="flex flex-col sm:flex-row-reverse gap-8 items-center h-full mt-2">
              {/* Fake Barcode */}
              <div className="bg-white p-4 rounded-2xl border-2 border-[#295F2A] flex flex-col items-center flex-shrink-0 transform rotate-2">
                {/* CSS Pattern Barcode yang super rapi */}
                <div className="w-20 h-16 bg-[repeating-linear-gradient(90deg,#295F2A_0px,#295F2A_3px,transparent_3px,transparent_6px,#295F2A_6px,#295F2A_7px,transparent_7px,transparent_9px)] mb-3"></div>
                <span className="font-['Unbounded'] text-[11px] font-black text-[#295F2A] tracking-widest">SCAN ME</span>
              </div>
              
              {/* Teks rata kiri rapi */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-['Unbounded'] text-2xl font-bold text-[#295F2A] mb-3">Pick Up & Enjoy</h3>
                <p className="font-['Poppins'] text-[#1E4620] font-medium leading-relaxed mb-5">
                  Datang saat *Rescue Window*. Tunjukin digital *receipt* ke kasir, ambil makanannya, dan selamat... lu udah jadi pahlawan bumi! 🌍
                </p>
                <div className="inline-block bg-white px-4 py-2 rounded-full border-2 border-[#295F2A] shadow-sm">
                  <span className="font-['Poppins'] text-xs font-bold text-[#295F2A]">🛍️ Bawa wadah sendiri = Extra Poin!</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}