# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Personal Portfolio Website — Full-Stack Developer

**Versi:** 1.0  
**Status:** Ready for Development  
**Jenis Produk:** Personal Portfolio Website  
**Target Pengguna:** Recruiter, calon klien, developer, dan komunitas teknologi  
**Bahasa Utama:** Bahasa Inggris untuk konten website, dengan dokumentasi pengembangan dalam Bahasa Indonesia  
**Platform:** Responsive Web Application

---

# 1. Product Overview

## 1.1 Deskripsi Produk

Personal Portfolio Website merupakan website profesional yang digunakan untuk memperkenalkan pemilik portfolio sebagai Full-Stack Developer, menampilkan proyek yang pernah dikerjakan, menjelaskan kemampuan teknis, serta menyediakan sarana komunikasi bagi recruiter dan calon klien.

Website harus memiliki identitas visual yang kuat, modern, interaktif, dan profesional. Referensi utama desain adalah website Ailene yang diberikan oleh pengguna melalui beberapa screenshot.

Desain mengadaptasi karakter visual referensi tersebut, meliputi:

- Typography berukuran besar dan tebal.
- Kombinasi background hijau gelap dan off-white.
- Aksen warna lime yang mencolok.
- Grid background dekoratif.
- Kartu dengan outline tegas dan offset shadow.
- Elemen visual mengambang atau floating cards.
- Layout editorial dengan whitespace yang cukup.
- Animasi scroll dan hover yang halus.
- Peralihan visual antara section dark mode dan light mode.

Website tidak boleh menjadi salinan langsung website Ailene. Implementasi harus memiliki identitas, konten, branding, dan komposisi visual yang orisinal untuk personal portfolio developer.

## 1.2 Product Vision

Membangun personal portfolio yang tidak hanya berfungsi sebagai CV online, tetapi juga sebagai representasi kemampuan pemiliknya dalam merancang dan mengembangkan produk digital.

Website harus memberikan kesan bahwa pemilik portfolio memahami proses pengembangan aplikasi dari frontend, backend, integrasi database, hingga deployment.

## 1.3 Product Goals

1. Menampilkan identitas profesional sebagai Full-Stack Developer.
2. Memperlihatkan proyek nyata dan kontribusi pemilik portfolio.
3. Menyajikan skill teknis dalam format yang mudah dipahami.
4. Meningkatkan peluang mendapatkan pekerjaan, magang, freelance, dan kolaborasi.
5. Memberikan pengalaman browsing yang menarik, responsif, dan mudah digunakan.
6. Menjadi website personal yang dapat dikembangkan seiring bertambahnya pengalaman dan proyek.

## 1.4 Success Metrics

Target awal setelah website dipublikasikan:

- Seluruh section utama dapat diakses tanpa error.
- Semua navigasi internal mengarah ke section yang benar.
- Website berfungsi pada desktop, tablet, dan mobile.
- Seluruh tautan yang ditampilkan memiliki tujuan yang valid.
- Tidak terdapat horizontal overflow pada viewport mobile.
- Tidak terdapat error runtime yang menghalangi penggunaan website.
- Target Lighthouse Performance minimal 90 dan Accessibility minimal 90 pada pengujian production, jika memungkinkan.
- Pengunjung dapat menemukan proyek dan informasi kontak tanpa kesulitan.

Nilai Lighthouse merupakan target kualitas, bukan jaminan hasil yang sama pada seluruh perangkat dan kondisi jaringan.

---

# 2. Target Audience

## 2.1 Recruiter dan Hiring Manager

Membutuhkan gambaran cepat mengenai identitas developer, kemampuan teknis, pengalaman, dan proyek yang pernah dikerjakan.

## 2.2 Calon Klien

Membutuhkan bukti bahwa pemilik portfolio mampu membangun website atau aplikasi sesuai kebutuhan bisnis.

## 2.3 Developer dan Komunitas Teknologi

Membutuhkan informasi teknis mengenai proyek, stack yang digunakan, repository, dan pendekatan pengembangan.

## 2.4 User Journey Utama

