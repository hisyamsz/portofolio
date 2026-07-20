# Design Spec: Menambahkan Link Sosial Media di Section "About Me"

## Konteks
Pengguna ingin menambahkan ikon tautan menuju akun sosial medianya (Instagram, LinkedIn, dan GitHub) pada section "About Me" di halaman portofolio (`src/components/sections/About.astro`).

## Tujuan
Membuat tampilan tautan sosial media yang rapi, profesional, dan menyatu dengan gaya desain keseluruhan portofolio, tanpa mengganggu hierarki visual dari tombol aksi utama ("View Works" dan "Download CV").

## Desain yang Disetujui (Approach 1)
- **Penempatan**: Tepat di bawah baris tombol aksi ("View Works" dan "Download CV").
- **Tata Letak**:
  - Baris baru yang menggunakan flexbox.
  - Terdapat label teks kecil seperti "Connect with me:" sebagai pengantar.
  - Diikuti oleh ikon-ikon sosial media secara horizontal.
  - **Responsivitas**: Rata tengah (center-aligned) pada perangkat mobile/tablet, dan rata kiri (left-aligned) pada layar desktop (lg), agar sejalan dengan tata letak tombol aksi di atasnya.

## Rincian Implementasi
1. **Target File**: `src/components/sections/About.astro`
2. **Komponen yang Digunakan**: Menggunakan kembali (reuse) komponen `IconButton` dari `src/components/ui/IconButton.astro`.
3. **Data Sosial Media**:
   - URL dan ikon SVG untuk Instagram, LinkedIn, dan GitHub akan diambil dari file `src/components/layout/Footer.astro` untuk memastikan konsistensi ikon di seluruh situs.
4. **Struktur HTML/Astro Baru**:
   Menambahkan struktur kode berikut setelah container `div` dari tombol aksi:
   ```astro
   <div class="mt-6 flex items-center justify-center gap-4 lg:justify-start">
     <span class="text-sm font-semibold text-slate-500">Connect with me:</span>
     <!-- IconButton untuk Instagram, LinkedIn, GitHub di sini -->
   </div>
   ```
5. **Import Statement**: Menambahkan `import IconButton from '../ui/IconButton.astro';` di bagian frontmatter (atas) dari `About.astro`.

## Batasan (Constraints)
- Tidak perlu menambahkan data/file konfigurasi baru, cukup hardcode URL dan SVG di dalam `About.astro` sama seperti pada `Footer.astro`.
- Tidak ada instalasi dependency baru, cukup menggunakan TailwindCSS yang sudah tersedia.
