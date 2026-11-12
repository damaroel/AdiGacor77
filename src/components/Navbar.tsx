import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E3D9C4] shadow-xs py-3.5'
          : 'bg-[#F8F5EE] border-b border-[#ECE3CF] py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary CTA) */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('beranda');
            }}
            className="flex items-center gap-2.5 text-slate-900 group whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-[#EFE7D4] border border-[#D9CCA8] flex items-center justify-center text-[#78613A] group-hover:bg-[#E6DBBE] transition-colors">
              <Scale className="w-4 h-4" />
            </div>
            <span className="font-editorial text-xl font-bold tracking-tight text-[#1C1917]">
              AdiGacor77
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links with subtle hover underlines */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#44403C]">
            <a
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('beranda');
              }}
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('tentang');
              }}
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Tentang
            </a>
            <a
              href="#karya"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('karya');
              }}
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Karya
            </a>
            <a
              href="#dokumentasi"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('dokumentasi');
              }}
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Dokumentasi
            </a>
            <a
              href="#laporan"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('laporan');
              }}
              className="hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0"
            >
              Laporan
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('laporan')}
              className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DDD0AF] border border-[#CBB88D] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-2xs"
            >
              <span>Buat Laporan</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#44403C] hover:text-[#1C1917] hover:bg-[#EFE8D6] rounded-md transition-colors"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#E5DBBE] flex flex-col gap-2 pb-2">
            <button
              onClick={() => scrollToSection('beranda')}
              className="text-left px-3 py-2 text-sm font-medium text-[#292524] hover:bg-[#ECE2C8] rounded-md transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection('tentang')}
              className="text-left px-3 py-2 text-sm font-medium text-[#292524] hover:bg-[#ECE2C8] rounded-md transition-colors"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('karya')}
              className="text-left px-3 py-2 text-sm font-medium text-[#292524] hover:bg-[#ECE2C8] rounded-md transition-colors"
            >
              Karya
            </button>
            <button
              onClick={() => scrollToSection('dokumentasi')}
              className="text-left px-3 py-2 text-sm font-medium text-[#292524] hover:bg-[#ECE2C8] rounded-md transition-colors"
            >
              Dokumentasi
            </button>
            <button
              onClick={() => scrollToSection('laporan')}
              className="text-left px-3 py-2 text-sm font-medium text-[#292524] hover:bg-[#ECE2C8] rounded-md transition-colors"
            >
              Laporan Aduan
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection('laporan')}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DDD0AF] border border-[#CBB88D] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Buat Laporan Sekarang</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
