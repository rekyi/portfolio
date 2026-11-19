<div align="center">

# rekyi.de

**Personal developer portfolio built with Angular 22**

[![Live](https://img.shields.io/badge/Live-rekyi.de-89bcd9?style=flat-square)](https://rekyi.de)
![Angular](https://img.shields.io/badge/Angular-22-DD0031?style=flat-square&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8-777BB4?style=flat-square&logo=php&logoColor=white)

[Live site](https://rekyi.de) · [Features](#features) · [Getting started](#getting-started) · [Deployment](#deployment)

</div>

---

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
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (current LTS) and npm
- [Angular CLI](https://angular.dev/tools/cli) (optional, `npx ng` works as well)

### Installation

```bash
git clone https://github.com/rekyi/portfolio.git
cd portfolio
npm install
npm start
```

The app opens at `http://localhost:4200` (Angular's default port). If you run it on a different port, add that origin to `allowedOrigins` in `mail-config.php`, otherwise the contact form will be blocked.

### Contact form

The form sends its data to `send-mail.php`, which needs a PHP-enabled web server.

1. Copy `public/mail-config.example.php` to `public/mail-config.php`.
2. Fill in your values:
   - `sender` – an address on your own domain
   - `recipient` – the inbox that receives the messages
   - `allowedOrigins` – the domains allowed to call the script, including `http://localhost:4200` for local testing
3. Set `MAIL_ENDPOINT` in `src/app/core/services/contact.ts` to the URL of your script.

`mail-config.php` is listed in `.gitignore` and never leaves your machine or server.

## Scripts

| Command         | Description                                            |
| --------------- | ------------------------------------------------------ |
| `npm start`     | Starts the dev server and opens the browser            |
| `npm run build` | Creates a production build in `dist/portfolio/browser` |
| `npm run watch` | Rebuilds on every change (development configuration)   |

## Deployment

1. Run `npm run build`.
2. Upload the **contents** of `dist/portfolio/browser/` to the web root of an Apache server (for example `public_html`).
3. Make sure `mail-config.php` is on the server as well.

The included `.htaccess` serves existing files directly and routes everything else to `index.html`, so routes like `/legal-notice` also work after a reload. Requests to subdomains are left untouched, which allows hosting other projects on subdomains of the same account.

### Maintenance mode

Create an empty file named `maintenance.on` in the web root to show `maintenance.html` to all visitors (HTTP 503). Delete the file to bring the portfolio back. The switch file is ignored by Git, so a deployment can never turn maintenance mode on by accident.

## Credits

A learning project at heart: built to bring my work together in one place and to get hands-on with modern Angular – signals, standalone components and the built-in control flow.. The design is based on a template owned by Developer Akademie GmbH.

## Contact

[mail@rekyi.de](mailto:mail@rekyi.de) · [GitHub](https://github.com/rekyi) · [rekyi.de](https://rekyi.de)

---

<div align="center">

© 2026 rekyi. All rights reserved.

</div>
