import React, { useState } from 'react';
import { ShieldAlert, Copy, Check, Download, ExternalLink, Printer, AlertCircle, FileCheck2, Info, Building2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ReportSubmission {
  id: string;
  timestamp: string;
  category: string;
  target: string;
  bankInfo: string;
  chronology: string;
  reporterName: string;
}

export const ReportSection: React.FC = () => {
  const [category, setCategory] = useState('Situs Web Judi Online');
  const [target, setTarget] = useState('');
  const [bankInfo, setBankInfo] = useState('');
  const [lossAmount, setLossAmount] = useState('');
  const [chronology, setChronology] = useState('');
  const [reporterName, setReporterName] = useState('Masyarakat Peduli Hukum (Anonim)');
  const [submittedReport, setSubmittedReport] = useState<ReportSubmission | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'direktori' | 'alur'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target.trim() && !bankInfo.trim()) return;

    const newReport: ReportSubmission = {
      id: `LAP-ADIGACOR77-${Date.now().toString().slice(-6)}`,
      timestamp: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      category,
      target: target.trim() || 'Tidak disebutkan',
      bankInfo: bankInfo.trim() || 'Tidak ada data rekening',
      chronology: chronology.trim() || 'Terindikasi memuat unsur perjudian online ilegal dan promosi terlarang.',
      reporterName: reporterName.trim() || 'Masyarakat (Anonim)'
    };

    setSubmittedReport(newReport);
  };

  const getLegalDraftText = (report: ReportSubmission) => {
    return `SURAT LAPORAN INFORMASI ADUAN SIBER & INDIKASI TINDAK PIDANA PERJUDIAN ONLINE
Nomor Registrasi Draf : ${report.id}
Tanggal Pelaporan    : ${report.timestamp}
Advokasi Terpadu     : ${PROFILE_DATA.name} (${PROFILE_DATA.focus}) - ${PROFILE_DATA.bio}

KEPADA YTH:
1. Satuan Tugas (Satgas) Pemberantasan Perjudian Daring Republik Indonesia
2. Direktorat Tindak Pidana Siber Bareskrim Polri (patrolisiber.id)
3. Kementerian Komunikasi dan Digital RI - Subdit Pengendalian Konten Internet (aduankonten.id)
4. Otoritas Jasa Keuangan (OJK) - Satgas PASTI / Kontak 157

DENGAN HORMAT,
Saya yang bertandatangan / menyampaikan informasi aduan di bawah ini:
Nama / Inisial Pelapor : ${report.reporterName}
Klasifikasi Aduan      : ${report.category}

DENGAN INI MENYAMPAIKAN DUGAAN TINDAK PIDANA DENGAN RINCIAN:
1. Target / Alamat URL / Akun :
   ${report.target}

2. Data Rekening Penampung / Dompet Digital (Mule Account):
   ${report.bankInfo}

3. Uraian Singkat Fakta & Modus Operandi:
   ${report.chronology}

DASAR HUKUM ADUAN:
- Pasal 303 dan 303 bis KUHP jo. UU No. 7 Tahun 1974 tentang Penertiban Perjudian.
- Pasal 27 ayat (2) jo. Pasal 45 ayat (3) UU No. 1 Tahun 2024 tentang Perubahan Kedua UU ITE (ancaman 10 tahun penjara & denda Rp10 Miliar).
- UU No. 8 Tahun 2010 tentang Pencegahan dan Pemberantasan Tindak Pidana Pencucian Uang (TPPU) untuk dasar pemblokiran rekening terkait.

PERMOHONAN TINDAKAN TEGAS:
1. Pemblokiran Domain, IP Address, dan akses transmisi elektronik terhadap situs/akun terlapor.
2. Koordinasi dengan Bank Indonesia dan Bank Penyelenggara untuk pembekuan seketika (freeze) terhadap rekening bank / e-wallet penampung dana taruhan.
3. Penyelidikan dan penyidikan lebih lanjut terhadap operator serta promotor di wilayah hukum Republik Indonesia.

Demikian laporan pengaduan ini disampaikan dengan sebenar-benarnya demi tegaknya hukum dan perlindungan masyarakat.`;
  };

  const copyToClipboard = () => {
    if (!submittedReport) return;
    const text = getLegalDraftText(submittedReport);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const downloadTextFile = () => {
    if (!submittedReport) return;
    const text = getLegalDraftText(submittedReport);
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Draf_Laporan_${submittedReport.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const officialPortals = [
    {
      name: "Aduankonten.id (Komdigi RI)",
      desc: "Kanal resmi Kementerian Komunikasi dan Digital untuk pemblokiran situs dan konten judi online.",
      url: "https://aduankonten.id",
      action: "Buka Aduan Konten"
    },
    {
      name: "Patrolisiber.id (Bareskrim Polri)",
      desc: "Portal pelaporan kejahatan siber, penipuan online, dan sindikat perjudian daring Dittipidsiber.",
      url: "https://patrolisiber.id",
      action: "Lapor ke Siber Polri"
    },
    {
      name: "Kontak 157 (Satgas PASTI / OJK)",
      desc: "Layanan pengaduan rekening bank atau dompet digital yang digunakan menampung dana judi online.",
      url: "https://kontak157.ojk.go.id",
      action: "Blokir Rekening di OJK"
    },
    {
      name: "LAPOR! (SP4N-LAPOR)",
      desc: "Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional untuk eskalasi ke instansi terkait.",
      url: "https://www.lapor.go.id",
      action: "Buka Portal LAPOR"
    }
  ];

  return (
    <section id="laporan" className="py-20 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D3B] tracking-wide mb-2">
            <span>PUSAT PENGADUAN & DOKUMEN HUKUM</span>
            <span aria-hidden="true">·</span>
            <span>PRO-BONO ADVOKASI</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Laporan Masyarakat: Berantas Situs & Rekening Judol
          </h2>
          <p className="mt-3 text-base text-[#4E4436] max-w-2xl leading-relaxed">
            Laporkan temuan situs, promotor media sosial, atau rekening penampung judol. Sistem kami membantu menyusun <strong>draf surat aduan hukum resmi</strong> yang valid dan siap diteruskan ke otoritas berwenang.
          </p>
        </div>

        {/* Navigation Tabs between Form, Official Directory, and Legal Flow */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-[#EFE7D5] border border-[#DECFA9] rounded-xl max-w-lg">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
              activeTab === 'form'
                ? 'bg-[#FAF7F0] text-[#1C1917] shadow-2xs'
                : 'text-[#61533E] hover:text-[#1C1917]'
            }`}
          >
            Formulir & Generator Draf
          </button>
          <button
            onClick={() => setActiveTab('direktori')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
              activeTab === 'direktori'
                ? 'bg-[#FAF7F0] text-[#1C1917] shadow-2xs'
                : 'text-[#61533E] hover:text-[#1C1917]'
            }`}
          >
            Saluran Resmi Negara
          </button>
          <button
            onClick={() => setActiveTab('alur')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
              activeTab === 'alur'
                ? 'bg-[#FAF7F0] text-[#1C1917] shadow-2xs'
                : 'text-[#61533E] hover:text-[#1C1917]'
            }`}
          >
            Alur Penindakan
          </button>
        </div>

        {/* Tab 1: Form & Draft Generator */}
        {activeTab === 'form' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-6 bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-editorial text-xl font-bold text-[#1C1917] mb-2 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#8C6D3B]" />
                <span>Input Informasi Pengaduan</span>
              </h3>
              <p className="text-xs text-[#52493D] mb-6">
                Privasi Anda terjaga. Formulir ini diproses sepenuhnya di browser Anda tanpa server atau database eksternal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Kategori Pelanggaran
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                  >
                    <option value="Situs Web Judi Online">Situs Web Judi Online (.com / gacor / slot)</option>
                    <option value="Promosi Influencer / Medsos">Promosi Akun Medsos / Influencer / Live Streaming</option>
                    <option value="Rekening Bank / E-Wallet Penampung">Rekening Bank / E-Wallet Penampung (Mule)</option>
                    <option value="Spam SMS / WA Blast">Spam SMS / WhatsApp / Telegram Otomatis</option>
                    <option value="Korban Jerat Pinjol & Pemerasan Judol">Korban Pemerasan / Teror Terkait Judol</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Link URL / Akun yang Dilaporkan <span className="text-[#8C6D3B]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="Contoh: https://slot-gacor-xyz77.com atau @akun_promosi"
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] placeholder-[#8A7A65] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Nomor Rekening Bank / E-Wallet Pelaku (Jika Diketahui)
                  </label>
                  <input
                    type="text"
                    value={bankInfo}
                    onChange={(e) => setBankInfo(e.target.value)}
                    placeholder="Contoh: Bank BCA 1234567890 a.n. Fulan / DANA 081234567xxx"
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] placeholder-[#8A7A65] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Estimasi Kerugian Finansial (Opsional)
                  </label>
                  <input
                    type="text"
                    value={lossAmount}
                    onChange={(e) => setLossAmount(e.target.value)}
                    placeholder="Contoh: Rp5.000.000,- atau Tanpa Kerugian (Hanya Melaporkan Temuan)"
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] placeholder-[#8A7A65] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Uraian Kronologi / Modus Singkat
                  </label>
                  <textarea
                    rows={3}
                    value={chronology}
                    onChange={(e) => setChronology(e.target.value)}
                    placeholder="Jelaskan bagaimana situs ini beroperasi, modus pendaftaran deposit, atau cara penyebaran link..."
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] placeholder-[#8A7A65] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                    Nama / Inisial Pelapor (Boleh Anonim)
                  </label>
                  <input
                    type="text"
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    placeholder="Masyarakat Peduli Hukum / Inisial Anda"
                    className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-bold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs mt-2"
                >
                  <FileCheck2 className="w-4 h-4 text-[#7A6136]" />
                  <span>Generate Draf Laporan Hukum Resmi</span>
                </button>
              </form>
            </div>

            {/* Generated Draft Preview Column */}
            <div className="lg:col-span-6 flex flex-col">
              {submittedReport ? (
                <div className="bg-[#FAF7F0] border border-[#DACBA8] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col h-full">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8DDCA] mb-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#8C6D3B]">
                        {submittedReport.id}
                      </span>
                      <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
                        Draf Laporan Informasi Resmi
                      </h4>
                    </div>
                    <span className="text-xs text-[#6B5E4A] font-medium">
                      Siap Dikirim
                    </span>
                  </div>

                  {/* Legal Monospace Preview Frame */}
                  <div className="flex-1 p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl font-mono text-[11px] text-[#241E17] whitespace-pre-wrap leading-relaxed overflow-y-auto max-h-[380px] mb-4 selection:bg-[#DECFA9]">
                    {getLegalDraftText(submittedReport)}
                  </div>

                  {/* Actions for the report */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 py-2.5 px-3 text-xs font-bold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-700" />
                          <span>Berhasil Disalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#7A6136]" />
                          <span>Salin Draf Surat</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={downloadTextFile}
                      className="py-2.5 px-3 text-xs font-medium text-[#292218] bg-[#F1EAD8] hover:bg-[#EAE0CA] border border-[#D9CCAC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#7A6136]" />
                      <span>Unduh File (.txt)</span>
                    </button>

                    <button
                      onClick={() => window.print()}
                      className="py-2.5 px-3 text-xs font-medium text-[#292218] bg-[#F1EAD8] hover:bg-[#EAE0CA] border border-[#D9CCAC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-4 h-4 text-[#7A6136]" />
                      <span>Cetak Berkas</span>
                    </button>
                  </div>

                  <p className="mt-4 text-[11px] text-[#695C4A] leading-relaxed">
                    💡 <em>Langkah selanjutnya: Salin draf di atas lalu tempelkan ke form aduan di portal resmi <strong>aduankonten.id</strong> atau <strong>patrolisiber.id</strong> untuk penanganan hukum langsung.</em>
                  </p>

                </div>
              ) : (
                <div className="bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-8 shadow-xs flex flex-col justify-center items-center text-center h-full min-h-[380px]">
                  <div className="w-12 h-12 rounded-xl bg-[#EFE7D4] border border-[#D9CCA8] flex items-center justify-center text-[#78613A] mb-4">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-lg font-bold text-[#1C1917] mb-2">
                    Draf Laporan Belum Dibuat
                  </h4>
                  <p className="text-xs text-[#5C5140] max-w-sm leading-relaxed mb-4">
                    Isi formulir di sebelah kiri untuk men-generate surat aduan hukum lengkap dengan rujukan pasal KUHP, UU ITE, dan UU TPPU.
                  </p>
                  <div className="p-3 bg-[#F4EFE2] border border-[#E5DAC0] rounded-xl text-[11px] text-[#6B5C47] text-left max-w-xs space-y-1">
                    <div>✓ Format standar laporan siber Bareskrim</div>
                    <div>✓ Nomor registrasi berkas unik</div>
                    <div>✓ Opsi anonim & bebas biaya</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Tab 2: Official Portals Directory */}
        {activeTab === 'direktori' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officialPortals.map((portal) => (
              <div
                key={portal.name}
                className="p-6 bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#8C6D3B] text-xs font-semibold mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>Lembaga Resmi Pemerintah</span>
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#1C1917] mb-2">
                    {portal.name}
                  </h4>
                  <p className="text-xs text-[#4E4436] leading-relaxed mb-6">
                    {portal.desc}
                  </p>
                </div>
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="py-2.5 px-4 text-xs font-semibold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{portal.action}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7A6136]" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Legal Flow & Escalation Process */}
        {activeTab === 'alur' && (
          <div className="bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-6 sm:p-8">
            <h4 className="font-editorial text-xl font-bold text-[#1C1917] mb-4">
              Tahapan Penindakan Laporan Berdasarkan Hukum Positif
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl">
                <span className="font-editorial text-xl font-bold text-[#8C6D3B] block mb-1">Fase 1</span>
                <h5 className="font-bold text-xs text-[#1C1917] mb-1">Verifikasi Bukti Digital</h5>
                <p className="text-[11px] text-[#554A3A]">
                  Tangkapan layar transaksi mutasi bank, URL situs aktif, nama pemilik rekening penampung, dan data waktu.
                </p>
              </div>

              <div className="p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl">
                <span className="font-editorial text-xl font-bold text-[#8C6D3B] block mb-1">Fase 2</span>
                <h5 className="font-bold text-xs text-[#1C1917] mb-1">Pemblokiran Akses Komdigi</h5>
                <p className="text-[11px] text-[#554A3A]">
                  Eskalasi ke sistem Trust Positif Komdigi untuk pemutusan akses DNS dan IP address penyedia judi.
                </p>
              </div>

              <div className="p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl">
                <span className="font-editorial text-xl font-bold text-[#8C6D3B] block mb-1">Fase 3</span>
                <h5 className="font-bold text-xs text-[#1C1917] mb-1">Pembekuan Rekening OJK</h5>
                <p className="text-[11px] text-[#554A3A]">
                  Perintah blokir rekening oleh Satgas PASTI / OJK kepada bank terkait guna mencegah pencairan uang taruhan.
                </p>
              </div>

              <div className="p-4 bg-[#F2EBDB] border border-[#DECFA9] rounded-xl">
                <span className="font-editorial text-xl font-bold text-[#8C6D3B] block mb-1">Fase 4</span>
                <h5 className="font-bold text-xs text-[#1C1917] mb-1">Penyidikan Pidana Siber</h5>
                <p className="text-[11px] text-[#554A3A]">
                  Pelacakan sindikat dan penindakan promotor sesuai ketentuan Pasal 303 KUHP jo. Pasal 27 (2) UU ITE.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
