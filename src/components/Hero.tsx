import React from 'react';
import { ShieldAlert, ArrowDown, Instagram, ExternalLink, Award, BookOpen, AlertCircle } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean Unboxed Metadata (NO PILL BOXES) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#78613A] mb-4">
              <span>{PROFILE_DATA.focus}</span>
              <span aria-hidden="true">·</span>
              <span>Advokasi Cyber Law</span>
              <span aria-hidden="true">·</span>
              <span>Aksi Nyata Publik</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12] mb-6 text-balance">
              {PROFILE_DATA.bio}
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[#3E3832] leading-relaxed mb-8 max-w-xl">
              Selamat datang di ruang advokasi independen <strong className="font-semibold text-[#1C1917]">{PROFILE_DATA.name}</strong>, seorang <strong className="font-semibold text-[#1C1917]">{PROFILE_DATA.focus}</strong> yang mendedikasikan analisis dan daya hukum untuk memutus rantai kejahatan judi online, mendampingi korban manipulasi sindikat, dan memperkuat kedaulatan digital Indonesia.
            </p>

            {/* Interactive Primary CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => scrollTo('laporan')}
                className="px-6 py-3.5 text-sm font-semibold text-[#1C1917] bg-[#E5D7B7] hover:bg-[#DAC9A1] border border-[#C5B080] rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 text-[#785E2F]" />
                <span>Lapor Situs / Rekening Judol</span>
              </button>

              <button
                onClick={() => scrollTo('tentang')}
                className="px-5 py-3.5 text-sm font-medium text-[#292524] bg-[#F1EAD8] hover:bg-[#EAE0CA] border border-[#D9CDB0] rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Pelajari Pendekatan Hukum</span>
                <ArrowDown className="w-4 h-4 text-[#574B39]" />
              </button>

              {/* Instagram Public Link as requested */}
              <a
                href={PROFILE_DATA.publicLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="px-4 py-3.5 text-sm font-medium text-[#382E20] hover:text-[#1C1917] bg-[#F6F0E2] hover:bg-[#EDE3CE] border border-[#DDD1B4] rounded-xl transition-colors flex items-center gap-2"
                title="Kunjungi Instagram @oneedikcc"
              >
                <Instagram className="w-4 h-4 text-[#8C6D3B]" />
                <span className="font-mono text-xs">{PROFILE_DATA.publicLinks.instagramHandle}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8C6D3B]" />
              </a>
            </div>

            {/* Quiet Quick Notice */}
            <div className="flex items-start gap-3 p-3.5 bg-[#F2EBDB] border border-[#E0D3B8] rounded-xl text-xs text-[#524838] leading-relaxed max-w-xl">
              <AlertCircle className="w-4 h-4 text-[#947742] shrink-0 mt-0.5" />
              <span>
                Semua pendampingan hukum dan draf pelaporan di situs ini bersifat <strong>independen & pro-bono</strong> demi keselamatan finansial keluarga Indonesia.
              </span>
            </div>
          </div>

          {/* Right Column: Visual Anchor with Editorial Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Framed Container with Warm Beige Matting */}
              <div className="relative p-3 bg-[#EFE7D5] border border-[#DACDB0] rounded-2xl shadow-sm">
                
                {/* Portrait Image with Styled Fallback Container */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#E2D6BB]">
                  <img
                    src="/src/assets/images/hero_adi_portrait_1794456243749.jpg"
                    alt="AdiGacor77 - Sarjana Hukum, Adi si Pemberantas Judol"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Subtle bottom shadow overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-editorial text-lg font-bold tracking-tight">
                      {PROFILE_DATA.name}
                    </p>
                    <p className="text-xs text-[#E9DFCE] font-sans">
                      {PROFILE_DATA.focus} · {PROFILE_DATA.bio}
                    </p>
                  </div>
                </div>

                {/* Subtitle Card Under Portrait */}
                <div className="mt-3 p-3 bg-[#F8F5EE] border border-[#E3D8BF] rounded-xl flex items-center justify-between text-xs text-[#574B39]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#8C6D3B]" />
                    <span className="font-medium">Advokasi Berbasis Kepastian Hukum</span>
                  </div>
                  <span className="text-[#8C6D3B] font-mono">KUHP 303 & ITE 27(2)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Below Split */}
        <div className="mt-14 pt-8 border-t border-[#E5DBBE] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-[#F2ECDC] border border-[#DFD3B8] rounded-xl">
            <div className="text-xs text-[#705D3D] font-medium mb-1">Status Keilmuan</div>
            <div className="font-editorial text-2xl font-bold text-[#1C1917]">{PROFILE_DATA.focus}</div>
            <div className="text-xs text-[#5C5242] mt-1">Konsentrasi Hukum Pidana & Siber</div>
          </div>

          <div className="p-4 bg-[#F2ECDC] border border-[#DFD3B8] rounded-xl">
            <div className="text-xs text-[#705D3D] font-medium mb-1">Misi Utama</div>
            <div className="font-editorial text-2xl font-bold text-[#1C1917]">Pemberantas Judol</div>
            <div className="text-xs text-[#5C5242] mt-1">Edukasi & Advokasi Tanpa Kompromi</div>
          </div>

          <div className="p-4 bg-[#F2ECDC] border border-[#DFD3B8] rounded-xl">
            <div className="text-xs text-[#705D3D] font-medium mb-1">Karya Inovasi</div>
            <div className="font-editorial text-2xl font-bold text-[#1C1917] tabular-nums">2 Platform</div>
            <div className="text-xs text-[#5C5242] mt-1">eddflux.com & ternaku.id</div>
          </div>

          <div className="p-4 bg-[#F2ECDC] border border-[#DFD3B8] rounded-xl">
            <div className="text-xs text-[#705D3D] font-medium mb-1">Kanal Publik</div>
            <div className="font-editorial text-2xl font-bold text-[#1C1917]">@oneedikcc</div>
            <div className="text-xs text-[#5C5242] mt-1">Instagram x Jejaring Diskusi</div>
          </div>
        </div>

      </div>
    </section>
  );
};
