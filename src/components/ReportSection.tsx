import React, { useState, useRef } from 'react';
import {
  ShieldAlert,
  Copy,
  Check,
  Download,
  ExternalLink,
  Printer,
  AlertCircle,
  FileCheck2,
  Building2,
  Scale,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ReportSubmission {
  id: string;
  letterNumber: string;
  timestamp: string;
  fullDate: string;
  category: string;
  target: string;
  bankInfo: string;
  lossAmount: string;
  chronology: string;
  reporterName: string;
}

export const ReportSection: React.FC = () => {
  const [category, setCategory] = useState('Situs Web Judi Online');
  const [target, setTarget] = useState('');
  const [bankInfo, setBankInfo] = useState('');
  const [lossAmount, setLossAmount] = useState('');
  const [chronology, setChronology] = useState('');
  const [reporterName, setReporterName] = useState('');
  
  const [submittedReport, setSubmittedReport] = useState<ReportSubmission | null>(null);
  const [copied, setCopied] = useState(false);
  const [resetNotice, setResetNotice] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'direktori' | 'alur'>('form');

  const formRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const resetFormFields = () => {
    setCategory('Situs Web Judi Online');
    setTarget('');
    setBankInfo('');
    setLossAmount('');
    setChronology('');
    setReporterName('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!target.trim() && !bankInfo.trim()) return;

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const timeFormatted = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });
    const uniqueNum = Date.now().toString().slice(-6);

    const newReport: ReportSubmission = {
      id: `LAP-AG77-${uniqueNum}`,
      letterNumber: `0${uniqueNum.slice(0, 3)}/ADV-SIBER/AG77/XI/${now.getFullYear()}`,
      timestamp: `${dateFormatted}, pukul ${timeFormatted} WIB`,
      fullDate: `${dateFormatted}`,
      category,
      target: target.trim() || 'Tidak disebutkan / Dalam penelusuran digital',
      bankInfo: bankInfo.trim() || 'Tidak ada data rekening yang dilampirkan',
      lossAmount: lossAmount.trim() || 'Belum ditaksir / Laporan temuan publik',
      chronology: chronology.trim() || 'Terindikasi memuat unsur permainan judi daring ilegal, promosi manipulatif, dan penyediaan rekening penampung.',
      reporterName: reporterName.trim() || 'Masyarakat Peduli Hukum (Identitas Dilindungi)'
    };

    // Simpan hasil surat resmi
    setSubmittedReport(newReport);

    // KOSONGKAN RIWAYAT KETIKAN SECARA OTOMATIS SESUAI PERMINTAAN USER
    resetFormFields();

    // Tampilkan notifikasi bahwa riwayat ketikan telah dihapus bersih
    setResetNotice(true);
    setTimeout(() => {
      setResetNotice(false);
    }, 5000);

    // Geser tampilan ke dokumen surat resmi yang baru digenerate
    setTimeout(() => {
      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  const getFullFormalLetterPlain = (report: ReportSubmission) => {
    return `================================================================================
KANTOR ADVOKASI HUKUM SIBER & PEMBERANTASAN JUDI ONLINE
TIM PEMBERANTASAN JUDOL - ADIGACOR77, S.H.
Kanal Publik: instagram.com/oneedikcc | Sifat: Pro-Bono Masyarakat
================================================================================

Nomor    : ${report.letterNumber}
Sifat    : PENTING / DOKUMEN INFORMASI HUKUM
Lampiran : 1 (Satu) Berkas Bukti Digital
Perihal  : Laporan Informasi Dugaan Tindak Pidana Perjudian Daring & Permohonan
           Pemblokiran serta Pembekuan Rekening Penampung

Jakarta, ${report.fullDate}

Kepada Yth:
1. Ketua Satuan Tugas (Satgas) Pemberantasan Perjudian Daring Republik Indonesia
2. Direktur Tindak Pidana Siber Bareskrim Polri (patrolisiber.id)
3. Direktur Jenderal Pengendalian Aplikasi Informatika, Kementerian Komunikasi dan Digital RI (aduankonten.id)
4. Ketua Satgas Pemberantasan Aktivitas Keuangan Ilegal (Satgas PASTI) / Otoritas Jasa Keuangan (OJK)

Dengan hormat,

Sehubungan dengan peran serta masyarakat dalam pencegahan dan pemberantasan tindak pidana sebagaimana dijamin dalam Pasal 108 ayat (1) dan (3) Kitab Undang-Undang Hukum Acara Pidana (KUHAP), kami yang bertandatangan di bawah ini menyampaikan laporan informasi dugaan tindak pidana dengan rincian materi sebagai berikut:

I. IDENTITAS PELAPOR & REGISTRASI LAPORAN
   Nomor Registrasi : ${report.id}
   Waktu Laporan    : ${report.timestamp}
   Penyampai Aduan  : ${report.reporterName}
   Kategori Temuan  : ${report.category}
   Advokasi Hukum   : AdiGacor77, S.H. (Sarjana Hukum - Adi si Pemberantas Judol)

II. RINCIAN MATERI ADUAN TERLAPOR
   1. Alamat URL / Akun / Target :
      ${report.target}

   2. Data Rekening Bank / E-Wallet Penampung (Mule Account):
      ${report.bankInfo}

   3. Estimasi Kerugian Finansial :
      ${report.lossAmount}

   4. Uraian Fakta & Modus Operandi :
      ${report.chronology}

III. DASAR KONSTRUKSI HUKUM POSITIF REPUBLIK INDONESIA
   1. Pasal 303 dan 303 bis KUHP jo. UU No. 7 Tahun 1974 tentang Penertiban Perjudian.
   2. Pasal 27 ayat (2) jo. Pasal 45 ayat (3) Undang-Undang Nomor 1 Tahun 2024 tentang Perubahan Kedua atas Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik (UU ITE), dengan ancaman pidana penjara paling lama 10 (sepuluh) tahun dan/atau denda paling banyak Rp10.000.000.000,00 (sepuluh miliar rupiah).
   3. Undang-Undang Nomor 8 Tahun 2010 tentang Pencegahan dan Pemberantasan Tindak Pidana Pencucian Uang (TPPU), sebagai dasar pembekuan seketika atas aliran dana haram.

IV. PETITUM / PERMOHONAN TINDAKAN PENEGAKAN HUKUM
   Berdasarkan fakta-fakta dan dasar hukum tersebut di atas, kami memohon kepada otoritas berwenang untuk:
   1. Melakukan pemutusan akses transmisi elektronik, pemblokiran alamat domain, dan IP address terhadap sasaran yang dilaporkan.
   2. Berkoordinasi dengan Bank Indonesia dan pihak perbankan terkait untuk melakukan pembekuan sementara (freeze) atas rekening / e-wallet penampung yang terindikasi.
   3. Menindaklanjuti proses penyelidikan dan penyidikan terhadap penyelenggara, operator, maupun promotor yang terlibat.

Demikian laporan informasi ini kami sampaikan dengan sebenar-benarnya demi tegaknya supremasi hukum serta melindungi perekonomian masyarakat Indonesia.

Hormat kami,
Advokasi Penegakan Hukum Siber,

ADIGACOR77, S.H.
Sarjana Hukum · Adi si Pemberantas Judol
Kanal Informasi: instagram.com/oneedikcc`;
  };

  const copyToClipboard = () => {
    if (!submittedReport) return;
    const text = getFullFormalLetterPlain(submittedReport);
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const downloadTextFile = () => {
    if (!submittedReport) return;
    const text = getFullFormalLetterPlain(submittedReport);
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Surat_Resmi_${submittedReport.id}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadWordDocument = () => {
    if (!submittedReport) return;
    const letterElement = document.getElementById('printable-official-letter');
    if (!letterElement) return;
    const contentHtml = letterElement.innerHTML;
    const fullDocument = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Surat Resmi - ${submittedReport.id}</title>
<style>
body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.4; color: #000; margin: 20mm; }
.border-b-4 { border-bottom: 4px solid #000; margin-bottom: 2px; }
.border-b { border-bottom: 1px solid #000; margin-bottom: 15px; }
.text-center { text-align: center; }
.font-bold { font-weight: bold; }
.underline { text-decoration: underline; }
table { width: 100%; border-collapse: collapse; margin: 10px 0; }
td, th { padding: 6px; border: 1px solid #999; font-size: 11pt; }
</style>
</head>
<body>
${contentHtml}
</body>
</html>`;
    const blob = new Blob(['\ufeff', fullDocument], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Surat_Resmi_${submittedReport.id}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
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
    <section id="laporan" className="py-20 bg-[#F8F5EE] print:py-0 print:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:p-0 print:m-0 print:max-w-full">
        
        {/* Section Header */}
        <div className="mb-12 no-print">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D3B] tracking-wide mb-2">
            <span>PUSAT PENGADUAN & DOKUMEN HUKUM</span>
            <span aria-hidden="true">·</span>
            <span>PRO-BONO ADVOKASI</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Laporan Masyarakat: Berantas Situs & Rekening Judol
          </h2>
          <p className="mt-3 text-base text-[#4E4436] max-w-2xl leading-relaxed">
            Laporkan temuan situs, promotor media sosial, atau rekening penampung judol. Sistem kami menyusun <strong>surat resmi advokasi hukum lengkap dengan kop surat dan dasar hukum</strong> yang siap diteruskan ke otoritas terkait.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-[#EFE7D5] border border-[#DECFA9] rounded-xl max-w-lg no-print">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center ${
              activeTab === 'form'
                ? 'bg-[#FAF7F0] text-[#1C1917] shadow-2xs'
                : 'text-[#61533E] hover:text-[#1C1917]'
            }`}
          >
            Formulir & Surat Resmi
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
          <div className="space-y-12">
            
            {/* Top Grid: Input Form & Quick Instructions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start no-print">
              
              {/* Input Form Column */}
              <div ref={formRef} className="lg:col-span-7 bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-6 sm:p-8 shadow-xs">
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-editorial text-xl font-bold text-[#1C1917] flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-[#8C6D3B]" />
                    <span>Formulir Pengaduan Pelanggaran</span>
                  </h3>
                  <button
                    type="button"
                    onClick={resetFormFields}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#7A6136] hover:text-[#1C1917] p-1.5 rounded-lg hover:bg-[#EFE8D6] transition-colors cursor-pointer"
                    title="Hapus riwayat ketikan saat ini"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Hapus Ketikan</span>
                  </button>
                </div>

                <p className="text-xs text-[#52493D] mb-5">
                  Isi informasi di bawah ini. Setelah Anda mengklik tombol kirim, <strong>riwayat ketikan formulir akan otomatis dibersihkan</strong> sehingga Anda dapat langsung memasukkan aduan baru tanpa perlu menghapus manual satu per satu.
                </p>

                {/* Reset Toast Notification */}
                {resetNotice && (
                  <div className="mb-5 p-3.5 bg-[#EAF2E2] border border-[#B8D7A3] text-[#2D5A1E] rounded-xl text-xs flex items-center gap-2.5 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>
                      <strong>Surat resmi berhasil dibuat!</strong> Riwayat ketikan formulir telah otomatis dikosongkan untuk pengisian berikutnya.
                    </span>
                  </div>
                )}

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
                      <option value="Situs Web Judi Online">Situs Web Judi Online (.com / slot / gacor / APK)</option>
                      <option value="Promosi Influencer / Medsos">Promosi Akun Medsos / Influencer / Live Streaming</option>
                      <option value="Rekening Bank / E-Wallet Penampung">Rekening Bank / E-Wallet Penampung (Mule Account)</option>
                      <option value="Spam SMS / WA Blast">Spam SMS / WhatsApp / Telegram Otomatis</option>
                      <option value="Korban Jerat Pinjol & Pemerasan Judol">Korban Pemerasan / Teror Terkait Judol</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C1917] mb-1.5">
                      Link URL / Akun / Sasaran yang Dilaporkan <span className="text-[#8C6D3B]">*</span>
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
                      Nomor Rekening Bank / E-Wallet Penampung (Jika Diketahui)
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
                      placeholder="Contoh: Rp5.000.000,- atau Tanpa Kerugian (Laporan Temuan Publik)"
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
                      Nama / Inisial Pelapor (Boleh Dikosongkan / Anonim)
                    </label>
                    <input
                      type="text"
                      value={reporterName}
                      onChange={(e) => setReporterName(e.target.value)}
                      placeholder="Masyarakat Peduli Hukum / Inisial Anda (Bebas)"
                      className="w-full px-3 py-2.5 bg-[#F4EFE2] border border-[#DACDB0] rounded-xl text-xs text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#8C6D3B]"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 text-xs font-bold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <FileCheck2 className="w-4 h-4 text-[#7A6136]" />
                      <span>Terbitkan Surat Resmi Laporan</span>
                    </button>
                    
                    <button
                      type="button"
                      onClick={resetFormFields}
                      className="py-3 px-4 text-xs font-medium text-[#483F33] bg-[#EFE8D6] hover:bg-[#EAE1CB] border border-[#D9CDAD] rounded-xl transition-colors cursor-pointer"
                      title="Bersihkan seluruh kolom ketikan"
                    >
                      Reset Form
                    </button>
                  </div>
                </form>
              </div>

              {/* Guide Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl shadow-xs">
                  <h4 className="font-editorial text-lg font-bold text-[#1C1917] mb-3 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#8C6D3B]" />
                    <span>Format Surat Resmi Advokasi</span>
                  </h4>
                  <p className="text-xs text-[#4F4638] leading-relaxed mb-4">
                    Surat yang dihasilkan mengadopsi standar korespondensi hukum formal di Indonesia dengan kop surat resmi tim advokasi <strong>{PROFILE_DATA.name} ({PROFILE_DATA.focus})</strong>:
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#52493D]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8C6D3B] font-bold">1.</span>
                      <span><strong>Kop Surat Resmi</strong> lengkap dengan lambang keadilan hukum dan pembatas garis ganda dinas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8C6D3B] font-bold">2.</span>
                      <span><strong>Nomor, Sifat, & Perihal</strong> formal untuk mempermudah disposisi perkara di instansi negara.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8C6D3B] font-bold">3.</span>
                      <span><strong>Konstruksi Dasar Hukum</strong> (KUHP 303, UU ITE Pasal 27 (2), dan UU TPPU No. 8/2010).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8C6D3B] font-bold">4.</span>
                      <span><strong>Petitum Tindakan Tegas</strong> (pemblokiran situs, pembekuan rekening bank, dan penyidikan).</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-[#EFE8D6] border border-[#DDD0AE] rounded-2xl text-xs text-[#5C513E] leading-relaxed">
                  <div className="font-semibold text-[#1C1917] mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#8C6D3B]" />
                    <span>Kemudahan Pelaporan Berulang</span>
                  </div>
                  Setelah menekan tombol kirim, formulir Anda langsung bersih seketika sehingga Anda dapat menginput daftar rekening atau link judol berikutnya tanpa ribet menghapus karakter satu per satu.
                </div>
              </div>

            </div>

            {/* Generated Official Legal Letter Container */}
            <div ref={resultRef} className="pt-6 border-t border-[#E5DAC0] print:pt-0 print:border-none print:m-0">
              
              {submittedReport ? (
                <div>
                  
                  {/* Top Control Bar for the Letter */}
                  <div className="flex flex-wrap items-center justify-between gap-4 p-4 mb-6 bg-[#FAF7F0] border border-[#DECFA9] rounded-2xl shadow-xs no-print">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#8C6D3B] block">
                        NOMOR BERKAS: {submittedReport.id}
                      </span>
                      <h4 className="font-editorial text-lg font-bold text-[#1C1917]">
                        Surat Resmi Laporan Informasi Telah Diterbitkan
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={copyToClipboard}
                        className="py-2 px-3 text-xs font-bold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                        title="Salin seluruh isi surat ke papan klip"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#7A6136]" />
                            <span>Salin Teks Lengkap</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={downloadWordDocument}
                        className="py-2 px-3 text-xs font-medium text-[#292218] bg-[#F1EAD8] hover:bg-[#EAE0CA] border border-[#D9CCAC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                        title="Unduh surat resmi berformat Word (.doc)"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#7A6136]" />
                        <span>Unduh .doc</span>
                      </button>

                      <button
                        onClick={downloadTextFile}
                        className="py-2 px-3 text-xs font-medium text-[#292218] bg-[#F1EAD8] hover:bg-[#EAE0CA] border border-[#D9CCAC] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                        title="Unduh teks polos (.txt)"
                      >
                        <Download className="w-3.5 h-3.5 text-[#7A6136]" />
                        <span>Unduh .txt</span>
                      </button>

                      <button
                        onClick={handlePrint}
                        className="py-2 px-3.5 text-xs font-bold text-[#FFFFFF] bg-[#1C1917] hover:bg-[#2E2822] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                        title="Cetak khusus lembaran surat resmi atau simpan sebagai PDF"
                      >
                        <Printer className="w-3.5 h-3.5 text-[#E6D7BA]" />
                        <span>Cetak Surat Resmi (PDF)</span>
                      </button>

                      <button
                        onClick={() => {
                          if (formRef.current) {
                            formRef.current.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="py-2 px-3 text-xs font-medium text-[#7A6136] hover:text-[#1C1917] hover:bg-[#EDE2C7] rounded-lg transition-colors cursor-pointer"
                      >
                        + Isi Laporan Lain
                      </button>
                    </div>
                  </div>

                  {/* OFFICIAL LEGAL LETTER VISUAL PRESENTATION (A4 Formatted Sheet) */}
                  <div
                    id="printable-official-letter"
                    className="max-w-4xl mx-auto bg-[#FFFFFF] border border-[#D9CCA8] p-8 sm:p-14 rounded-2xl shadow-md text-[#1C1917] leading-relaxed font-sans"
                  >
                    
                    {/* KOP SURAT RESMI DINAS / ADVOKASI HUKUM */}
                    <div className="pb-4 mb-6">
                      <div className="flex items-center justify-between gap-6 pb-4">
                        
                        {/* Emblem Lambang Timbangan Keadilan */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#1C1917] flex items-center justify-center shrink-0 p-2 bg-[#FAF8F5]">
                          <Scale className="w-10 h-10 text-[#1C1917]" />
                        </div>

                        {/* Teks Identitas Lembaga / Advokasi */}
                        <div className="flex-1 text-center">
                          <h2 className="font-editorial text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] uppercase">
                            Kantor Advokasi Hukum Siber & Perlindungan Masyarakat
                          </h2>
                          <h3 className="font-editorial text-sm sm:text-lg font-bold text-[#8C6D3B] uppercase tracking-wide mt-0.5">
                            Tim Pemberantasan Judi Online · AdiGacor77, S.H.
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#443E37] mt-1 font-mono">
                            Fokus: Sarjana Hukum · Advokasi Cyber Law · Kanal Publik: instagram.com/oneedikcc
                          </p>
                          <p className="text-[10px] text-[#665D50] italic">
                            Sekretariat Bantuan Hukum Pro-Bono Masyarakat · Wilayah Hukum Republik Indonesia
                          </p>
                        </div>

                        {/* Cap Status Resmi Simetris */}
                        <div className="hidden sm:flex flex-col items-center justify-center w-20 h-20 border border-[#8C6D3B] rounded-lg text-center p-1 bg-[#FAF7F0] text-[9px] font-mono shrink-0">
                          <span className="font-bold text-[#8C6D3B]">RESMI</span>
                          <span className="text-[#383023]">BERKAS</span>
                          <span className="text-[#383023]">ADUAN</span>
                          <span className="text-[#8C6D3B] font-bold">2026</span>
                        </div>
                      </div>

                      {/* GARIS GANDA KOP SURAT (CIRI KHAS SURAT RESMI INDONESIA) */}
                      <div className="border-b-4 border-[#1C1917] mb-1"></div>
                      <div className="border-b border-[#1C1917]"></div>
                    </div>

                    {/* ATRIBUT SURAT (NOMOR, SIFAT, LAMPIRAN, PERIHAL, TANGGAL) */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6 text-xs sm:text-sm">
                      <div className="space-y-1">
                        <div className="flex">
                          <span className="w-24 font-semibold text-[#1C1917]">Nomor</span>
                          <span className="w-3">:</span>
                          <span className="font-mono font-medium">{submittedReport.letterNumber}</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-[#1C1917]">Sifat</span>
                          <span className="w-3">:</span>
                          <span className="font-medium text-red-700">PENTING / DOKUMEN HUKUM</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-[#1C1917]">Lampiran</span>
                          <span className="w-3">:</span>
                          <span>1 (Satu) Berkas Bukti Elektronik</span>
                        </div>
                        <div className="flex">
                          <span className="w-24 font-semibold text-[#1C1917]">Perihal</span>
                          <span className="w-3">:</span>
                          <span className="font-bold underline text-[#1C1917]">
                            Laporan Informasi Dugaan Tindak Pidana Perjudian Daring & Permohonan Pemblokiran serta Pembekuan Rekening Bank
                          </span>
                        </div>
                      </div>

                      <div className="text-right sm:text-right text-xs sm:text-sm">
                        <span className="font-medium">Jakarta / Indonesia, {submittedReport.fullDate}</span>
                      </div>
                    </div>

                    {/* TUJUAN SURAT (KEPADA YTH) */}
                    <div className="mb-6 text-xs sm:text-sm">
                      <p className="font-semibold text-[#1C1917] mb-1">Kepada Yth:</p>
                      <ol className="list-decimal list-inside space-y-0.5 text-[#332C24] pl-2 font-medium">
                        <li>Ketua Satuan Tugas (Satgas) Pemberantasan Perjudian Daring Republik Indonesia</li>
                        <li>Direktur Tindak Pidana Siber Bareskrim Kepolisian Negara Republik Indonesia</li>
                        <li>Direktur Jenderal Pengendalian Aplikasi Informatika, Kementerian Komunikasi dan Digital RI</li>
                        <li>Ketua Satgas Pemberantasan Aktivitas Keuangan Ilegal (Satgas PASTI) / Otoritas Jasa Keuangan (OJK)</li>
                      </ol>
                      <p className="mt-1 pl-2 italic text-[#554A3B]">di Tempat.</p>
                    </div>

                    {/* SALAM PEMBUKA & KALIMAT PEMBUKA */}
                    <div className="mb-6 text-xs sm:text-sm space-y-3 text-justify">
                      <p className="font-semibold text-[#1C1917]">Dengan hormat,</p>
                      <p>
                        Sehubungan dengan hak dan kewajiban setiap warga negara dalam membantu upaya pencegahan dan pemberantasan tindak pidana sebagaimana diatur dalam <strong>Pasal 108 ayat (1) dan (3) Kitab Undang-Undang Hukum Acara Pidana (KUHAP)</strong>, melalui surat resmi ini kami menyampaikan laporan informasi dugaan tindak pidana perjudian online terorganisir dengan rincian data sebagai berikut:
                      </p>
                    </div>

                    {/* BAGIAN I: IDENTITAS & REGISTRASI LAPORAN */}
                    <div className="mb-6 border border-[#D9CDAD] rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-[#F8F5EE] px-4 py-2 font-bold text-[#1C1917] border-b border-[#D9CDAD] uppercase tracking-wide text-xs">
                        I. IDENTITAS LAPORAN & PENYAMPAI ADUAN
                      </div>
                      <div className="p-4 space-y-2 bg-[#FFFFFF]">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                          <span className="font-semibold text-[#554A39]">Nomor Registrasi Sistem</span>
                          <span className="sm:col-span-2 font-mono font-bold text-[#8C6D3B]">{submittedReport.id}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                          <span className="font-semibold text-[#554A39]">Waktu Pelaporan</span>
                          <span className="sm:col-span-2">{submittedReport.timestamp}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                          <span className="font-semibold text-[#554A39]">Penyampai Informasi</span>
                          <span className="sm:col-span-2 font-medium">{submittedReport.reporterName}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                          <span className="font-semibold text-[#554A39]">Klasifikasi Pelanggaran</span>
                          <span className="sm:col-span-2 font-medium text-[#1C1917]">{submittedReport.category}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                          <span className="font-semibold text-[#554A39]">Pendamping Advokasi</span>
                          <span className="sm:col-span-2 font-medium">{PROFILE_DATA.name} ({PROFILE_DATA.focus})</span>
                        </div>
                      </div>
                    </div>

                    {/* BAGIAN II: MATERI ADUAN TERLAPOR */}
                    <div className="mb-6 border border-[#D9CDAD] rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-[#F8F5EE] px-4 py-2 font-bold text-[#1C1917] border-b border-[#D9CDAD] uppercase tracking-wide text-xs">
                        II. URAIAN FAKTA & SASARAN TERLAPOR
                      </div>
                      <div className="p-4 space-y-3 bg-[#FFFFFF]">
                        <div>
                          <span className="font-semibold text-[#1C1917] block mb-1">
                            1. Alamat Tautan (URL) / Akun / Target Sasaran:
                          </span>
                          <div className="p-2.5 bg-[#FAF7F0] border border-[#DECFA9] rounded-lg font-mono text-xs text-[#2A2318] break-all">
                            {submittedReport.target}
                          </div>
                        </div>

                        <div>
                          <span className="font-semibold text-[#1C1917] block mb-1">
                            2. Data Rekening Bank / E-Wallet Penampung Dana (Mule Account):
                          </span>
                          <div className="p-2.5 bg-[#FAF7F0] border border-[#DECFA9] rounded-lg font-mono text-xs text-[#2A2318]">
                            {submittedReport.bankInfo}
                          </div>
                        </div>

                        <div>
                          <span className="font-semibold text-[#1C1917] block mb-1">
                            3. Estimasi Nilai Kerugian Korban / Perputaran Dana:
                          </span>
                          <p className="text-[#3A3226]">
                            {submittedReport.lossAmount}
                          </p>
                        </div>

                        <div>
                          <span className="font-semibold text-[#1C1917] block mb-1">
                            4. Uraian Kronologi Fakta & Modus Operandi:
                          </span>
                          <p className="text-[#3A3226] text-justify leading-relaxed whitespace-pre-line">
                            {submittedReport.chronology}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BAGIAN III: DASAR KONSTRUKSI HUKUM */}
                    <div className="mb-6 border border-[#D9CDAD] rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-[#F8F5EE] px-4 py-2 font-bold text-[#1C1917] border-b border-[#D9CDAD] uppercase tracking-wide text-xs">
                        III. DASAR KONSTRUKSI HUKUM POSITIF REPUBLIK INDONESIA
                      </div>
                      <div className="p-4 space-y-2 bg-[#FFFFFF] text-justify text-xs sm:text-sm text-[#383023]">
                        <p>
                          <strong>1. Kitab Undang-Undang Hukum Pidana (KUHP) Pasal 303 jo. UU No. 7 Tahun 1974 tentang Penertiban Perjudian:</strong> Menjerat seluruh pihak yang mengadakan, menyediakan sarana/server, maupun memfasilitasi tindak pidana perjudian dengan ancaman pidana penjara maksimal 10 tahun.
                        </p>
                        <p>
                          <strong>2. Undang-Undang Nomor 1 Tahun 2024 (Perubahan Kedua UU ITE) Pasal 27 ayat (2) jo. Pasal 45 ayat (3):</strong> Melarang pendistribusian, transmisi, atau penyediaan akses dokumen elektronik bermuatan perjudian, diancam pidana penjara paling lama 10 (sepuluh) tahun dan/atau denda paling banyak Rp10.000.000.000,00 (sepuluh miliar rupiah).
                        </p>
                        <p>
                          <strong>3. Undang-Undang Nomor 8 Tahun 2010 tentang Tindak Pidana Pencucian Uang (TPPU):</strong> Memberikan landasan hukum kuat bagi otoritas terkait untuk segera melakukan pemblokiran dan penyitaan aset atas rekening-rekening penampung aliran dana hasil tindak pidana.
                        </p>
                      </div>
                    </div>

                    {/* BAGIAN IV: PERMOHONAN TINDAKAN PENEGAKAN HUKUM */}
                    <div className="mb-8 border border-[#D9CDAD] rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-[#F8F5EE] px-4 py-2 font-bold text-[#1C1917] border-b border-[#D9CDAD] uppercase tracking-wide text-xs">
                        IV. PETITUM / PERMOHONAN TINDAKAN TEGAS
                      </div>
                      <div className="p-4 space-y-2 bg-[#FFFFFF] text-xs sm:text-sm">
                        <p>Berdasarkan uraian dan bukti awal di atas, kami memohon agar:</p>
                        <ol className="list-decimal list-inside space-y-1.5 pl-2 text-[#2D261C]">
                          <li>
                            <strong>Kementerian Komunikasi dan Digital RI</strong> segera melakukan pemblokiran (take down) domain, URL, dan sub-domain serta IP address terlapor.
                          </li>
                          <li>
                            <strong>Otoritas Jasa Keuangan (OJK) & Bank Indonesia</strong> memerintahkan bank terkait untuk melakukan pembekuan seketika (freeze) terhadap nomor rekening / dompet digital yang digunakan sebagai penampung transaksi perjudian tersebut.
                          </li>
                          <li>
                            <strong>Bareskrim Siber Polri</strong> menindaklanjuti proses penyelidikan guna mengungkap aktor sindikat, pemilik rekening perantara (rekening mule), dan promotor terkait demi kepastian hukum.
                          </li>
                        </ol>
                      </div>
                    </div>

                    {/* KALIMAT PENUTUP */}
                    <p className="text-xs sm:text-sm mb-8 text-justify">
                      Demikian laporan informasi ini kami sampaikan dengan penuh tanggung jawab demi menegakkan hukum, membela kepentingan umum, dan membebaskan masyarakat dari lingkaran kejahatan judi daring. Atas perhatian serta tindakan cepat pihak berwenang, kami ucapkan terima kasih.
                    </p>

                    {/* LEMBAR PENGESAHAN / TANDA TANGAN RESMI */}
                    <div className="pt-4 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs sm:text-sm">
                      
                      {/* Catatan Verifikasi Sistem */}
                      <div className="text-[11px] text-[#695D4A] max-w-xs font-mono">
                        <p>Draf Digital ID: {submittedReport.id}</p>
                        <p>Verifikasi Integritas: OK / Pro-Bono Advokasi</p>
                        <p>Dokumen ini sah diterbitkan melalui portal advokasi adigacor77</p>
                      </div>

                      {/* Tanda Tangan & Cap Advokat */}
                      <div className="text-center sm:text-right w-64">
                        <p className="text-xs text-[#52493D] mb-1">Hormat kami,</p>
                        <p className="text-xs font-semibold text-[#1C1917] mb-4">
                          Tim Advokasi Penegakan Hukum Siber
                        </p>
                        
                        {/* Stempel & Paraf Digital */}
                        <div className="inline-flex items-center justify-center p-3 my-2 border-2 border-dashed border-[#8C6D3B] rounded-xl bg-[#FAF7F0] text-center">
                          <div className="flex flex-col items-center">
                            <Scale className="w-6 h-6 text-[#8C6D3B] mb-0.5" />
                            <span className="text-[10px] font-mono font-bold text-[#8C6D3B] uppercase tracking-wider">
                              TERVERIFIKASI RESMI
                            </span>
                            <span className="text-[9px] text-[#554A3B]">
                              ADIGACOR77 · ADVOKASI SIBER
                            </span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="font-editorial text-base font-bold text-[#1C1917] underline decoration-1">
                            {PROFILE_DATA.name}, S.H.
                          </p>
                          <p className="text-xs text-[#52493D] font-medium">
                            {PROFILE_DATA.focus} · {PROFILE_DATA.bio}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Post-Print Next Step Reminder */}
                  <div className="mt-6 p-4 bg-[#FAF7F0] border border-[#DECFA9] rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4E4436] no-print">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-5 h-5 text-[#8C6D3B] shrink-0" />
                      <span>
                        <strong>Langkah Selanjutnya:</strong> Salin teks surat atau unduh PDF, lalu unggah/lampirkan ke portal resmi <strong>aduankonten.id</strong> atau <strong>patrolisiber.id</strong> agar segera diproses aparat negara.
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        if (formRef.current) {
                          formRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-4 py-2 text-xs font-bold text-[#1C1917] bg-[#E8DCBF] hover:bg-[#DCCEAB] border border-[#C5B080] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Tulis Laporan Lainnya
                    </button>
                  </div>

                </div>
              ) : (
                <div className="bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-8 sm:p-12 shadow-xs flex flex-col justify-center items-center text-center no-print">
                  <div className="w-14 h-14 rounded-2xl bg-[#EFE7D4] border border-[#D9CCA8] flex items-center justify-center text-[#78613A] mb-4">
                    <FileCheck2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-editorial text-xl font-bold text-[#1C1917] mb-2">
                    Surat Resmi Belum Diterbitkan
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5C5140] max-w-md leading-relaxed mb-6">
                    Lengkapi kolom formulir di atas dan klik <strong>&quot;Terbitkan Surat Resmi Laporan&quot;</strong>. Sistem akan langsung memformat data Anda menjadi surat dinas berkekuatan hukum dengan kop surat resmi.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-lg w-full text-xs text-[#6B5C47]">
                    <div className="p-3 bg-[#F4EFE2] border border-[#E5DAC0] rounded-xl">
                      <span className="font-bold text-[#8C6D3B] block mb-0.5">Kop Surat</span>
                      Format lembaga resmi lengkap dengan garis ganda dinas.
                    </div>
                    <div className="p-3 bg-[#F4EFE2] border border-[#E5DAC0] rounded-xl">
                      <span className="font-bold text-[#8C6D3B] block mb-0.5">Dasar Hukum</span>
                      Kompilasi pasal KUHP 303, UU ITE, dan UU TPPU.
                    </div>
                    <div className="p-3 bg-[#F4EFE2] border border-[#E5DAC0] rounded-xl">
                      <span className="font-bold text-[#8C6D3B] block mb-0.5">Auto-Reset</span>
                      Formulir otomatis bersih untuk pengisian berikutnya.
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        )}

        {/* Tab 2: Official Portals Directory */}
        {activeTab === 'direktori' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 no-print">
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
          <div className="bg-[#FAF7F0] border border-[#E3D7BB] rounded-2xl p-6 sm:p-8 no-print">
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
