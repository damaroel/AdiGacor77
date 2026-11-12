export interface ProjectWork {
  id: string;
  name: string;
  domain: string;
  hasUrl: boolean;
  url: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  role: string;
  techStack: string[];
  status: 'Aktif' | 'Pengembangan' | 'Arsip';
}

export interface DocItem {
  id: string;
  category: 'Investigasi' | 'Edukasi Hukum' | 'Alur Penindakan' | 'Modus Kejahatan';
  title: string;
  date: string;
  summary: string;
  legalBasis: string;
  keyPoints: string[];
  actionRecommendation: string;
}

export const PROFILE_DATA = {
  name: "AdiGacor77",
  focus: "Sarjana Hukum",
  bio: "Adi si Pemberantas Judol",
  formalTitle: "Sarjana Hukum (S.H.)",
  publicLinks: {
    instagram: "https://instagram.com/oneedikcc",
    instagramHandle: "@oneedikcc",
    xProfile: "https://x.com/oneedikcc",
    xHandle: "@oneedikcc"
  },
  missionStatement: "Membongkar ilusi judi online, memperjuangkan kepastian hukum bagi masyarakat korban manipulasi sindikat, dan mendorong literasi digital berkeadilan di Indonesia.",
  legalFoundations: [
    {
      title: "Pasal 303 KUHP & UU 7/1974",
      subject: "Tindak Pidana Perjudian Konvensional & Siber",
      sanction: "Pidana penjara maksimal 10 tahun atau denda materiil",
      detail: "Menjerat penyelenggara, fasilitator, penyedia tempat/server, serta pihak yang menjadikan permainan judi sebagai mata pencaharian."
    },
    {
      title: "Pasal 27 Ayat (2) UU ITE (UU No. 1/2024)",
      subject: "Distribusi Konten Muatan Perjudian",
      sanction: "Pidana penjara hingga 10 tahun dan denda hingga Rp10 Miliar",
      detail: "Melarang setiap orang yang dengan sengaja mentransmisikan, mendistribusikan, atau membuat dapat diaksesnya dokumen elektronik berkonten perjudian."
    },
    {
      title: "UU No. 8 Tahun 2010 (TPPU)",
      subject: "Pencegahan & Pemberantasan Tindak Pidana Pencucian Uang",
      sanction: "Pembekuan aset seketika & pemidanaan rekening penampung",
      detail: "Instrumen kunci untuk memblokir rekening perbankan, rekening 'mule', dan dompet digital (e-wallet) penampung aliran dana haram sindikat."
    }
  ],
  works: [
    {
      id: "eddflux",
      name: "eddflux.com",
      domain: "eddflux.com",
      hasUrl: true,
      url: "https://eddflux.com",
      category: "Platform Digital & Analisis Data",
      year: "2024 - 2026",
      summary: "Infrastruktur analitik digital modern untuk efisiensi aliran data, pemetaan sistem, dan optimalisasi arsitektur web.",
      description: "eddflux.com dibangun sebagai wadah eksperimentasi dan implementasi alur data terpadu (flux) yang transparan, terukur, dan aman. Mengedepankan ketahanan sistem, pengolahan data real-time, serta antarmuka intuitif untuk kebutuhan transformasi digital.",
      highlights: [
        "Arsitektur data terdistribusi dengan pemantauan performa real-time",
        "Pilar keamanan privasi dan audit trail transaksi informasi",
        "Desain antarmuka minimalis dengan responsivitas tinggi"
      ],
      role: "Inisiator, Perancang Sistem & Legal Compliance",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Data Pipeline", "Cloud Infra"],
      status: "Aktif"
    },
    {
      id: "ternaku",
      name: "ternaku.id",
      domain: "ternaku.id",
      hasUrl: true,
      url: "https://ternaku.id",
      category: "Agritech & Pemberdayaan Ekonomi Riil",
      year: "2023 - 2026",
      summary: "Platform digitalisasi peternakan nusantara untuk menghubungkan peternak lokal dengan manajemen bibit, pakan, dan pasar riil.",
      description: "ternaku.id lahir dari kepedulian terhadap kemandirian ekonomi masyarakat. Sebagai antitesis terhadap ilusi kekayaan instan judi online, platform ini mengarahkan potensi pemuda dan masyarakat ke sektor riil yang nyata: peternakan presisi, investasi ternak terpercaya, dan rantai pasok halal berkelanjutan.",
      highlights: [
        "Pencatatan siklus kesehatan dan pertumbuhan hewan ternak",
        "Transparansi akad bagi hasil berbasis kepatuhan hukum perdata",
        "Edukasi investasi riil yang aman dari jerat penipuan skema piramida"
      ],
      role: "Founder, Regulasi Kemitraan & Tata Kelola Hukum",
      techStack: ["React", "Mobile Web App", "PostgreSQL", "Fintech Compliance", "IoT Gateway"],
      status: "Aktif"
    }
  ] as ProjectWork[],
  documentations: [
    {
      id: "doc-1",
      category: "Modus Kejahatan",
      title: "Anatomi Algoritma 'Gacor' Palsu & Skema Manipulasi Depo-WD",
      date: "Oktober 2024",
      summary: "Investigasi mekanisme backend situs judol yang sengaja disetel memberikan kemenangan semu di awal (settingan RTP semu) guna memicu hormon dopamin dan keterikatan adiksi korban.",
      legalBasis: "Pasal 378 KUHP (Penipuan) & Pasal 28 ayat (1) UU ITE (Penyebaran Berita Bohong Merugikan Konsumen)",
      keyPoints: [
        "RTP (Return to Player) yang diklaim '98%' diatur manual melalui dashboard admin bandar luar negeri",
        "Fase 'kunci kemenangan': saat korban mencoba withdraw nominal besar, akun dibekukan dengan dalih 'kesalahan teknis' atau 'pelanggaran IP'",
        "Koneksi terselubung dengan pinjol ilegal (peer-to-peer non-OJK) untuk memeras sisa aset keluarga korban"
      ],
      actionRecommendation: "Dokumentasikan rekaman layar transaksi, riwayat mutasi bank, dan segera ajukan laporan pemblokiran sebelum saldo dipindahkan."
    },
    {
      id: "doc-2",
      category: "Investigasi",
      title: "Pelacakan Rekening Mule (Penampung) & Penyamaran Dompet Digital",
      date: "Desember 2024",
      summary: "Analisis modus sindikat yang menyewa buku tabungan masyarakat rentan dan menggunakan e-wallet tier bawah untuk menampung ratusan miliar rupiah per hari.",
      legalBasis: "UU Nomor 8 Tahun 2010 Pasal 3 & 4 (Tindak Pidana Pencucian Uang)",
      keyPoints: [
        "Sindikat menargetkan pelajar dan warga desa untuk 'jual-beli rekening' seharga Rp500 ribu - Rp1 juta",
        "Setiap rekening mule hanya dipakai aktif selama 3-7 hari sebelum dibuang atau diganti nomor rekening baru",
        "Pengalihan dana cepat ke cryptocurrency dan transfer internasional lintas yurisdiksi"
      ],
      actionRecommendation: "Edukasi keluarga agar tidak pernah meminjamkan atau memperjualbelikan KTP, rekening tabungan, maupun akun e-wallet kepada orang lain."
    },
    {
      id: "doc-3",
      category: "Edukasi Hukum",
      title: "Jerat Hukum Bagi Influencer, Brand Ambassador, & Promotor Judol",
      date: "Maret 2025",
      summary: "Kajian komprehensif penegakan hukum terhadap promosi terselubung di media sosial (Instagram, TikTok, YouTube, live streaming games).",
      legalBasis: "Pasal 27 ayat (2) jo. Pasal 45 ayat (3) UU ITE dengan ancaman 10 tahun penjara",
      keyPoints: [
        "Alibi promotor yang mengaku 'tidak tahu itu judi melainkan game online' telah gugur di banyak putusan pengadilan",
        "Tangkapan layar story, link bio, dan bukti transfer fee endorse merupakan alat bukti elektronik yang sah (Pasal 5 UU ITE)",
        "Sanksi pidana mengintai promotor skala mikro (nano-influencer) hingga selebritas ternama tanpa diskriminasi"
      ],
      actionRecommendation: "Warga berhak melaporkan link profil akun medsos promotor ke kanal resmi patroli siber atau lewat formulir di website ini."
    },
    {
      id: "doc-4",
      category: "Alur Penindakan",
      title: "Standard Operating Procedure (SOP) Pemblokiran Situs & Pembekuan Rekening",
      date: "Juni 2025",
      summary: "Panduan taktis bagi korban dan masyarakat umum dalam menyampaikan laporan yang valid, terstruktur, dan cepat ditindaklanjuti regulator.",
      legalBasis: "Instruksi Presiden Satgas Pemberantasan Judi Daring & Surat Edaran OJK Terkait Rekening Terindikasi Tindak Pidana",
      keyPoints: [
        "Pengumpulan bukti mutasi bank (nama pemilik rekening, bank tujuan, jam transfer, referensi)",
        "Pengarsipan alamat domain URL asli dan IP address server penyelenggara",
        "Tembusan laporan simultan ke Bareskrim Siber, Komdigi (Aduan Konten), dan Bank Terkait untuk freeze saldo"
      ],
      actionRecommendation: "Gunakan generator formulir laporan di bawah untuk mendapatkan draf formal berkekuatan hukum yang siap dikirim."
    }
  ] as DocItem[]
};
