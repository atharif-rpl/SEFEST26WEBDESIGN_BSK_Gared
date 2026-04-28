'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#295F2A] pt-20 pb-10 px-5 overflow-hidden z-20 border-t-4 border-[#1E4620]">
      
      {/* Background Ornamen Garis Halus */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFFDEE 0, #FFFDEE 2px, transparent 2px, transparent 10px)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between bg-[#FFFDEE] rounded-[32px] border-[3px] border-[#1E4620] p-10 mb-16 shadow-[8px_8px_0px_#1E4620]">
          
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-['Unbounded'] text-3xl md:text-4xl font-black text-[#295F2A] uppercase mb-3">
              Ready to <span className="text-[#D13838]">Rescue?</span>
            </h2>
            <p className="font-['Poppins'] text-[#1E4620] font-medium text-sm md:text-base">
              Bergabunglah dengan ribuan pahlawan makanan lainnya. Dapatkan info *Flash Sale* makanan sisa terdekat langsung di inbox lo.
            </p>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Masukkan email lo..." 
              className="bg-white border-[3px] border-[#295F2A] rounded-2xl px-6 py-4 font-['Poppins'] font-medium focus:outline-none focus:ring-4 focus:ring-[#A7F3D0] w-full lg:w-72"
            />
            <button className="bg-[#D13838] text-white border-[3px] border-[#295F2A] rounded-2xl px-8 py-4 font-['Unbounded'] font-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_#295F2A] transition-all">
              JOIN SQUAD
            </button>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-[#FFFDEE]">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-18 h-18 bg-[#F0C45C] border-[3px] border-[#1E4620] rounded-full flex items-center justify-center font-['Unbounded'] font-black text-xl text-[#295F2A]">
                      <img src="/images/logogreenbite.png" alt=""  />
              </div>
              <h3 className="font-['Unbounded'] text-3xl font-black tracking-tighter">GreenBite.</h3>
            </div>
            <p className="font-['Poppins'] opacity-80 text-sm max-w-sm mb-6">
              Platform food rescue nomor 1. Menghubungkan makanan surplus berkualitas dengan perut yang kelaparan, bukan tempat sampah.
            </p>
            
            {/* Social Pins (Ourtala Style) */}
            <div className="flex gap-3">
              {['Ig', 'In', 'X'].map((social) => (
                <div key={social} className="w-10 h-10 bg-[#A7F3D0] border-2 border-[#1E4620] rounded-lg flex items-center justify-center font-['Unbounded'] font-bold text-[#295F2A] hover:bg-[#F0C45C] hover:-translate-y-1 cursor-pointer transition-transform shadow-[2px_2px_0px_#1E4620]">
                  {social}
                </div>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-['Unbounded'] font-bold text-[#F0C45C] mb-6 border-b-2 border-[#1E4620] pb-2 inline-block">Platform</h4>
            <ul className="space-y-3 font-['Poppins'] text-sm font-medium">
              <li><Link href="#explore" className="hover:text-[#A7F3D0] transition-colors flex items-center gap-2"><span className="text-xs">▶</span> Live Rescues</Link></li>
              <li><Link href="#how-it-works" className="hover:text-[#A7F3D0] transition-colors flex items-center gap-2"><span className="text-xs">▶</span> How It Works</Link></li>
              <li><Link href="#impact" className="hover:text-[#A7F3D0] transition-colors flex items-center gap-2"><span className="text-xs">▶</span> Our Impact</Link></li>
              <li><Link href="/explore" className="hover:text-[#A7F3D0] transition-colors flex items-center gap-2"><span className="text-xs">▶</span> Full Catalog</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-['Unbounded'] font-bold text-[#F0C45C] mb-6 border-b-2 border-[#1E4620] pb-2 inline-block">Company</h4>
            <ul className="space-y-3 font-['Poppins'] text-sm font-medium">
              <li><Link href="#about" className="hover:text-[#A7F3D0] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#A7F3D0] transition-colors">Partner with Us</Link></li>
              <li><Link href="#" className="hover:text-[#A7F3D0] transition-colors">Manifesto</Link></li>
              <li><Link href="#" className="hover:text-[#A7F3D0] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Sleeping Mascot */}
        <div className="pt-8 border-t-2 border-[#1E4620] flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="font-['Poppins'] text-xs font-semibold text-[#FFFDEE] opacity-70">
            © 2026 GREENBITE. CRAFTED FOR SEFEST 2026.
          </div>
          
          {/* Sleeping Mascot (Tanda toko tutup) */}
          <div className="relative group">
             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 font-['Unbounded'] text-[10px] text-[#A7F3D0] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Zzz...</div>
             <div className="text-3xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-help">
               🥐💤
             </div>
          </div>

          <div className="flex gap-4 font-['Poppins'] text-xs font-semibold text-[#FFFDEE] opacity-70">
            <Link href="#" className="hover:text-[#F0C45C]">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-[#F0C45C]">TERMS OF USE</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}