export interface TimelineItemType {
  dateRange: string;
  title: string;
  subtitle: string;
  description: string;
}

export const timelineData: TimelineItemType[] = [
  {
    dateRange: 'Apr 2026 - Jun 2026',
    title: 'Full Stack Engineer (Project Kerja Praktik)',
    subtitle: 'SMK Islamiyah Ciputat · Internship',
    description:
      'Berperan sebagai Full Stack Developer dalam kegiatan pengembangan dan digitalisasi layanan perpustakaan sekolah melalui pembangunan sistem informasi berbasis website.',
  },
  {
    dateRange: 'Oct 2025 - Jan 2026',
    title: 'Frontend Developer (Project PKM)',
    subtitle: 'SMKN 6 Kota Tangerang Selatan · Internship',
    description:
      'Berperan sebagai Frontend Developer dalam kegiatan digitalisasi layanan perpustakaan sekolah, bertanggung jawab pada pengembangan antarmuka dan implementasi sistem perpustakaan.',
  },
];