1. Pengunjung membuka website.
2. Pengunjung memahami identitas dan spesialisasi developer melalui hero section.
3. Pengunjung melihat proyek unggulan.
4. Pengunjung mempelajari skill, pengalaman, dan kontribusi developer.
5. Pengunjung membuka repository atau demo proyek jika tersedia.
6. Pengunjung menghubungi developer melalui kanal komunikasi yang disediakan.

---

# 3. Scope dan Prioritas

## 3.1 In Scope — MVP

- Responsive personal portfolio.
- Navbar desktop dan mobile.
- Hero section dengan identitas developer.
- Selected projects.
- About me.
- Technical skills dan tech stack.
- Experience atau development journey.
- Contact section.
- Footer dan social links.
- Scroll reveal dan hover interactions.
- Floating decorative cards pada hero.
- Dark dan light section composition.
- SEO dasar.
- Accessibility dasar.
- Optimasi performa.
- Deployment-ready configuration.

## 3.2 Out of Scope — MVP

Fitur berikut tidak diperlukan kecuali diminta secara terpisah:

- Admin dashboard.
- CMS atau database untuk mengelola konten.
- Sistem autentikasi dan registrasi pengguna.
- Blog dengan backend.
- Sistem komentar.
- Sistem analitik yang memerlukan database khusus.
- Backend API khusus untuk portfolio.
- Form contact yang mengklaim berhasil mengirim pesan tanpa integrasi layanan pengiriman.
- Sistem pembayaran.
- Multibahasa otomatis.
- WebGL atau animasi 3D berat.

## 3.3 Prioritas Fitur

- **P0 — Must Have:** konten inti, navigasi, project showcase, responsive layout, contact links, dan tidak ada error kritis.
- **P1 — Should Have:** scroll reveal, floating cards, hover animations, SEO, serta optimasi gambar dan font.
- **P2 — Nice to Have:** cursor effects, transisi antarseksi yang lebih kompleks, dan detail motion eksperimental.

Fitur P0 harus selesai sebelum P1 dan P2 disempurnakan.

---

# 4. Design System

## 4.1 Visual Direction

Nama arah desain: **Editorial Brutalism × Modern Developer Portfolio**.

Karakter desain:

- Bold, tetapi tidak berantakan.
- Minimalis, tetapi tidak terasa kosong.
- Interaktif, tetapi tidak mengganggu pembacaan.
- Profesional, tetapi tetap memiliki karakter personal.
- Terinspirasi dari referensi Ailene tanpa menyalin identitas brand tersebut.

## 4.2 Color Palette

| Token | Hex | Penggunaan |
|---|---|---|
| Forest Green | #102A21 | Hero, contact, footer |
| Neon Lime | #D4F52B | CTA, highlight, elemen aktif |
| Off-White | #F3F5ED | Background section terang |
| Near Black | #111713 | Teks dan border |
| Muted Green | #C5D4CA | Teks sekunder di background gelap |
| Soft Border | #D6DDD6 | Border dan divider di section terang |
| White | #FFFFFF | Surface kartu dan elemen kontras |

Warna harus dikelola menggunakan design tokens agar konsisten di seluruh komponen.

Neon lime digunakan secara selektif sebagai aksen, bukan sebagai warna dominan pada seluruh halaman.

## 4.3 Typography

Gunakan sans-serif modern yang memiliki karakter kuat, seperti Geist Sans atau font sans-serif sejenis.

Ketentuan:

- Headline menggunakan ukuran besar, weight tebal, dan line-height relatif rapat.
- Body text harus mudah dibaca dan memiliki kontras memadai.
- Label kecil dapat menggunakan uppercase atau letter spacing secukupnya.
- Kata penting pada headline dapat diberi highlight lime dengan sedikit offset shadow.
- Maksimal gunakan dua keluarga font utama, kecuali terdapat kebutuhan visual yang jelas.

Ukuran harus menggunakan pendekatan responsive typography, seperti `clamp()`.

## 4.4 Layout dan Spacing

