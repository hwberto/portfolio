<div align="center">
<img src="https://static.wikia.nocookie.net/five-nights-at-freddys-ar-special-delivery-wiki/images/5/5d/Springtrap.png" alt="Springtrap" width="200" />

# Humberto Gonçalves — Portfolio

> A modern personal portfolio built to showcase my work, experience, skills, education, and approach to software development.

**Full-Stack Developer · Web Applications · UI Engineering**

[Live Portfolio](#) · [GitHub](https://github.com/hwberto)

</div>

---

## About

This repository contains the source code for my personal developer portfolio.

The portfolio was designed to provide a focused and interactive overview of my professional journey, selected projects, technical skills, education, and contact information — while also serving as a practical example of how I approach modern frontend development.

The application combines a responsive layout, component-driven architecture, subtle animations, theme support, and a data-driven content structure.

---

## Features

* **Responsive design** — optimized for desktop, tablet, and mobile experiences
* **Personal profile** — introduction, professional headline, and availability
* **Project showcase** — featured projects with descriptions, technologies, categories, and links
* **Professional experience** — structured representation of career experience
* **Technical skills** — categorized skills with proficiency levels
* **Education** — certifications and academic background
* **Contact section** — direct access to professional contact information
* **Theme support** — light and dark theme handling
* **Animated UI** — smooth transitions and interactive motion effects
* **Floating navigation dock** — quick access to portfolio sections
* **Ambient visual effects** — light rays and noise texture for a more immersive interface
* **Centralized portfolio data** — content separated from presentation components for easier maintenance

The main application composition is organized around reusable sections such as `PortfolioHero`, `PortfolioProjects`, `PortfolioExperience`, `PortfolioSkills`, `PortfolioEducation`, and `PortfolioContact`.

---

## Tech Stack

### Core

| Technology                                    | Purpose                              |
| --------------------------------------------- | ------------------------------------ |
| [React](https://react.dev/)                   | UI library                           |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development                |
| [Vite](https://vite.dev/)                     | Development server and build tooling |
| [Tailwind CSS](https://tailwindcss.com/)      | Styling and responsive design        |

### UI & Animation

| Technology                                             | Purpose                    |
| ------------------------------------------------------ | -------------------------- |
| [Base UI](https://base-ui.com/)                        | Accessible UI primitives   |
| [shadcn](https://ui.shadcn.com/)                       | Component architecture     |
| [Motion](https://motion.dev/)                          | Animations and transitions |
| [Lucide](https://lucide.dev/)                          | Interface icons            |

### Development Tools

* **Bun** — package manager and runtime
* **Biome** — formatting and code quality
* **TypeScript** — static type checking
* **Vite** — frontend tooling and production builds

The current project configuration uses React 19, TypeScript 6, Vite 8, Tailwind CSS 4, Motion, Base UI, shadcn, Lucide React, and Bun's lockfile.

---

## Architecture

The project follows a component-driven architecture:

```text
portfolio/
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── animate-ui/
│   │   ├── ui/
│   │   ├── about-me.tsx
│   │   ├── available-card.tsx
│   │   ├── portfolio-contact.tsx
│   │   ├── portfolio-dock.tsx
│   │   ├── portfolio-education.tsx
│   │   ├── portfolio-experience.tsx
│   │   ├── portfolio-hero.tsx
│   │   ├── portfolio-projects.tsx
│   │   ├── portfolio-skills.tsx
│   │   └── theme-toggle.tsx
│   │
│   ├── data/
│   │   └── portfolio-data.ts
│   │
│   ├── lib/
│   │   └── ...
│   │
│   ├── app.tsx
│   ├── globals.css
│   ├── main.tsx
│   └── theme-context.tsx
│
├── public/
├── biome.json
├── components.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The source is organized into reusable UI components, portfolio data, shared utilities, styling, and application-level configuration.

---

## Data-Driven Content

Portfolio content is intentionally separated from the UI layer.

The `src/data/portfolio-data.ts` module defines typed structures for:

* Projects
* Professional experience
* Skills
* Education
* Personal information
* Portfolio statistics

This makes the portfolio easier to maintain without requiring changes to the presentation components whenever content needs to be updated.

For example, projects follow a structured model containing information such as title, description, technologies, category, demo URL, GitHub URL, and featured status.

---

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed.

### Clone the repository

```bash
git clone https://github.com/hwberto/portfolio.git
cd portfolio
```

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

The development server will be available at:

```text
http://localhost:3000
```

### Build for production

```bash
bun run build
```

### Preview the production build

```bash
bun run preview
```

The available project scripts are defined in `package.json` and currently include development, production build, and preview commands.

---

## Customization

Most portfolio content can be updated from:

```text
src/data/portfolio-data.ts
```

This includes:

```text
Personal information
Projects
Experience
Skills
Education
Statistics
```

Visual and application behavior can be customized through the components and styles inside:

```text
src/components/
src/globals.css
src/theme-context.tsx
```

---

## Design Philosophy

The portfolio is built around a few principles:

**Clarity**
Information should be easy to scan without overwhelming the visitor.

**Componentization**
Each major section is implemented as an independent React component.

**Maintainability**
Content and presentation are separated whenever practical.

**Responsive by default**
The layout adapts between mobile and desktop experiences.

**Subtle interaction**
Animations and visual effects are used to reinforce the interface rather than distract from the content.

**Performance**
The application relies on a lightweight Vite-based architecture and avoids unnecessary runtime complexity.

---

## Project Status

This portfolio is an evolving project.

New projects, skills, experience, visual improvements, and technical refinements may be added over time as my career and development experience progress.

---

## Author

**Humberto Gonçalves**

Full-Stack Developer focused on building resilient web applications, intuitive interfaces, and scalable architectures.

* GitHub: [@hwberto](https://github.com/hwberto)
* Email: `hwbertooo@gmail.com`

---

## License

This project is intended primarily as a personal portfolio.

The source code may be referenced for educational purposes, but please do not present the portfolio, content, personal information, or projects as your own.
