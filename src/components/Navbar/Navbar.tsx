'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Deteksi scroll buat ngubah gaya navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'The Problem', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Live Rescues', href: '#explore' },
  ];

  return (
    <>
      {/* WRAPPER BARU: Bulletproof Centering (Mencegah navbar minggir) */}
      <div className={`fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-4' : 'pt-6'}`}>
        
        <header 
          className={`pointer-events-auto w-[95%] max-w-6xl flex justify-between items-center px-4 md:px-6 py-3 rounded-full border-[3px] border-[#295F2A] transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/85 backdrop-blur-md shadow-[4px_4px_0px_#295F2A] py-2' 
              : 'bg-[#FFFDEE] shadow-[8px_8px_0px_#295F2A]'
          }`}
        >
          {/* Logo GB */}
          <Link 
            href="#home" 
            className="w-10 h-10 md:w-12 md:h-12 bg-[#F0C45C] border-[3px] border-[#295F2A] rounded-full flex items-center justify-center font-['Unbounded'] font-black text-lg md:text-xl text-[#295F2A] hover:-rotate-12 transition-transform shadow-[2px_2px_0px_#295F2A]"
          >
            <img src="/images/logogreenbite.png" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="relative font-['Poppins'] font-bold text-sm text-[#1E4620] uppercase tracking-wide group"
                  >
                    {link.name}
                    {/* Efek garis bawah meluncur */}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#D13838] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button Desktop */}
          <Link 
            href="/explore" 
            className="hidden md:flex items-center gap-2 bg-[#A7F3D0] text-[#295F2A] px-6 py-2.5 rounded-full border-[3px] border-[#295F2A] font-['Unbounded'] font-bold text-xs hover:-translate-y-1 hover:shadow-[4px_4px_0px_#295F2A] hover:bg-[#F0C45C] transition-all"
          >
            <span>JOIN RESCUE</span>
            <span className="text-base">🛒</span>
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-[3px] border-[#295F2A] rounded-full bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-4 h-0.5 bg-[#295F2A] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`w-4 h-0.5 bg-[#295F2A] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-4 h-0.5 bg-[#295F2A] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </button>
        </header>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 bg-[#FFFDEE]/95 backdrop-blur-lg z-[90] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-['Unbounded'] font-black text-3xl text-[#295F2A] hover:text-[#D13838] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/explore"
          onClick={() => setIsMobileMenuOpen(false)} 
          className="bg-[#D13838] text-white px-8 py-4 rounded-2xl border-[3px] border-[#295F2A] font-['Unbounded'] font-black text-lg shadow-[6px_6px_0px_#295F2A]"
        >
          JOIN THE RESCUE
        </Link>
      </div>
    </>
  );
}