- Gunakan container dengan lebar maksimum sekitar 1200–1320 px.
- Gunakan grid untuk layout desktop.
- Gunakan sistem spacing yang konsisten.
- Berikan whitespace yang cukup di antara section.
- Hindari penggunaan terlalu banyak kartu dalam satu viewport.
- Border dan shadow harus membantu hierarki visual, bukan membuat halaman terlihat berat.

## 4.5 Card Design

Kartu utama memiliki karakter:

- Border hitam sekitar 1–2 px.
- Background putih atau lime sesuai konteks.
- Corner radius sekitar 12–20 px.
- Offset shadow sekitar 4–7 px.
- Hover lift dengan perpindahan kecil.
- Transisi border dan shadow yang halus.

Hindari penggunaan glassmorphism berlebihan karena tidak sesuai dengan karakter referensi.

---

# 5. Information Architecture

Urutan halaman utama:

1. Navbar.
2. Hero.
3. Selected Projects.
4. About Me.
5. Technical Skills.
6. Experience and Journey.
7. Contact.
8. Footer.

Seluruh halaman merupakan satu halaman utama dengan navigasi anchor, kecuali jika implementasi membutuhkan halaman detail proyek tambahan.

ID section yang direkomendasikan:

- `home`
- `projects`
- `about`
- `skills`
- `experience`
- `contact`

Navigasi harus menggunakan ID yang konsisten dengan section terkait.

---

# 6. Functional Requirements

## 6.1 Navbar

**ID:** FR-01  
**Priority:** P0

Navbar menampilkan:

- Logo atau nama brand personal.
- Home.
- Projects.
- About.
- Skills.
- Experience.
- Contact.
- CTA utama seperti "Let's Talk" atau "Contact Me".

Behavior:

- Klik menu akan melakukan smooth scrolling menuju section terkait.
- Navbar memiliki tampilan yang sesuai dengan background section.
- Navbar harus tetap terbaca ketika berada di atas hero maupun section terang.
- Menu mobile menggunakan tombol hamburger.
- Tombol hamburger membuka dan menutup mobile navigation.
- Mobile navigation dapat ditutup setelah pengguna memilih menu.
- State menu harus dapat dioperasikan dengan keyboard.
- Navbar tidak boleh menutupi heading section ketika navigasi anchor digunakan.

Acceptance Criteria:

- Semua menu mengarah ke section yang benar.
- Mobile navigation berfungsi pada layar kecil.
- Tidak terdapat menu yang saling bertumpuk atau keluar dari viewport.
- Fokus keyboard dapat terlihat.

## 6.2 Hero Section

**ID:** FR-02  
**Priority:** P0

Hero merupakan bagian paling penting dari website.

Konten:

- Eyebrow label yang menjelaskan spesialisasi developer.
- Headline utama.
- Deskripsi singkat.
- Primary CTA menuju projects.
- Secondary CTA menuju contact atau about.
- Elemen dekoratif floating cards.
- Background grid.

Contoh headline:

"I build digital products that solve real problems."

Contoh highlight:

"From idea to deployment."

Contoh deskripsi:

"I develop web applications by combining thoughtful interfaces, reliable backend systems, and practical engineering."

Semua teks merupakan konten awal yang dapat disesuaikan dengan identitas dan pengalaman aktual pemilik portfolio.

Floating cards dapat menampilkan:

- Frontend / UI Engineering.
- Backend / API Development.
- Database / System Design.
- Deployment / Production.

Behavior:

- Headline dan CTA muncul dengan animasi masuk yang ringan.
- Floating cards memiliki gerakan vertikal kecil dan tidak sinkron.
- Background grid bersifat dekoratif.
- Garis dotted dapat menghubungkan kartu.
- CTA projects melakukan scroll ke project showcase.
- CTA contact mengarah ke contact section atau email yang valid.

Acceptance Criteria:

- Headline tetap terbaca pada semua ukuran layar.
- Floating cards tidak menutupi teks utama.
- Dekorasi tidak menyebabkan horizontal overflow.
- Animasi tidak menghalangi interaksi.
- Pada mobile, komposisi hero dapat berubah menjadi satu kolom dan mengurangi jumlah dekorasi.

## 6.3 Selected Projects

**ID:** FR-03  
**Priority:** P0

