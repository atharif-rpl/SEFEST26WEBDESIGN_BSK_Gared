'use client';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-5 bg-[#F7F3E2] overflow-hidden z-10 border-t-4 border-[#295F2A]">
      
      {/* Animasi Khusus untuk Mascot biar melayang halus */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentle-float-about {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        .mascot-float { animation: gentle-float-about 4s ease-in-out infinite; }
      `}} />

      {/* 1. Giant Aesthetic Soft Watermark "ABOUT" */}
      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none flex justify-center items-center overflow-hidden">
        <h1 
          className="font-['Unbounded'] text-[30vw] md:text-[26vw] font-black text-transparent tracking-tighter leading-none transform -rotate-3" 
          style={{ WebkitTextStroke: '3px rgba(41, 95, 42, 0.08)' }}
        >
          ABOUT
        </h1>
      </div>

      {/* Dotted Pattern */}
      <div className="absolute inset-0 opacity-60 z-0" style={{ backgroundImage: 'radial-gradient(rgba(41, 95, 42, 0.15) 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-[#F0C45C] border-[2.5px] border-[#295F2A] rounded-full px-5 py-1.5 mb-6 shadow-[3px_3px_0px_#295F2A] hover:-translate-y-1 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#D13838] animate-pulse"></span>
            <span className="font-['Unbounded'] font-bold text-[#295F2A] text-xs tracking-widest uppercase">The Mission</span>
          </div>
          <h2 className="font-['Unbounded'] text-4xl md:text-6xl lg:text-7xl font-black text-[#295F2A] uppercase mb-5 leading-[1.1] tracking-tight">
            Fixing The <br className="md:hidden" />
            <span className="text-white bg-[#D13838] px-4 pb-1 md:pb-2 border-[3px] border-[#295F2A] rounded-2xl transform -rotate-2 inline-block shadow-[4px_4px_0px_#295F2A] hover:rotate-0 transition-transform">FLAW.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Card */}
          <div className="lg:col-span-7 relative animate-on-scroll">
            
            {/* Peeking Mascot dengan Animasi Melayang */}
            <div className="absolute -top-14 md:-top-16 right-6 md:right-8 w-20 h-20 md:w-24 md:h-24 z-20 mascot-float drop-shadow-lg">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Daun kecil */}
                <path d="M50 20 C40 10, 60 0, 70 10 C60 20, 50 20, 50 20 Z" fill="#295F2A" stroke="#1E4620" strokeWidth="2" />
                {/* Badan Roti */}
                <path d="M20 40 Q20 20 50 20 Q80 20 80 40 L75 80 Q75 90 50 90 Q25 90 25 80 Z" fill="#F0C45C" stroke="#295F2A" strokeWidth="3" />
                {/* Mata */}
                <ellipse cx="40" cy="50" rx="4" ry="7" fill="#295F2A" />
                <ellipse cx="60" cy="50" rx="4" ry="7" fill="#295F2A" />
                {/* Senyum */}
                <path d="M42 65 Q50 75 58 65" fill="none" stroke="#295F2A" strokeWidth="3" strokeLinecap="round" />
                {/* Pipi */}
                <circle cx="32" cy="58" r="4" fill="#D13838" opacity="0.6" />
                <circle cx="68" cy="58" r="4" fill="#D13838" opacity="0.6" />
              </svg>
            </div>

            {/* Main Content Card - Interactive Shadow */}
            <div className="bg-white p-6 md:p-10 rounded-[32px] border-[3px] border-[#295F2A] shadow-[8px_8px_0px_#295F2A] hover:shadow-[4px_4px_0px_#295F2A] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm bg-white/95">
              
              {/* Pill Marker */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-[#A7F3D0] border-2 border-[#295F2A] rounded-full"></div>
                <h3 className="font-['Unbounded'] text-xl md:text-3xl font-black text-[#295F2A]">1/3 of Food is Wasted</h3>
              </div>
              
              <p className="font-['Poppins'] text-[#1E4620] font-medium leading-relaxed mb-6 text-base md:text-lg">
                Setiap hari, restoran dan kafe membuang makanan utuh hanya karena jam operasional berakhir. Ini bukan cuma kerugian bisnis, tapi juga bencana lingkungan.
              </p>
              
              <div className="bg-[#FFFDEE] p-5 rounded-2xl border-2 border-[#295F2A] border-dashed group">
                <p className="font-['Poppins'] text-[#295F2A] font-semibold text-sm md:text-base transition-colors">
                  Misi kami sederhana: <span className="text-[#D13838] group-hover:underline decoration-2 underline-offset-4">Menyelamatkan makanan enak</span>, memberikan harga murah, dan menjaga bumi tetap hijau. 🌱
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Pinned Boxes & Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 mt-4 lg:mt-0">
            
            {/* Stat Box - Floating Effect */}
            <div className="bg-[#B3E5FC] p-6 rounded-[24px] border-[3px] border-[#295F2A] shadow-[6px_6px_0px_#295F2A] transform md:rotate-2 hover:rotate-0 hover:-translate-y-1 transition-all duration-300 animate-on-scroll">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full border-2 border-[#295F2A] shadow-sm">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <p className="font-['Poppins'] text-[10px] md:text-xs font-bold text-[#295F2A] opacity-70 uppercase tracking-widest">CO2 Prevented</p>
                  <h4 className="font-['Unbounded'] text-2xl md:text-3xl font-black text-[#295F2A]">5,000+ <span className="text-base md:text-lg">kg</span></h4>
                </div>
              </div>
            </div>

            {/* Action Box with Top Pin */}
            <div className="bg-[#F0C45C] p-6 md:p-8 rounded-[32px] border-[3px] border-[#295F2A] shadow-[6px_6px_0px_#295F2A] relative transform md:-rotate-1 hover:-translate-y-1 transition-all duration-300 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              
              {/* Pin Ornamen */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#D13838] border-2 border-[#295F2A] rounded-full z-10 shadow-sm"></div>
                <div className="w-1 h-3 bg-[#295F2A] -mt-1"></div>
              </div>

              <h4 className="font-['Unbounded'] text-lg md:text-xl font-bold text-[#295F2A] text-center mb-2 uppercase">Join The Radar</h4>
              <p className="font-['Poppins'] text-xs md:text-sm text-center text-[#1E4620] font-medium mb-6 opacity-90">
                Dapatkan notifikasi makanan sisa terdekat sebelum kehabisan!
              </p>
              
              {/* Form Input Responsif */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <input 
                  type="email" 
                  placeholder="Email lo..." 
                  className="w-full bg-white border-[2.5px] border-[#295F2A] rounded-xl px-4 py-3 md:py-2 font-['Poppins'] text-sm focus:outline-none focus:ring-4 focus:ring-[#A7F3D0]/50 transition-all shadow-inner"
                />
                <button className="bg-[#A7F3D0] border-[2.5px] border-[#295F2A] rounded-xl px-4 py-3 md:py-2 hover:bg-[#295F2A] hover:text-[#A7F3D0] transition-all flex items-center justify-center shadow-[2px_2px_0px_#295F2A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] group">
                  <svg className="w-5 h-5 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}