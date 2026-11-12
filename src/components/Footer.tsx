import React from 'react';
import { Scale, Instagram, ArrowUp, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EFE8D6] border-t border-[#D9CCA8] text-[#3D3528] pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DECFA9]">
          
          {/* Identity Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FAF7F0] border border-[#D9CCA8] flex items-center justify-center text-[#78613A]">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-editorial text-xl font-bold tracking-tight text-[#1C1917]">
                {PROFILE_DATA.name}
              </span>
            </div>
            <p className="text-xs text-[#574C3B] font-medium mb-3">
              {PROFILE_DATA.focus} · {PROFILE_DATA.bio}
            </p>
            <p className="text-xs text-[#4F4435] leading-relaxed max-w-sm">
              Ruang advokasi independen, edukasi hukum pidana siber, dan inisiatif digital produktif untuk mewujudkan Indonesia bersih dari jerat judi online.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h5 className="font-editorial text-sm font-bold text-[#1C1917] mb-3">
              Navigasi Halaman
            </h5>
            <ul className="space-y-2 text-xs text-[#554A3B]">
              <li>
                <a href="#beranda" className="hover:text-[#1C1917] transition-colors">
                  Pembuka (Beranda)
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-[#1C1917] transition-colors">
                  Tentang AdiGacor77
                </a>
              </li>
              <li>
                <a href="#karya" className="hover:text-[#1C1917] transition-colors">
                  Karya (eddflux & ternaku)
                </a>
              </li>
              <li>
                <a href="#dokumentasi" className="hover:text-[#1C1917] transition-colors">
                  Dokumentasi Kasus
                </a>
              </li>
              <li>
                <a href="#laporan" className="hover:text-[#1C1917] transition-colors">
                  Laporan Pengaduan
                </a>
              </li>
            </ul>
          </div>

          {/* Public Channels & Karya Links */}
          <div className="md:col-span-4">
            <h5 className="font-editorial text-sm font-bold text-[#1C1917] mb-3">
              Tautan Publik & Karya
            </h5>
            <div className="space-y-2.5 text-xs">
              <a
                href={PROFILE_DATA.publicLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-2.5 bg-[#FAF7F0] border border-[#DFD3B8] rounded-xl text-[#1C1917] hover:bg-[#FFFFFF] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#8C6D3B]" />
                  <span>Instagram @oneedikcc</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#7A6136]" />
              </a>

              <div className="p-3 bg-[#F4EDE0] border border-[#DFD3B8] rounded-xl text-[11px] text-[#554A39] leading-relaxed">
                <strong>Karya Terintegrasi:</strong> eddflux.com · ternaku.id
                <br />
                Landasan Yuridis: Pasal 303 KUHP & Pasal 27 (2) UU ITE.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5D49]">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name} ({PROFILE_DATA.focus}). Seluruh materi disajikan untuk kepentingan edukasi publik dan penegakan hukum.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#4F4435] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