Section ini menampilkan proyek terbaik yang pernah dikerjakan.

Setiap project card harus mendukung data berikut:

- Nama proyek.
- Kategori.
- Deskripsi masalah.
- Solusi yang dibangun.
- Kontribusi pemilik portfolio.
- Teknologi yang digunakan.
- Preview atau screenshot proyek.
- Repository URL jika tersedia.
- Live demo URL jika tersedia.
- Status proyek, jika relevan.

Contoh proyek yang dapat dipertimbangkan, jika masih sesuai dengan pengalaman aktual:

1. Sistem Penjadwalan Poli Gigi Klinik Firdaus.
2. Sistem Presensi atau SDM berbasis web.
3. Bluesea Lounge POS.
4. Proyek web lain yang benar-benar telah dikerjakan.

Jangan mengklaim seluruh proyek di atas sudah selesai atau dipublikasikan tanpa konfirmasi. Gunakan hanya proyek yang benar-benar ingin ditampilkan pemilik portfolio.

Behavior:

- Kartu memiliki hover animation.
- Screenshot tidak boleh mengalami distorsi rasio.
- Tombol repository dan demo hanya muncul jika URL valid.
- Seluruh project cards harus memiliki hierarki visual yang konsisten.
- Jika jumlah proyek bertambah, layout harus tetap teratur.

Acceptance Criteria:

- Minimal satu proyek dapat ditampilkan tanpa layout rusak.
- Link proyek terbuka menuju URL yang benar.
- Gambar memiliki alt text.
- Kartu dapat digunakan dengan keyboard.
- Tidak ada tombol yang sekadar dekoratif tetapi terlihat interaktif.

## 6.4 About Me

**ID:** FR-04  
**Priority:** P0

Section ini menjelaskan:

- Siapa pemilik portfolio.
- Fokus sebagai Full-Stack Developer.
- Minat dalam pengembangan web.
- Pendekatan terhadap pemecahan masalah.
- Nilai atau prinsip dalam pengembangan software.

Gunakan gaya editorial dengan headline besar, deskripsi ringkas, dan aksen visual.

Konten tidak boleh menggunakan klaim yang belum terverifikasi, seperti jumlah tahun pengalaman, jumlah klien, atau pencapaian profesional tertentu.

Acceptance Criteria:

- Informasi mudah dipindai.
- Konten tidak terlalu panjang.
- Layout tetap terbaca pada mobile.
- Konten mencerminkan profil aktual pemilik portfolio.

## 6.5 Technical Skills

**ID:** FR-05  
**Priority:** P0

Skill ditampilkan dalam beberapa kategori:

**Frontend**
- HTML.
- CSS.
- JavaScript.
- TypeScript.
- React.
- Next.js.
- Tailwind CSS.

**Backend**
- Node.js.
- PHP.
- Laravel.
- REST API.

**Database**
- MySQL.
- PostgreSQL.

**Tools and Workflow**
- Git.
- GitHub.
- Docker.
- Deployment platforms.

Daftar ini merupakan kandidat awal, bukan pernyataan bahwa seluruh teknologi telah dikuasai. Hanya tampilkan teknologi yang benar-benar pernah digunakan atau sedang dipelajari, dengan label yang jujur.

Behavior:

- Kategori ditampilkan menggunakan kartu atau grouped lists.
- Ikon dapat digunakan jika membantu pengenalan teknologi.
- Hover effects harus ringan.
- Hindari progress bar skill yang memberikan angka kompetensi tanpa dasar objektif.

Acceptance Criteria:

- Skill dikelompokkan secara logis.
- Tidak terdapat duplikasi berlebihan.
- Tampilan tidak bergantung pada hover untuk menampilkan informasi penting.

## 6.6 Experience and Journey

**ID:** FR-06  
**Priority:** P1

Menampilkan pengalaman relevan, pendidikan, internship, dan milestone pengembangan diri.

Setiap item dapat berisi:

- Periode.
- Nama organisasi atau proyek.
- Posisi atau peran.
- Deskripsi kontribusi.
- Teknologi yang digunakan.

