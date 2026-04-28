'use client';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-5 bg-[#F7F3E2] overflow-hidden z-10 border-t-4 border-[#295F2A]">
      
      {/* Background Ornamen */}
      <div className="absolute inset-0 opacity-40 z-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(41, 95, 42, 0.15) 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#A7F3D0] border-[2.5px] border-[#295F2A] rounded-full px-5 py-1.5 mb-5 shadow-[3px_3px_0px_#295F2A]">
            <span className="text-sm">💖</span>
            <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs tracking-widest uppercase">Trusted by Locals</span>
          </div>
          <h2 className="font-['Unbounded'] text-5xl md:text-6xl font-black text-[#295F2A] uppercase tracking-tight mb-4">
            Wall of <span className="text-white bg-[#D13838] px-3 pb-1 border-[3px] border-[#295F2A] rounded-2xl transform rotate-2 inline-block shadow-[4px_4px_0px_#295F2A]">Love.</span>
          </h2>
        </div>

        {/* Staggered Grid Layout (Kartu tengah lebih turun) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: User/Pelajar */}
          <div className="bg-white p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative hover:-translate-y-2 transition-transform duration-300 animate-on-scroll">
            {/* Giant Quote Watermark */}
            <div className="absolute top-4 right-6 text-7xl font-['Unbounded'] text-[#F7F3E2] z-0 select-none opacity-80">"</div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 text-[#F0C45C] text-lg">
                ★★★★★
              </div>
              <p className="font-['Poppins'] text-[#1E4620] font-semibold text-sm md:text-base leading-relaxed mb-8 min-h-[100px]">
                "Sumpah ini nolong banget! Akhir bulan tetep bisa makan enak modal 15 ribu doang. UI aplikasinya juga gampang banget dipake. Love banget GreenBite!"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t-2 border-[#295F2A] border-dashed">
                <div className="w-12 h-12 bg-[#F0C45C] border-2 border-[#295F2A] rounded-full flex items-center justify-center text-xl shadow-[2px_2px_0px_#295F2A]">
                  👨‍🎓
                </div>
                <div>
                  <h4 className="font-['Unbounded'] font-bold text-[#295F2A] text-sm leading-none mb-1">Atharif P.</h4>
                  <p className="font-['Poppins'] text-[10px] text-[#D13838] uppercase font-bold tracking-wider">Pelajar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Merchant (Staggered Down with md:mt-12) */}
          <div className="bg-white p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] relative transform md:translate-y-12 hover:translate-y-10 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
            <div className="absolute top-4 right-6 text-7xl font-['Unbounded'] text-[#F7F3E2] z-0 select-none opacity-80">"</div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 text-[#F0C45C] text-lg">
                ★★★★★
              </div>
              <p className="font-['Poppins'] text-[#1E4620] font-semibold text-sm md:text-base leading-relaxed mb-8 min-h-[100px]">
                "Dulu sedih banget tiap closing harus buang roti sisa karena SOP. Sejak gabung platform ini, roti sisa selalu ludes. Modal harian aman, zero waste tercapai."
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t-2 border-[#295F2A] border-dashed">
                <div className="w-12 h-12 bg-[#B3E5FC] border-2 border-[#295F2A] rounded-full flex items-center justify-center text-xl shadow-[2px_2px_0px_#295F2A]">
                  👩‍🍳
                </div>
                <div>
                  <h4 className="font-['Unbounded'] font-bold text-[#295F2A] text-sm leading-none mb-1">Bu Ratna</h4>
                  <p className="font-['Poppins'] text-[10px] text-[#295F2A] opacity-70 uppercase font-bold tracking-wider">Owner Bakehouse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Activist */}
          <div className="bg-[#295F2A] p-8 rounded-[32px] border-[3px] border-[#1E4620] shadow-[8px_8px_0px_#F0C45C] relative hover:-translate-y-2 transition-transform duration-300 animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="absolute top-4 right-6 text-7xl font-['Unbounded'] text-[#1E4620] z-0 select-none opacity-50">"</div>
            
            <div className="relative z-10">
              <div className="flex gap-1 mb-6 text-[#F0C45C] text-lg">
                ★★★★★
              </div>
              <p className="font-['Poppins'] text-[#FFFDEE] font-medium text-sm md:text-base leading-relaxed mb-8 min-h-[100px]">
                "UI/UX nya asik banget, berasa kayak main game. Pas ngambil makanannya, kerasa banget kebanggaannya karena abis nyelamatin bumi hari ini. 🌍"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t-2 border-[#1E4620] border-dashed">
                <div className="w-12 h-12 bg-[#A7F3D0] border-2 border-[#1E4620] rounded-full flex items-center justify-center text-xl shadow-[2px_2px_0px_#1E4620]">
                  🌱
                </div>
                <div>
                  <h4 className="font-['Unbounded'] font-bold text-[#A7F3D0] text-sm leading-none mb-1">Sarah W.</h4>
                  <p className="font-['Poppins'] text-[10px] text-[#FFFDEE] opacity-70 uppercase font-bold tracking-wider">Eco-Activist</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}