import { TranslationDictionary } from "./types";

export const idTranslations: TranslationDictionary = {
  meta: {
    title: "Arya.dev | Portfolio Full-Stack Developer",
    description:
      "Portfolio profesional Arya — Full-Stack Developer yang fokus pada pengembangan aplikasi web performa tinggi, arsitektur frontend modern, dan sistem backend yang tangguh.",
  },
  nav: {
    home: "Beranda",
    projects: "Proyek",
    about: "Tentang",
    skills: "Keahlian",
    experience: "Pengalaman",
    contact: "Kontak",
    cta: "Konsultasi",
    mobileTitle: "Navigasi",
    mobileTagline: "Tersedia untuk proyek baru",
    languageAriaLabel: "Pilih bahasa tampilan",
  },
  hero: {
    role: "Full-Stack Developer",
    location: "Indonesia",
    headlineBefore: "Membangun produk digital yang memecahkan ",
    headlineHighlight: "masalah nyata.",
    subHighlight: "Dari ide hingga deployment.",
    description:
      "Saya mengembangkan aplikasi web dengan memadukan antarmuka yang intuitif, sistem backend yang andal, dan rekayasa perangkat lunak yang praktis. Berfokus pada performa, aksesibilitas, dan nilai bisnis nyata.",
    primaryCta: "Lihat Proyek Pilihan",
    secondaryCta: "Hubungi Saya",
    floatingCards: {
      frontend: {
        label: "Frontend Engineering",
        sublabel: "Next.js, React & TypeScript",
      },
      backend: {
        label: "Backend Services",
        sublabel: "Node.js & Laravel REST API",
      },
      database: {
        label: "Data Persistence",
        sublabel: "Skema PostgreSQL & MySQL",
      },
      deployment: {
        label: "Production Ready",
        sublabel: "Teruji, Andal & Skalabel",
      },
    },
  },
  projects: {
    eyebrow: "01. Proyek Pilihan",
    titleBefore: "Karya rekayasa dengan ",
    titleHighlight: "tujuan nyata.",
    description:
      "Aplikasi web produksi yang dibangun untuk menjawab tantangan operasional spesifik — mulai dari otomatisasi antrean klinik medis, operasional lounge F&B dengan transaksi cepat, hingga portal presensi SDM korporat.",
    challengeLabel: "Tantangan & Konteks",
    solutionLabel: "Solusi Rekayasa",
    roleLabel: "Peran & Kontribusi Saya",
    liveDemo: "Demo Langsung",
    repository: "Repositori",
    deepDiveTitle: "Ingin meninjau arsitektur atau studi kasus lebih lanjut?",
    deepDiveDesc:
      "Setiap sistem memiliki diagram alur kustom, skema database, dan rincian kebutuhan teknis yang siap dibahas dalam sesi diskusi proyek.",
    deepDiveCta: "Diskusikan Kebutuhan Teknis →",
    items: {
      "klinik-firdaus-scheduling": {
        slug: "klinik-firdaus-scheduling",
        title: "Sistem Penjadwalan Poli Gigi Klinik Firdaus",
        category: "Kesehatan & Manajemen Antrean",
        tagline: "Mengoptimalkan jadwal dokter dan antrean pasien poli gigi",
        problem:
          "Pencatatan janji temu secara manual menimbulkan penumpukan antrean fisik, bentrok ketersediaan dokter gigi, dan kesulitan melacak riwayat kunjungan pasien.",
        solution:
          "Membangun portal penjadwalan terintegrasi dengan alokasi kuota per sesi dokter secara dinamis, konfirmasi janji temu otomatis, dan dashboard operasional klinik yang mudah digunakan staf.",
        role: "Full-Stack Developer (Desain Antarmuka, Skema Database, Integrasi API)",
        status: "Selesai / Sistem Klien",
      },
      "bluesea-lounge-pos": {
        slug: "bluesea-lounge-pos",
        title: "Bluesea Lounge POS & Inventory",
        category: "F&B • Point of Sale",
        tagline: "Pencatatan pesanan cepat dan pemantauan stok operasional lounge",
        problem:
          "Sistem tiket kertas pada jam sibuk memicu keterlambatan penyajian pesanan, selisih perhitungan stok bahan, dan rekonsiliasi kasir harian yang memakan waktu lama.",
        solution:
          "Mengembangkan aplikasi web POS responsif dengan pemetaan meja pelanggan, kalkulasi tagihan fleksibel, cetak struk instan, dan pelaporan pergantian shift kasir harian secara otomatis.",
        role: "Full-Stack Developer (Arsitektur Frontend & Layanan Backend)",
        status: "Selesai / Sistem Internal",
      },
      "hr-presensi-portal": {
        slug: "hr-presensi-portal",
        title: "Sistem Presensi & SDM (Portal Kehadiran)",
        category: "Perusahaan • Manajemen SDM",
        tagline: "Verifikasi kehadiran berbasis geolokasi dan administrasi staf",
        problem:
          "Karyawan di lapangan dan cabang yang tersebar menyulitkan penggunaan mesin absensi fisik, memperlambat persetujuan cuti, serta merepotkan rekap data penggajian.",
        solution:
          "Merancang portal web mobile-friendly dengan validasi koordinat GPS saat check-in, penjadwalan shift kerja bertingkat, alur persetujuan izin berjenjang, dan ekspor rekap absensi siap audit.",
        role: "Full-Stack Developer (Arsitektur Laravel, Desain Database & UI)",
        status: "Selesai / Portal Korporat",
      },
    },
  },
  about: {
    eyebrow: "02. Filosofi & Latar Belakang",
    titleBefore: "Menghubungkan antarmuka elegan dengan ",
    titleHighlight: "backend yang tangguh.",
    description:
      "Pendekatan menyeluruh dalam pengembangan perangkat lunak, memandang produk digital sebagai ekosistem hidup yang membutuhkan keselarasan antara desain, logika kode, dan keandalan sistem.",
    p1: {
      greeting: "Halo! Saya ",
      name: "Arya",
      suffix:
        ", seorang Full-Stack Web Developer yang berdedikasi membangun aplikasi web end-to-end yang menjawab kebutuhan bisnis dan operasional nyata.",
    },
    p2: "Karya saya mencakup seluruh siklus pengembangan aplikasi. Mulai dari merancang antarmuka pengguna yang responsif dan interaktif dengan Next.js dan Tailwind CSS, hingga membangun arsitektur database relasional serta REST API yang aman menggunakan Node.js dan Laravel. Saya percaya bahwa software engineering terbaik tercapai ketika kemudahan antarmuka bertemu dengan keandalan backend.",
    p3: "Alih-alih memisahkan dunia desain visual dan logika server, saya menerapkan pola pikir end-to-end pada setiap proyek: bagaimana aliran data diproses, seberapa efisien indeks database bekerja, dan bagaimana aplikasi tetap terasa instan dan menyenangkan bagi pengguna akhir.",
    focusBadge: "Fokus Rekayasa Saat Ini",
    focusText:
      "Memperdalam arsitektur React Server Components, optimalisasi API konkurensi tinggi, deployment terisolasi dengan Docker, serta kepatuhan standar aksesibilitas web modern (WCAG 2.2).",
    principles: [
      {
        title: "Antarmuka yang Berorientasi Pengguna",
        description:
          "Desain tidak hanya sekadar visual menarik — aplikasi harus cepat diakses, memiliki hierarki navigasi yang jelas, serta memberikan umpan balik langsung pada setiap interaksi.",
      },
      {
        title: "Arsitektur Sistem yang Andal",
        description:
          "Membangun backend dengan normalisasi database yang cermat, kontrak API yang konsisten, dan validasi data berlapis guna menjaga integritas sistem saat beban kerja meningkat.",
      },
      {
        title: "Rekayasa yang Pragmatis",
        description:
          "Menghindari kompleksitas berlebihan dan lebih memprioritaskan fondasi teknologi yang stabil, teruji, mudah dirawat, serta terbukti memberikan nilai nyata jangka panjang.",
      },
    ],
  },
  skills: {
    eyebrow: "03. Kapabilitas Teknis",
    titleBefore: "Rangkaian teknologi modern untuk ",
    titleHighlight: "eksekusi full-stack.",
    description:
      "Keahlian terverifikasi yang digunakan secara aktif dalam proyek klien nyata, pengembangan layanan API, serta antarmuka web modern yang cepat dan aman.",
    stackFocus: "Fokus Teknologi",
    coreSpecialties: "Keahlian Utama",
    categoryTitles: {
      "Frontend Engineering": {
        title: "Frontend Engineering",
        description:
          "Membangun antarmuka pengguna yang cepat, mudah diakses, dan responsif dengan standar modern.",
      },
      "Backend & Systems": {
        title: "Backend & Arsitektur Sistem",
        description:
          "Merancang REST API yang terstruktur, logika bisnis yang aman, dan layanan server yang tangguh.",
      },
      "Database & Data Modeling": {
        title: "Database & Pemodelan Data",
        description:
          "Merancang skema relasional, mengoptimalkan kueri, dan memastikan integritas data tetap terjaga.",
      },
      "Tools & DevOps Workflow": {
        title: "Alat & Alur Kerja DevOps",
        description:
          "Menjamin standar kualitas kode, version control yang rapi, dan kemudahan proses deployment.",
      },
    },
  },
  experience: {
    eyebrow: "04. Jejak Perjalanan",
    titleBefore: "Perjalanan dalam dedikasi ",
    titleHighlight: "rekayasa perangkat lunak.",
    description:
      "Fase-fase utama, keberhasilan rilis proyek, dan perkembangan keahlian teknis yang membentuk kemampuan saya sebagai Full-Stack Developer yang dapat diandalkan.",
    highlightsLabel: "Pencapaian & Dampak Utama:",
    items: [
      {
        period: "2024 — Sekarang",
        role: "Full-Stack Web Developer",
        organization: "Proyek Klien & Independen",
        badge: "Aktif",
        description:
          "Mengembangkan aplikasi web end-to-end untuk kebutuhan klien, berfokus pada keandalan logika backend, kualitas antarmuka pengguna, dan deployment produksi.",
        contributions: [
          "Merancang dan meluncurkan sistem manajemen antrean dan penjadwalan dokter untuk Poli Gigi Klinik Firdaus.",
          "Membangun aplikasi web POS dan pemantauan inventori bahan baku untuk operasional harian Bluesea Lounge.",
          "Mengembangkan portal presensi SDM terverifikasi lokasi GPS dan rekap kehadiran otomatis dengan Laravel.",
        ],
      },
      {
        period: "2023 — 2024",
        role: "Eksplorasi & Arsitektur Full-Stack Modern",
        organization: "Peningkatan Keahlian Mendalam",
        badge: "Milestone",
        description:
          "Penerapan praktis standar web modern, bertransisi ke Next.js App Router, type-safety TypeScript yang ketat, dan arsitektur REST API yang rapi.",
        contributions: [
          "Menguasai pola React Server Components, pemisahan data client-server, dan strategi rendering modern.",
          "Menerapkan pengetikan TypeScript yang ketat di seluruh lapisan integrasi frontend dan backend.",
          "Merefaktor arsitektur monolitik PHP warisan menjadi pola MVC yang bersih dan mudah dikembangkan dengan Laravel.",
        ],
      },
      {
        period: "2022 — 2023",
        role: "Fondasi Ilmu Komputer & Rekayasa Web",
        organization: "Eksplorasi Akademik & Mandiri",
        badge: "Fondasi",
        description:
          "Membangun pemahaman mendalam tentang prinsip inti komputasi, database relasional, struktur data, dan teknologi web.",
        contributions: [
          "Mendalami teknik normalisasi database, optimasi indeks relasional, dan kueri SQL.",
          "Membangun tata letak web responsif dan semantik menggunakan HTML5 dan CSS modern.",
          "Menerapkan dasar-dasar algoritma dan alur kolaborasi version control dengan Git dan GitHub.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "05. Hubungi Saya",
    titleBefore: "Punya ide proyek? Mari ciptakan ",
    titleHighlight: "solusi yang bermakna.",
    description:
      "Baik Anda memiliki rencana proyek web baru, butuh bantuan merancang arsitektur aplikasi, atau ingin menjalin kolaborasi teknis, kotak masuk saya selalu terbuka.",
    directCommBadge: "Komunikasi Langsung",
    directTitle: "Kirim pesan langsung melalui email",
    directDesc:
      "Saya biasanya membalas dalam waktu 24 jam. Jangan ragu menyertakan ringkasan singkat ide proyek, preferensi teknologi, dan target jadwal Anda.",
    emailLabel: "Alamat Email",
    copyBtn: "Salin Alamat",
    copiedBtn: "Berhasil Disalin!",
    launchEmailBtn: "Buka Aplikasi Email",
    networksHeader: "Jaringan Profesional",
    githubTitle: "Profil GitHub",
    githubDesc: "Tinjau repositori dan riwayat commit kode",
    linkedinTitle: "Jejaring LinkedIn",
    linkedinDesc: "Latar belakang profesional dan koneksi",
    statusHeader: "Status Ketersediaan",
    statusTitle: "Tersedia untuk Proyek Pilihan",
    statusDesc:
      "Terbuka untuk kontrak rekayasa full-stack, pengembangan aplikasi web freelance, dan konsultasi teknis.",
  },
  footer: {
    brandDesc:
      "Full-Stack Developer yang merancang sistem web andal, antarmuka intuitif, dan arsitektur bersih. Dari ide hingga siap produksi.",
    navHeader: "Navigasi",
    statusHeader: "Status Terkini",
    backToTop: "Kembali ke Atas",
    copyrightText: "Hak cipta dilindungi undang-undang.",
    tagline: "Editorial Brutalism • Portfolio Modern",
  },
};
