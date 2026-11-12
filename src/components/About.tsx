import React, { useState } from 'react';
import { Scale, BookOpen, ShieldCheck, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const About: React.FC = () => {
  const [selectedLawIndex, setSelectedLawIndex] = useState(0);

  const pillars = [
    {
      num: "01",
      title: "Dekonstruksi Ilusi & Edukasi Publik",
      desc: "Menyosialisasikan bahwa judi online bukanlah permainan probabilitas murni, melainkan piranti lunak ber-algoritma manipulatif yang dirancang untuk menguras aset pemain secara bertahap."
    },
    {
      num: "02",
      title: "Pendampingan Korban & Konseling Hukum",
      desc: "Memberikan ruang konsultasi awal bagi para korban yang terjebak utang pinjol ilegal, pemerasan sindikat, atau ancaman penyebaran data pribadi oleh operator situs."
    },
    {
      num: "03",
      title: "Pelacakan & Pelaporan Terstruktur",
      desc: "Membantu masyarakat menyusun draf aduan berkas elektronik yang memenuhi syarat formil dan materiil sesuai KUHAP agar cepat diproses Bareskrim Siber Polri dan Kementerian Komunikasi & Digital."
    },
    {
      num: "04",
      title: "Pemutusan Aliran Dana Sindikat (TPPU)",
      desc: "Mendorong pembekuan rekening bank dan e-wallet penampung (rekening mule) melalui kerja sama informasi ke otoritas perbankan dan Otoritas Jasa Keuangan (OJK)."
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-[#F4EFE2] border-y border-[#E5DAC0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D3B] tracking-wide mb-2">
            <span>PROFIL & REKAM JEJAK</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.focus}</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Tentang AdiGacor77: Advokasi Penegakan Hukum
          </h2>
          <p className="mt-3 text-base text-[#443E37] max-w-2xl leading-relaxed">
            Menegakkan hukum bukan sekadar membacakan pasal di ruang sidang, melainkan hadir di tengah realitas digital masyarakat untuk melawan praktik pemiskinan struktural akibat judi online.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-5 text-[#38332D] text-base leading-relaxed">
            <div className="p-6 bg-[#FAF7F0] border border-[#E3D7BC] rounded-2xl">
              <h3 className="font-editorial text-xl font-bold text-[#1C1917] mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#8C6D3B]" />
                <span>Integritas Sarjana Hukum di Garis Depan</span>
              </h3>
              <p className="mb-3">
                Sebagai lulusan berkualifikasi <strong className="text-[#1C1917] font-semibold">{PROFILE_DATA.focus}</strong>, AdiGacor77 menyaksikan langsung kehancuran multidimensi yang ditimbulkan oleh sindikat perjudian daring: retaknya rumah tangga, kriminalitas turunan, jeratan pinjaman online ilegal berbunga mencekik, hingga keputusasaan generasi muda.
              </p>
              <p>
                Julukan <strong className="text-[#1C1917] font-semibold">{PROFILE_DATA.bio}</strong> lahir dari komitmen personal untuk tidak berdiam diri. Nama ini merepresentasikan antitesis dari istilah &quot;gacor&quot; yang sering dipropagandakan bandar untuk menipu rakyat. Bersama Adi, &quot;gacor&quot; dimaknai kembali sebagai suara lantang penegakan hukum dan pembongkaran manipulasi digital.
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F0] border border-[#E3D7BC] rounded-2xl">
              <h3 className="font-editorial text-xl font-bold text-[#1C1917] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#8C6D3B]" />
                <span>Prinsip Tanpa Kompromi</span>
              </h3>
              <p>
                Perjudian online bukan sekadar pelanggaran kesusilaan, melainkan kejahatan ekonomi terorganisir transnasional yang mencakup tindak pidana pencucian uang (TPPU), penipuan algoritma, dan pencurian data pribadi. Kami bergerak secara independen tanpa keterikatan partai politik maupun sponsor komersial.
              </p>
            </div>
          </div>

          {/* Legal Foundations Sidebar */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 bg-[#EFE8D6] border border-[#DECFA9] rounded-2xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial text-lg font-bold text-[#1C1917] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#8C6D3B]" />
                  <span>Landasan Hukum Positif Indonesia</span>
                </span>
              </div>
              <p className="text-xs text-[#5C513E] mb-4">
                Setiap advokasi dan pelaporan yang dibangun berakar pada konstruksi hukum pidana Republik Indonesia:
              </p>

              {/* Interactive Law Selector */}
              <div className="space-y-3 flex-1">
                {PROFILE_DATA.legalFoundations.map((law, idx) => (
                  <button
                    key={law.title}
                    onClick={() => setSelectedLawIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs cursor-pointer ${
                      selectedLawIndex === idx
                        ? 'bg-[#FAF7F0] border-[#BBA57B] shadow-2xs'
                        : 'bg-[#F5EEDB] border-[#E2D5B7] hover:bg-[#EFE5CE]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-[#1C1917] mb-1">
                      <span>{law.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 text-[#8C6D3B] transition-transform ${selectedLawIndex === idx ? 'rotate-90' : ''}`} />
                    </div>
                    <div className="text-[#695B45] font-medium">{law.subject}</div>
                  </button>
                ))}
              </div>

              {/* Active Law Details Panel */}
              <div className="mt-4 pt-4 border-t border-[#DFD0AC] text-xs">
                <div className="font-semibold text-[#8C6D3B] mb-1">
                  Sanksi Pidana Maksimal:
                </div>
                <div className="text-[#1C1917] font-medium mb-2">
                  {PROFILE_DATA.legalFoundations[selectedLawIndex].sanction}
                </div>
                <p className="text-[#4E4434] leading-relaxed">
                  {PROFILE_DATA.legalFoundations[selectedLawIndex].detail}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of Movement */}
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#1C1917] mb-6">
            4 Pilar Aksi Advokasi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-5 bg-[#FAF7F0] border border-[#E3D7BC] rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="font-editorial text-2xl font-bold text-[#9E8352] mb-2">
                    {pillar.num}
                  </div>
                  <h4 className="font-bold text-[#1C1917] text-sm mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#52493D] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFE7D4] flex items-center gap-1.5 text-xs text-[#8C6D3B] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Komitmen Berkelanjutan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