Jika belum memiliki pengalaman kerja profesional, section dapat dinamai "My Journey" dan berfokus pada perjalanan belajar serta proyek.

Acceptance Criteria:

- Informasi diurutkan secara kronologis.
- Pengalaman yang belum dikonfirmasi tidak boleh dibuat-buat.
- Timeline responsif dan tetap terbaca pada mobile.

## 6.7 Contact Section

**ID:** FR-07  
**Priority:** P0

Section contact harus memiliki CTA yang jelas untuk menghubungi pemilik portfolio.

Konten:

- Headline ajakan kolaborasi.
- Email.
- GitHub.
- LinkedIn.
- Kanal sosial lain jika relevan.

Contoh headline:

"Have an idea? Let's build something meaningful."

Behavior:

- Email menggunakan `mailto:` dengan alamat yang benar.
- Social links membuka tujuan yang benar.
- Link eksternal harus menggunakan konfigurasi keamanan yang sesuai.
- Jika tersedia tombol copy email, tampilkan feedback setelah aksi copy berhasil.

Tidak perlu membangun backend contact form untuk MVP.

Acceptance Criteria:

- Semua tautan komunikasi valid.
- Tidak ada alamat email atau akun sosial yang dikarang.
- CTA dapat digunakan pada perangkat desktop dan mobile.

## 6.8 Footer

**ID:** FR-08  
**Priority:** P0

Footer berisi:

- Branding.
- Tahun copyright yang dinamis.
- Link navigasi penting.
- Social links.
- Back to top.

Acceptance Criteria:

- Tidak ada tautan kosong.
- Copyright year diperbarui secara otomatis.
- Back to top berfungsi.

---

# 7. Motion and Interaction Requirements

**ID:** FR-09  
**Priority:** P1

Animasi harus meningkatkan pengalaman, bukan mengganggu konten.

## 7.1 Scroll Reveal

- Heading dan paragraf dapat menggunakan fade-up.
- Project cards dapat muncul dengan stagger ringan.
- Animasi dipicu ketika elemen memasuki viewport.
- Elemen tidak boleh tetap tersembunyi jika animasi gagal.

## 7.2 Hover Effects

- Card dapat bergerak naik beberapa piksel.
- Shadow berubah secara halus.
- CTA memiliki perubahan warna atau posisi ikon.
- Transisi menggunakan durasi singkat dan easing yang natural.

## 7.3 Floating Elements

- Floating cards bergerak dengan amplitudo kecil.
- Animasi tidak boleh membuat pengguna kehilangan fokus.
- Gerakan harus nonessential; semua informasi tetap tersedia tanpa animasi.

## 7.4 Reduced Motion

Jika pengguna mengaktifkan `prefers-reduced-motion: reduce`:

- Floating animation dinonaktifkan atau diminimalkan.
- Scroll reveal menggunakan transisi minimal.
- Smooth scrolling dinonaktifkan jika diperlukan.
- Informasi dan fungsi website tetap tersedia.

## 7.5 Motion Performance

- Hindari animasi layout yang menyebabkan reflow terus-menerus.
- Prioritaskan `transform` dan `opacity`.
- Hindari animasi berat yang memerlukan banyak JavaScript.
- Jangan menggunakan custom cursor sebagai pengganti cursor standar pada interaksi penting.

---

# 8. Responsive Design Requirements

**ID:** NFR-01

Website harus mendukung viewport berikut sebagai baseline pengujian:

| Device | Lebar Acuan |
|---|---:|
| Mobile kecil | 320–375 px |
| Mobile besar | 390–430 px |
| Tablet | 768 px |
| Laptop | 1024–1440 px |
| Desktop besar | 1440 px ke atas |

Ketentuan:

- Tidak ada horizontal overflow.
- Headline menggunakan responsive typography.
- Grid desktop berubah menjadi satu kolom atau dua kolom sesuai kebutuhan.
- Floating cards dapat dipindahkan atau disembunyikan pada mobile.
- Tombol memiliki ukuran interaksi yang memadai.
- Navbar tidak bertumpuk.
- Gambar dan kartu mengikuti lebar container.
- Section spacing menyesuaikan ukuran viewport.
- Tidak ada konten penting yang hanya dapat diakses melalui hover.

