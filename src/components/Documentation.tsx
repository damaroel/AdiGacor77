import React, { useState } from 'react';
import { FileText, ArrowRight, X, AlertTriangle, BookOpen, ShieldAlert, CheckCircle, Search } from 'lucide-react';
import { PROFILE_DATA, DocItem } from '../data/profileData';

export const Documentation: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Semua');
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Modus Kejahatan', 'Investigasi', 'Edukasi Hukum', 'Alur Penindakan'];

  const filteredDocs = PROFILE_DATA.documentations.filter((item) => {
    const matchesCat = filterCategory === 'Semua' || item.category === filterCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.legalBasis.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="dokumentasi" className="py-20 bg-[#F4EFE2] border-y border-[#E5DAC0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D3B] tracking-wide mb-2">
            <span>DOKUMENTASI ADVOKASI</span>
            <span aria-hidden="true">·</span>
            <span>REKAM JEJAK KASUS & HUKUM</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Dokumentasi & Kajian Kasus Siber
          </h2>
          <p className="mt-3 text-base text-[#4E4436] max-w-2xl leading-relaxed">
            Kumpulan berkas investigasi hukum, analisis modus sindikat, dan panduan taktis perlindungan hukum bagi masyarakat dari jeratan judi online.
          </p>
        </div>

        {/* Documentary Banner Showcase with Editorial Workspace Photo */}
        <div className="mb-14 p-3 bg-[#EFE7D5] border border-[#D9CCA8] rounded-2xl shadow-xs">
          <div className="relative aspect-[16/7] w-full rounded-xl overflow-hidden bg-[#E1D4B8]">
            <img
              src="/src/assets/images/legal_advocacy_banner_1794456245456.jpg"
              alt="Meja telaah berkas perkara siber dan undang-undang ITE"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="max-w-xl text-[#F8F5EE]">
                <div className="text-xs font-medium text-[#DCCCAF] mb-2 flex items-center gap-2">
                  <span>Arsip Kajian Yuridis</span>
                  <span aria-hidden="true">·</span>
                  <span>Pasal 303 KUHP & Pasal 27 (2) UU ITE</span>
                </div>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold leading-snug mb-2">
                  Penyusunan Berkas Perkara & Rekonstruksi Bukti Elektronik
                </h3>
                <p className="text-xs sm:text-sm text-[#E2D6C0] line-clamp-2">
                  Setiap dokumen disusun berpedoman pada standar audit forensik digital dan kaidah pembuktian hukum pidana materiil untuk memastikan laporan dapat segera ditindaklanjuti penyidik.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ECE1C8] rounded-xl border border-[#D6C6A0]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#FAF7F0] text-[#1C1917] shadow-2xs'
                    : 'text-[#5E513D] hover:text-[#1C1917]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#8C7A5C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dokumentasi atau pasal..."
              className="w-full pl-9 pr-3 py-2 bg-[#FAF7F0] border border-[#D9CCA8] rounded-xl text-xs text-[#1C1917] placeholder-[#8A7963] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
            />
          </div>

        </div>

        {/* Documentation Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-6 bg-[#FAF7F0] border border-[#E3D7BC] hover:border-[#CDBB95] rounded-2xl transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#705F45] mb-3">
                  <span className="font-semibold text-[#8C6D3B]">{doc.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{doc.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-xl font-bold text-[#1C1917] mb-3 leading-snug">
                  {doc.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#4E4436] leading-relaxed mb-4">
                  {doc.summary}
                </p>

                {/* Legal Basis Tag */}
                <div className="p-3 bg-[#F2EBDB] border border-[#DFD3B8] rounded-xl text-xs text-[#524531] mb-5">
                  <span className="font-semibold text-[#8C6D3B] block mb-0.5">Rujukan Hukum:</span>
                  <span>{doc.legalBasis}</span>
                </div>
              </div>

              {/* Read Action */}
              <button
                onClick={() => setSelectedDoc(doc)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C9B689] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Pelajari Analisis Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#7A6136]" />
              </button>
            </div>
          ))}

          {filteredDocs.length === 0 && (
            <div className="col-span-full p-8 text-center bg-[#FAF7F0] border border-[#E3D7BC] rounded-2xl text-sm text-[#665844]">
              Tidak ada dokumentasi yang cocok dengan kata kunci pencarian.
            </div>
          )}
        </div>

      </div>

      {/* Detail Modal for Documentation */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-[#FAF7F0] border border-[#D9CDAD] rounded-2xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="text-xs font-semibold text-[#8C6D3B] mb-1">
                  {selectedDoc.category} · {selectedDoc.date}
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#1C1917] leading-snug">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-2 text-[#574E41] hover:text-[#1C1917] hover:bg-[#EFE7D4] rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup jendela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#3E362C] leading-relaxed mb-6">
              <p>{selectedDoc.summary}</p>

              <div className="p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl">
                <div className="text-xs font-bold text-[#8C6D3B] mb-1">
                  Konstruksi Hukum:
                </div>
                <div className="text-xs font-medium text-[#1C1917]">
                  {selectedDoc.legalBasis}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-[#1C1917] mb-2 uppercase tracking-wide">
                  Temuan & Catatan Kunci:
                </div>
                <ul className="space-y-2 text-xs text-[#483F33]">
                  {selectedDoc.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-[#EFE8D6] rounded-lg border border-[#E0D3B5]">
                      <span className="font-bold text-[#8C6D3B]">{idx + 1}.</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#FAF2DE] border border-[#DFCE9F] rounded-xl text-xs">
                <span className="font-bold text-[#8C6D3B] block mb-1">
                  Rekomendasi Tindakan Bagi Korban/Masyarakat:
                </span>
                <span className="text-[#3A3226]">
                  {selectedDoc.actionRecommendation}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E7DDC5] flex items-center justify-end">
              <button
                onClick={() => setSelectedDoc(null)}
                className="px-5 py-2 text-xs font-semibold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C9B689] rounded-lg transition-colors cursor-pointer"
              >
                Tutup Dokumen
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
