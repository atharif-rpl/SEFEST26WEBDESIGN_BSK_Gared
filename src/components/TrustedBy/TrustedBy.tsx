'use client';

export default function TrustedBy() {
  return (
    <section className="relative bg-[#FFD1DC] border-t-4 border-b-4 border-[#295F2A] py-6 overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast { animation: marquee-fast 15s linear infinite; display: flex; width: max-content; }
      `}} />
      
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#FFD1DC] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#FFD1DC] to-transparent z-10"></div>

      <div className="animate-marquee-fast flex items-center">
        <div className="flex items-center gap-12 px-6 font-['Unbounded'] font-black text-[#295F2A] text-xl md:text-2xl uppercase opacity-80">
          <span>🤝 TRUSTED BY:</span>
          <span>🥐 BAKEHOUSE KENANGAN</span>
          <span>★</span>
          <span>🍣 SUSHI RAKYAT</span>
          <span>★</span>
          <span>🥗 VEGAN WRAP CO.</span>
          <span>★</span>
          <span>🍕 PIZZERIA LOKAL</span>
          <span>★</span>
          <span>🍩 DONUT BAHAGIA</span>
          <span>★</span>
          {/* Duplikat biar looping mulus */}
          <span>🤝 TRUSTED BY:</span>
          <span>🥐 BAKEHOUSE KENANGAN</span>
          <span>★</span>
          <span>🍣 SUSHI RAKYAT</span>
          <span>★</span>
          <span>🥗 VEGAN WRAP CO.</span>
          <span>★</span>
          <span>🍕 PIZZERIA LOKAL</span>
          <span>★</span>
          <span>🍩 DONUT BAHAGIA</span>
          <span>★</span>
        </div>
      </div>
    </section>
  );
}