---

# 9. Technology Stack and Architecture

## 9.1 Required Stack

- Next.js menggunakan App Router.
- TypeScript dengan strict type checking.
- Tailwind CSS.
- Motion for React untuk animasi, jika dibutuhkan.
- Lucide React untuk ikon.
- ESLint untuk linting.

Gunakan versi package yang stabil dan saling kompatibel pada saat implementasi. Jangan menggunakan versi atau API yang sudah deprecated.

## 9.2 Architecture Principles

- Gunakan React Server Components secara default.
- Gunakan Client Components hanya untuk state, event handlers, browser APIs, dan animasi interaktif yang memerlukannya.
- Pisahkan data proyek dari presentational components.
- Gunakan reusable components untuk navbar, buttons, project cards, section headings, dan footer.
- Hindari duplikasi markup yang tidak diperlukan.
- Gunakan semantic HTML.
- Jangan menambahkan backend atau database tanpa kebutuhan nyata.

## 9.3 Suggested Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── icon.tsx
│   └── opengraph-image.tsx
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   └── contact.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── section-heading.tsx
│   │   └── project-card.tsx
│   └── motion/
│       ├── reveal.tsx
│       └── floating-card.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
└── lib/
    └── utils.ts
```

Struktur dapat disesuaikan berdasarkan kebutuhan aktual. Jangan membuat file kosong hanya untuk mengikuti struktur di atas.

## 9.4 Content Configuration

Konten yang sering berubah harus mudah diedit.

Contoh data proyek:

```ts
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  image?: string;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
};
```

Gunakan data configuration untuk memisahkan konten portfolio dari komponen UI.

Jangan menampilkan tombol repository atau live demo ketika URL belum tersedia.

---

# 10. SEO and Accessibility

## 10.1 SEO Requirements

- Setiap halaman memiliki title dan meta description.
- Gunakan heading hierarchy yang benar.
- Gunakan metadata API Next.js.
- Tambahkan Open Graph metadata.
- Tambahkan favicon.
- Gunakan URL canonical setelah domain final tersedia.
- Pastikan website dapat diindeks jika memang dipublikasikan secara publik.
- Optimalkan alt text pada gambar.
- Hindari konten utama yang hanya dirender setelah interaksi client.

## 10.2 Accessibility Requirements

- Semantic HTML untuk navigation, main, section, dan footer.
- Semua tombol dan link dapat diakses melalui keyboard.
- Focus indicator harus terlihat.
- Gambar informatif memiliki alt text yang sesuai.
- Elemen dekoratif disembunyikan dari screen reader jika diperlukan.
- Warna teks dan background memiliki kontras yang memadai.
- Gunakan `aria-label` hanya ketika nama aksesibel belum jelas.
- Mobile menu harus mengumumkan state terbuka atau tertutup.
- Jangan menyampaikan informasi hanya melalui warna.

Target kualitas accessibility adalah WCAG 2.2 AA sejauh relevan untuk website ini.

---

# 11. Performance and Reliability

**ID:** NFR-02

Ketentuan:

- Gunakan `next/image` untuk gambar lokal atau remote yang dikonfigurasi dengan benar.
- Optimalkan ukuran dan format gambar.
- Hindari library yang tidak diperlukan.
- Hindari penggunaan video background berukuran besar.
- Batasi penggunaan Client Components.
- Hindari layout shift akibat gambar tanpa dimensi.
- Jangan memuat font eksternal berlebihan.
- Hindari animasi yang memicu layout thrashing.
- Pastikan website tetap berfungsi ketika JavaScript untuk animasi gagal dimuat, sejauh memungkinkan.

Target awal Core Web Vitals pada data lapangan, jika tersedia:

- LCP: maksimal 2,5 detik.
- INP: maksimal 200 ms.
- CLS: maksimal 0,1.

Nilai tersebut harus dievaluasi dalam kondisi pengukuran yang sesuai dan tidak boleh dianggap otomatis terpenuhi hanya karena build berhasil.

---

# 12. Content and Asset Requirements

Seluruh konten berikut harus dapat dikustomisasi sebelum deployment final:

- Nama personal atau brand.
- Professional headline.
- About description.
- Email.
- GitHub URL.
- LinkedIn URL.
- Foto profil jika digunakan.
- Project titles dan descriptions.
- Project screenshots.
- Repository dan live demo URLs.
- Skill list.
- Experience timeline.
- Social links.
- SEO title dan description.

Gunakan placeholder yang jelas untuk informasi yang belum tersedia.

Dilarang:

- Mengarang pengalaman kerja.
- Mengarang testimoni.
- Mengarang jumlah pengguna atau klien.
- Mengarang pencapaian bisnis.
- Menggunakan screenshot proyek orang lain seolah-olah merupakan hasil karya pemilik portfolio.
- Menampilkan status "available for hire" tanpa persetujuan pemilik portfolio.

---

# 13. Acceptance Criteria — Final Definition of Done

Website dapat dinyatakan selesai apabila seluruh kriteria P0 berikut terpenuhi.

## Functional

- [ ] Navbar bekerja pada desktop dan mobile.
- [ ] Semua anchor navigation menuju section yang benar.
- [ ] CTA hero bekerja.
- [ ] Project cards menampilkan informasi yang benar.
- [ ] Repository dan live demo links valid atau tidak ditampilkan.
- [ ] Contact links bekerja.
- [ ] Footer dan back-to-top bekerja.
- [ ] Tidak terdapat tombol utama yang tidak memiliki fungsi.

## Visual

- [ ] Hero menggunakan dark forest green.
- [ ] Section terang menggunakan off-white.
- [ ] Lime digunakan sebagai accent.
- [ ] Headline besar dan memiliki hierarki yang jelas.
- [ ] Grid background tidak mengganggu pembacaan.
- [ ] Card outline dan offset shadow konsisten.
- [ ] Visual tidak terlihat seperti salinan identik Ailene.
- [ ] Spacing konsisten pada seluruh section.

## Interaction

- [ ] Scroll reveal berjalan dengan benar.
- [ ] Hover effects tidak mengganggu klik.
- [ ] Floating cards tidak menutupi konten.
- [ ] Reduced-motion preference dihormati.
- [ ] Tidak ada animasi yang menyebabkan konten penting tidak terlihat.

## Responsive

- [ ] Tidak ada horizontal overflow pada viewport yang diuji.
- [ ] Tidak ada teks terpotong.
- [ ] Navbar mobile berfungsi.
- [ ] Layout cards menyesuaikan layar.
- [ ] CTA dapat digunakan pada mobile.
- [ ] Seluruh konten penting tersedia tanpa hover.

## Technical

- [ ] `npm run lint` berhasil jika script lint tersedia.
- [ ] `npx tsc --noEmit` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Tidak ada error runtime yang kritis.
- [ ] Tidak ada broken images.
- [ ] Metadata dasar tersedia.
- [ ] Tidak ada secret atau credential di source code.
- [ ] README menjelaskan instalasi, development, build, dan deployment.

---

# 14. Implementation Plan

## Phase 1 — Project Setup

- Periksa repository dan environment.
- Buat atau sesuaikan Next.js App Router project.
- Konfigurasi TypeScript, Tailwind CSS, linting, dan dependencies.
- Siapkan design tokens.
- Pastikan project dapat dijalankan dan dibuild.

## Phase 2 — Core Layout

- Implementasikan global layout dan typography.
- Bangun navbar dan footer.
- Bangun reusable buttons, section headings, dan cards.
- Siapkan responsive containers.

## Phase 3 — Main Sections

Urutan pengerjaan:

1. Hero.
2. Projects.
3. About.
4. Skills.
5. Experience.
6. Contact.

Prioritaskan layout dan konten sebelum menambahkan motion yang kompleks.

## Phase 4 — Motion and Visual Polish

- Implementasikan scroll reveal.
- Tambahkan hover effects.
- Tambahkan floating cards dan dotted connectors.
- Implementasikan reduced-motion behavior.
- Evaluasi kembali kontras dan hierarchy.

## Phase 5 — QA and Optimization

- Uji viewport desktop, tablet, dan mobile.
- Uji keyboard navigation.
- Uji tautan.
- Jalankan lint, type checking, dan production build.
- Perbaiki error.
- Evaluasi performa dan accessibility.

## Phase 6 — Deployment

- Siapkan production environment.
- Deploy ke Vercel atau platform yang sesuai.
- Konfigurasikan domain jika tersedia.
- Periksa metadata, favicon, Open Graph, dan URL publik.
- Lakukan smoke testing pada hasil deployment.

---

# 15. Instruksi untuk AI Agent

Bertindaklah sebagai Senior Full-Stack Engineer sekaligus UI Engineer yang bertanggung jawab mengimplementasikan personal portfolio website berdasarkan PRD ini.

## Working Rules

1. Baca seluruh PRD sebelum mulai bekerja.
2. Jika repository sudah ada, periksa struktur, package manager, dependencies, dan kode yang tersedia sebelum mengubah file.
3. Jangan menimpa pekerjaan yang sudah ada tanpa alasan yang jelas.
4. Implementasikan produk yang benar-benar berfungsi, bukan hanya mockup atau deskripsi.
5. Gunakan Next.js App Router, TypeScript, dan Tailwind CSS.
6. Terapkan design system secara konsisten.
7. Utamakan semantic HTML, responsive behavior, accessibility, dan performa.
8. Gunakan reusable components dan data-driven project cards.
9. Jangan mengarang informasi personal atau pencapaian.
10. Gunakan placeholder yang jelas untuk data yang belum tersedia.
11. Jangan menambahkan backend, database, authentication, atau dependency berat tanpa kebutuhan.
12. Jangan menganggap fitur selesai hanya karena file sudah dibuat.
13. Jalankan lint, type checking, dan production build, lalu perbaiki error yang ditemukan.
14. Jika terdapat keputusan yang tidak dijelaskan dalam PRD, gunakan default yang paling sederhana, konsisten, dan mudah dipelihara.
15. Jika ada data personal yang benar-benar dibutuhkan tetapi belum tersedia, lanjutkan dengan placeholder dan laporkan data yang perlu dilengkapi.

## Required Deliverables

- Source code lengkap.
- Responsive UI untuk seluruh section.
- Reusable component architecture.
- Data configuration untuk projects, skills, dan experience.
- Konfigurasi dependencies yang diperlukan.
- README berisi instruksi instalasi dan menjalankan aplikasi.
- Hasil lint, type check, dan production build.
- Daftar placeholder yang perlu diganti pemilik portfolio.
- Ringkasan file penting dan keputusan implementasi.
- Catatan keterbatasan atau masalah yang belum terselesaikan.

## Final Reporting Format

Setelah implementasi, laporkan:

1. Fitur yang sudah selesai.
2. Struktur project.
3. Teknologi dan dependencies yang digunakan.
4. Hasil pengujian yang benar-benar telah dijalankan.
5. Cara menjalankan project secara lokal.
6. Cara melakukan deployment.
7. Data yang masih perlu dilengkapi.
8. Masalah atau acceptance criteria yang belum terpenuhi.

Jangan mengklaim build, test, deployment, atau integrasi telah berhasil jika belum benar-benar diverifikasi.

---

# 16. Final Product Principle

Prioritas utama proyek ini adalah menghasilkan portfolio yang memiliki identitas visual kuat, mampu menampilkan kemampuan developer secara kredibel, dan mudah dikembangkan lebih lanjut.

Urutan prioritas pengambilan keputusan:

1. Kejelasan identitas dan konten.
2. Kualitas visual dan konsistensi desain.
3. Responsiveness dan accessibility.
4. Interaksi yang terasa natural.
5. Performa dan maintainability.
6. Dekorasi tambahan.

**Expected outcome:** sebuah personal portfolio website yang terinspirasi oleh karakter visual Ailene, tetapi memiliki branding sendiri, menampilkan proyek yang autentik, responsif pada berbagai perangkat, dan siap dipublikasikan setelah konten personal dilengkapi.
