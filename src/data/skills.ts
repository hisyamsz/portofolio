export interface SkillItemType {
  name: string;
  iconUrl?: string;
  iconSvg?: string;
  colorBorderClass: string;
  colorBgClass: string;
  colorTextClass: string;
}

export interface SkillCategoryType {
  title: string;
  description: string;
  iconName: 'Monitor' | 'Database' | 'Settings';
  skills: SkillItemType[];
}

export const skillsData: SkillCategoryType[] = [
  {
    title: 'Frontend Development',
    description:
      'Membangun antarmuka interaktif dan responsif dengan fokus pada pengalaman pengguna yang luar biasa.',
    iconName: 'Monitor',
    skills: [
      {
        name: 'HTML 5',
        iconUrl: '/img/html-5.svg',
        colorBorderClass: 'hover:border-orange-500',
        colorBgClass: 'hover:bg-orange-50',
        colorTextClass: 'hover:text-orange-600',
      },
      {
        name: 'CSS 3',
        iconUrl: '/img/css-3.svg',
        colorBorderClass: 'hover:border-blue-500',
        colorBgClass: 'hover:bg-blue-50',
        colorTextClass: 'hover:text-blue-600',
      },
      {
        name: 'JavaScript',
        iconUrl: '/img/javascript.svg',
        colorBorderClass: 'hover:border-yellow-400',
        colorBgClass: 'hover:bg-yellow-50',
        colorTextClass: 'hover:text-yellow-700',
      },
      {
        name: 'TypeScript',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        colorBorderClass: 'hover:border-blue-600',
        colorBgClass: 'hover:bg-blue-50',
        colorTextClass: 'hover:text-blue-700',
      },
      {
        name: 'React.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        colorBorderClass: 'hover:border-cyan-400',
        colorBgClass: 'hover:bg-cyan-50',
        colorTextClass: 'hover:text-cyan-600',
      },
      {
        name: 'Next.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        colorBorderClass: 'hover:border-slate-800',
        colorBgClass: 'hover:bg-slate-200',
        colorTextClass: 'hover:text-slate-900',
      },
      {
        name: 'Tailwind CSS',
        iconUrl: '/img/tailwindcss-icon.svg',
        colorBorderClass: 'hover:border-cyan-500',
        colorBgClass: 'hover:bg-cyan-50',
        colorTextClass: 'hover:text-cyan-600',
      },
      {
        name: 'Bootstrap',
        iconUrl: '/img/bootstrap.svg',
        colorBorderClass: 'hover:border-purple-600',
        colorBgClass: 'hover:bg-purple-50',
        colorTextClass: 'hover:text-purple-700',
      },
    ],
  },
  {
    title: 'Backend & Databases',
    description:
      'Merancang arsitektur logika aplikasi, keamanan, dan manajemen data yang tangguh di sisi server.',
    iconName: 'Database',
    skills: [
      {
        name: 'Node.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        colorBorderClass: 'hover:border-green-600',
        colorBgClass: 'hover:bg-green-50',
        colorTextClass: 'hover:text-green-700',
      },
      {
        name: 'Express.js',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        colorBorderClass: 'hover:border-slate-600',
        colorBgClass: 'hover:bg-slate-200',
        colorTextClass: 'hover:text-slate-800',
      },
      {
        name: 'Prisma ORM',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
        colorBorderClass: 'hover:border-blue-800',
        colorBgClass: 'hover:bg-blue-100',
        colorTextClass: 'hover:text-blue-900',
      },
      {
        name: 'MySQL',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        colorBorderClass: 'hover:border-blue-500',
        colorBgClass: 'hover:bg-blue-50',
        colorTextClass: 'hover:text-blue-600',
      },
    ],
  },
  {
    title: 'Tools & Devops',
    description:
      'Memanfaatkan alat bantu pengembangan untuk kolaborasi yang efisien dan alur kerja yang optimal.',
    iconName: 'Settings',
    skills: [
      {
        name: 'Git',
        iconUrl: '/img/git-icon.svg',
        colorBorderClass: 'hover:border-orange-600',
        colorBgClass: 'hover:bg-orange-50',
        colorTextClass: 'hover:text-orange-700',
      },
      {
        name: 'GitHub',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        colorBorderClass: 'hover:border-slate-800',
        colorBgClass: 'hover:bg-slate-200',
        colorTextClass: 'hover:text-slate-900',
      },
      {
        name: 'VS Code',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
        colorBorderClass: 'hover:border-blue-500',
        colorBgClass: 'hover:bg-blue-50',
        colorTextClass: 'hover:text-blue-600',
      },
      {
        name: 'Figma',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        colorBorderClass: 'hover:border-pink-500',
        colorBgClass: 'hover:bg-pink-50',
        colorTextClass: 'hover:text-pink-600',
      },
    ],
  },
];
