<div align="center">

# Eid Mohammad Kharoti

### Web Developer · React.js · Responsive Design

A personal portfolio sharing my work, skills, and journey in web development.

[GitHub](https://github.com/eidmohammadrohani) · [Contact](mailto:eidmohammadrohani@gmail.com) · [Setup guide](docs/SETUP.md)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000)
![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=fff)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=fff)
![CSS](https://img.shields.io/badge/CSS-663399?style=flat-square&logo=css&logoColor=fff)

</div>

## About

I'm Eid Mohammad Kharoti, a web developer from Lashkargah, Afghanistan. I'm studying Computer Science at Bost University and learning the MERN stack at Jamal Khan Tech, with a current focus on frontend development and React.js.

This portfolio brings together my background, skills, and projects in a responsive, single-page website.

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Light and dark themes with a saved preference.
- Project cards with descriptions, technologies, and available links.
- Keyboard navigation, visible focus states, and reduced-motion support.
- A contact form that opens a prefilled email draft in the visitor's email app.
- Build-time metadata and structured data, with sitemap generation when a site URL is configured.
- Editable profile, skills, projects, and social links in `src/data/`.

## Built with

React 18, JavaScript, Vite 5, CSS, and Lucide React icons. The site runs entirely in the browser; no backend or database is required.

## Run locally

Install Node.js 18 or newer, then run:

```bash
git clone https://github.com/eidmohammadrohani/Eid-Mohammad-portfolio.git
cd Eid-Mohammad-portfolio
npm ci
npm run dev
```

Open the local URL printed in your terminal.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

For canonical URLs, social preview URLs, and a sitemap, copy `.env.example` to `.env` and set `VITE_SITE_URL` to your deployed site's HTTPS address before building.

## Project structure

```text
src/
  components/   Reusable interface components
  sections/     Portfolio sections
  data/         Profile, projects, skills, and social links
  hooks/        Theme preference
  utils/        URL helpers
  App.jsx       Page composition
  styles.css    Site styles
plugins/        Build-time SEO plugin
public/         Favicon and social preview image
docs/           Detailed setup and publishing guide
```

## Customize and publish

Start with `src/data/profile.js`, `skills.js`, `projects.js`, and `socialLinks.js`. Add only verified project and social links; empty links are hidden automatically.

See the [complete setup guide](docs/SETUP.md) for customization, hosting, custom domains, and search indexing.

## Contact

**Eid Mohammad Kharoti** · Lashkargah, Afghanistan
[GitHub](https://github.com/eidmohammadrohani) · [eidmohammadrohani@gmail.com](mailto:eidmohammadrohani@gmail.com)
