# 🚀 Hisyam Santoso — Portfolio

Personal portfolio website built with **Astro** and **Tailwind CSS v4**, showcasing projects, skills, and professional experience as a Web Developer and Informatics Engineering student.

## ✨ Features

- **Single-page portfolio** — Hero, About, Skills, Portfolio, Contact, and Footer sections
- **Content Collections** — Project data managed via Markdown files with Zod schema validation
- **Data-driven architecture** — Skills and career timeline extracted to typed data files (`src/data/`)
- **Interactive UI** — Auto-typing effect, 3D tilt on hero image, scroll reveal animations, and back-to-top button
- **Portfolio filtering** — Filter projects by category (Web App / UI & Slicing)
- **Contact form** — Client-side validation with mailto integration
- **ScrollSpy navigation** — Active nav link highlights based on scroll position
- **Responsive design** — Mobile-first layout with hamburger navigation
- **SEO optimized** — Open Graph meta tags, semantic HTML, and descriptive metadata

## 🛠️ Tech Stack

| Category        | Technology                                                |
| :-------------- | :-------------------------------------------------------- |
| **Framework**   | [Astro](https://astro.build)                              |
| **Styling**     | [Tailwind CSS v4](https://tailwindcss.com)                |
| **Icons**       | [Lucide](https://lucide.dev) (`@lucide/astro`)            |
| **Animation**   | [Motion](https://motion.dev)                              |
| **Linting**     | [ESLint](https://eslint.org) + `eslint-plugin-astro`      |
| **Formatting**  | [Prettier](https://prettier.io) + `prettier-plugin-astro` |
| **Package Mgr** | [pnpm](https://pnpm.io)                                   |
| **Language**    | TypeScript                                                |

## 📁 Project Structure

```text
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, About, Skills, Portfolio, Contact
│   └── ui/              # Reusable atomic components
│                        #   (IconButton, PortfolioCard, SkillBadge, SkillCard, TimelineItem)
├── content/
│   └── projects/        # Markdown files for each portfolio project
├── data/
│   ├── skills.ts        # Skills data (typed with interfaces)
│   └── timeline.ts      # Career timeline data
├── layouts/
│   └── Layout.astro     # Base HTML layout
├── pages/
│   └── index.astro      # Main entry page
├── styles/
│   └── global.css       # Tailwind v4 theme, custom utilities, animations
└── content.config.ts    # Content Collection schema definition
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 22.12.0
- **pnpm** (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/hisyamsz/portofolio.git

# Navigate to the project directory
cd portofolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start local dev server at localhost:4321
pnpm dev

# Lint the codebase
pnpm exec eslint .

# Format code with Prettier
pnpm exec prettier --write .
```

### Production

```bash
# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

## 📬 Contact

- **Email** — hisyam.s901@gmail.com
- **LinkedIn** — [Hisyam Santoso](https://www.linkedin.com/in/hisyam-santoso-92a747279/)
- **GitHub** — [@hisyamsz](https://github.com/hisyamsz)
- **Instagram** — [@hisyamsz\_](https://instagram.com/hisyamsz_/)

## 📄 License

This project is open source and available for personal use and learning purposes.

---

Made with ❤️ by **Hisyam Santoso**
