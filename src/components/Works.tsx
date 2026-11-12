import React, { useState } from 'react';
import { ExternalLink, Layers, Sprout, ArrowUpRight, X, Check, Code, Shield } from 'lucide-react';
import { PROFILE_DATA, ProjectWork } from '../data/profileData';

export const Works: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<ProjectWork | null>(null);

  return (
    <section id="karya" className="py-20 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D3B] tracking-wide mb-2">
            <span>PORTOFOLIO DIGITAL</span>
            <span aria-hidden="true">·</span>
            <span>INOVASI & EKONOMI RIIL</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Karya & Inisiatif Digital
          </h2>
          <p className="mt-3 text-base text-[#4E473F] max-w-2xl leading-relaxed">
            Membangun ekosistem teknologi produktif sebagai alternatif nyata bagi masyarakat. Dari infrastruktur data hingga digitalisasi sektor peternakan nusantara.
          </p>
        </div>

        {/* 2 Featured Works Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROFILE_DATA.works.map((work) => (
            <div
              key={work.id}
              className="group p-6 sm:p-8 bg-[#FAF7F0] border border-[#E3D7BB] hover:border-[#CDBB95] rounded-2xl transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata (Category · Year) */}
                <div className="flex items-center justify-between text-xs text-[#705F45] mb-4">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{work.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{work.year}</span>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#8C6D3B] bg-[#EFE7D4] px-2.5 py-0.5 rounded-sm">
                    {work.status}
                  </span>
                </div>

                {/* Title / Domain Display */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917] mb-3 group-hover:text-[#694F25] transition-colors">
                  {work.name}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#484036] leading-relaxed mb-6">
                  {work.summary}
                </p>

                {/* Role and highlights */}
                <div className="p-4 bg-[#F2EBDB] border border-[#DFD3B8] rounded-xl mb-6">
                  <div className="text-xs font-semibold text-[#7A643E] mb-1">
                    Peran Inisiatif:
                  </div>
                  <div className="text-xs font-medium text-[#1C1917]">
                    {work.role}
                  </div>
                </div>

                {/* Tech Stack items rendered as clean typography */}
                <div className="flex flex-wrap gap-1.5 text-xs text-[#635746] mb-6">
                  {work.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#EAE1CB] text-[#3E3527] rounded-md font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Detail & External Link */}
              <div className="pt-4 border-t border-[#ECE1C8] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedWork(work)}
                  className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#E5D7B7] hover:bg-[#DAC8A1] border border-[#C5B080] rounded-lg transition-colors cursor-pointer"
                >
                  Detail & Deskripsi Karya
                </button>

                {work.hasUrl ? (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#7A6136] hover:text-[#1C1917] transition-colors"
                  >
                    <span>Kunjungi {work.domain}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-[#8C7D68] italic">
                    Teks karya (URL belum aktif)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Banner on Productive Digital Economy */}
        <div className="p-6 sm:p-8 bg-[#EFE7D5] border border-[#D9CCA8] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-editorial text-xl font-bold text-[#1C1917] mb-2">
              Transformasi Digital Berkeadilan
            </h4>
            <p className="text-sm text-[#4E4436] leading-relaxed">
              Judi online menyedot lebih dari ratusan triliun rupiah per tahun dari kantong rakyat kecil. Melalui proyek produktif seperti <strong>eddflux.com</strong> dan <strong>ternaku.id</strong>, kami membuktikan bahwa kemahiran digital seharusnya digunakan untuk membangun nilai ekonomi nyata, bukan manipulasi kasino maya.
            </p>
          </div>
          <a
            href={PROFILE_DATA.publicLinks.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-3 text-xs font-semibold text-[#1C1917] bg-[#FAF7F0] hover:bg-[#FFFFFF] border border-[#C8B890] rounded-xl transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 shadow-2xs"
          >
            <span>Diskusi Kolaborasi di IG</span>
            <ArrowUpRight className="w-4 h-4 text-[#7A6136]" />
          </a>
        </div>

      </div>

      {/* Detail Modal for Project Work */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-[#FAF7F0] border border-[#D9CDAD] rounded-2xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-medium text-[#7A643E] mb-1">
                  {selectedWork.category} · {selectedWork.year}
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1917]">
                  {selectedWork.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedWork(null)}
                className="p-2 text-[#574E41] hover:text-[#1C1917] hover:bg-[#EFE7D4] rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup jendela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description Body */}
            <div className="space-y-4 text-sm text-[#3E362C] leading-relaxed mb-6">
              <p>{selectedWork.description}</p>
              
              <div className="p-4 bg-[#F2EBDB] border border-[#DFD3B8] rounded-xl">
                <div className="text-xs font-semibold text-[#6C5631] mb-2">
                  Sorotan & Karakteristik Utama:
                </div>
                <ul className="space-y-1.5 text-xs text-[#443C31]">
                  {selectedWork.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#8C6D3B] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[#EFE8D6] rounded-lg border border-[#DDD0AE]">
                  <span className="font-semibold text-[#6C5631] block mb-1">Peran & Tanggung Jawab:</span>
                  <span className="text-[#262018]">{selectedWork.role}</span>
                </div>
                <div className="p-3 bg-[#EFE8D6] rounded-lg border border-[#DDD0AE]">
                  <span className="font-semibold text-[#6C5631] block mb-1">Status Ketersediaan:</span>
                  <span className="text-[#262018]">
                    {selectedWork.hasUrl ? `URL Resmi: ${selectedWork.domain}` : 'Teks Karya Terarsip'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#E7DDC5] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedWork(null)}
                className="px-4 py-2 text-xs font-medium text-[#4B4235] hover:bg-[#EDE3CB] rounded-lg transition-colors cursor-pointer"
              >
                Tutup
              </button>
              {selectedWork.hasUrl && (
                <a
                  href={selectedWork.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#E5D7B7] hover:bg-[#DAC8A1] border border-[#C5B080] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Buka {selectedWork.domain}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
