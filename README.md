<div align="center">

# rekyi.de

**Personal developer portfolio built with Angular 22**

[![Live](https://img.shields.io/badge/Live-rekyi.de-89bcd9?style=flat-square)](https://rekyi.de)
![Angular](https://img.shields.io/badge/Angular-22-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8-777BB4?style=flat-square&logo=php&logoColor=white)

[Live site](https://rekyi.de) · [Features](#features) · [Tech stack](#tech-stack) · [Getting started](#getting-started)

</div>

---

<!-- ![Portfolio hero section](docs/readme.webp) -->

## About

A single-page portfolio that presents who I am, what I work with and what I have built. It is a modern Angular application with standalone components, signals and the standard control flow, fully responsive from 320 px up to widescreen and available in English and German.

## Features

- **Bilingual (EN/DE)** – powered by ngx-translate. The language is detected from the browser on the first visit, remembered in `localStorage` and reflected in the `<html lang>` attribute.
- **Layout-stable language switch** – the `StableText` component renders every translation in the same grid cell and only shows the active one, so switching languages never makes the layout jump.
- **Contact form with PHP backend** – reactive form with validation on blur, honeypot spam protection and a small PHP mail script with CORS allowlist and input validation. Private addresses live in a config file that is excluded from the repository.
- **Project showcase** – tabbed project cards with a swipeable image slider, live demo and GitHub links.
- **Responsive, mobile first** – shared SCSS breakpoint mixins, fluid sizing with `clamp()` and container queries for components that adapt to their own width.
- **Accessible** – semantic HTML, ARIA labels, visible focus states and `prefers-reduced-motion` support.
- **Legal pages** – legal notice and privacy policy in both languages.
- **Maintenance mode** – a static maintenance page that can be switched on and off on the server without a new deployment.

## Tech stack

| Area      | Technology                                                         |
| --------- | ------------------------------------------------------------------ |
| Framework | Angular 22 (standalone components, signals, built-in control flow) |
| Language  | TypeScript                                                         |
| Styling   | SCSS with shared variables, mixins and partials                    |
| i18n      | @ngx-translate/core + http-loader                                  |
| Forms     | Angular Reactive Forms                                             |
| Backend   | PHP mail script (`send-mail.php`)                                  |
| Hosting   | Apache web hosting with `.htaccess` routing                        |

## Project structure

```text
src/
├── app/
│   ├── core/services/      # LanguageService, ContactService
│   ├── layout/             # Navbar, footer
│   ├── pages/
│   │   ├── home/           # Hero, about, skills, projects, testimonials, contact
│   │   ├── legal-notice/
│   │   └── privacy-policy/
│   └── shared/
│       ├── components/     # Primary button, section title, social links, stable text
│       └── models/         # Interfaces and static data
├── styles/                 # Reset, fonts, variables, mixins
└── styles.scss
public/
├── i18n/                   # en.json, de.json
├── send-mail.php           # Contact form endpoint
├── mail-config.example.php # Template for the private mail config
├── maintenance.html
└── .htaccess
docs/
└── DEPLOYMENT.md           # Hosting, contact form and maintenance mode
```

## Getting started

```bash
git clone https://github.com/rekyi/portfolio.git
cd portfolio
npm install
npm start
```

The app opens at `http://localhost:4200`.

| Command         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm start`     | Starts the dev server and opens the browser            |
| `npm run build` | Creates a production build in `dist/portfolio/browser` |
| `npm run watch` | Rebuilds on every change (development configuration)   |

Hosting, the contact form setup and the maintenance mode are documented in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Credits

Built to bring my work together in one place and to get hands-on with modern Angular – signals, standalone components and the built-in control flow. The design is based on a template owned by Developer Akademie GmbH.

## Contact

[mail@rekyi.de](mailto:mail@rekyi.de) · [GitHub](https://github.com/rekyi) · [rekyi.de](https://rekyi.de)

---

<div align="center">

© 2026 rekyi. All rights reserved.

</div>
