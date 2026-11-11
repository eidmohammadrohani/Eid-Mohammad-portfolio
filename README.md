# Eid Mohammad Kharoti: Portfolio Website

A modern, responsive portfolio built with **React.js + Vite**, plain **CSS**, and **Lucide React** icons. It is frontend-only, with no database and no server to maintain, so it is easy to host for free.

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer).

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:5173).

To test the production version:

```bash
npm run build      # creates the "dist" folder
npm run preview    # serves "dist" so you can check it
```

## 2. Update your information (do this before publishing)

Everything you may need to edit is in `src/data/`. You never need to touch the components for normal changes.

| File | What to edit |
| --- | --- |
| `src/data/profile.js` | Name, location, education, about text, profile photo, SEO title and description |
| `src/data/skills.js` | Skills and levels. **The levels are starting guesses. Change them to your honest level.** Set `show: false` to hide a skill (Node.js is hidden until you confirm it). |
| `src/data/projects.js` | Project descriptions, status, technologies, GitHub and live demo links |
| `src/data/socialLinks.js` | GitHub, LinkedIn, Facebook, Instagram, personal website |

Checklist before going live:

- [ ] Replace the skill levels in `skills.js` with your real levels.
- [ ] In `projects.js`, check each project's technologies, status, and description. The Pharmacy Website has no technologies listed yet.
- [ ] Add your real project links (GitHub and live demo) when they exist. Empty links are hidden on the live site. While you run `npm run dev`, a dashed note shows where a link is missing.
- [ ] Add your real social profile links in `socialLinks.js`. Only addresses starting with `https://` are shown. Empty ones are never shown.
- [ ] Add a real profile photo (optional): put the image in `public/`, then set `photo: '/your-image.jpg'` in `profile.js`. Without it the site shows an "EK" monogram.
- [ ] Read the "My journey so far" text in `profile.js` and change anything that is not exactly true.

## 3. Project structure

```
src/
  components/   Reusable pieces (Navbar, Footer, ProjectCard, SkillCard, ContactForm, ...)
  sections/     One file per page section (Hero, About, Skills, Projects, ...)
  data/         Your editable information
  hooks/        useTheme (light and dark theme)
  utils/        Small helpers
  App.jsx       Puts the sections together
  main.jsx      Starts React
  styles.css    All styling. Colors and fonts are at the top.
plugins/seo.js  Creates SEO tags, Person data, sitemap.xml and robots.txt at build time
public/         favicon.svg and og-image.png (the preview image when your link is shared)
```

## 4. About the contact form

The site has no backend, so the form cannot deliver or store messages by itself. When a visitor presses **Open email draft**, their own email app opens with the message ready, and they press Send there. The site never says a message was sent.

If you want messages delivered and stored later, you would add a small backend:

1. A Node.js + Express server with a `POST /api/contact` route.
2. Validate every field on the server again, even though the form already checks them.
3. Add spam protection (rate limiting, a hidden honeypot field, or a CAPTCHA).
4. Save messages in MongoDB and/or send an email with a service such as Nodemailer.
5. Keep secrets (database address, email password) in environment variables, never in the code.

This is a good project for after you finish the database part of your MERN course.

## 5. Buy a domain and deploy

### Deploy first (free)

**Netlify**
1. Push this project to a new GitHub repository.
2. In Netlify choose **Add new site**, then **Import an existing project**, then pick your repository.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy. You get a free `something.netlify.app` address.

**Vercel**
1. Push the project to GitHub.
2. In Vercel choose **Add New Project** and import the repository. Vercel detects Vite automatically.
3. Deploy. You get a free `something.vercel.app` address.

### Buy and connect a domain

1. Choose a domain name that matches your name. Check which names are free yourself. This project does **not** assume any domain is available (for example `eidmohammadkharoti.com` may be taken).
2. Buy it from a registrar you trust (Namecheap, Cloudflare Registrar, Porkbun, and others). Check that your payment method works from Afghanistan before you start.
3. In Netlify (Domain management) or Vercel (Settings, then Domains), add your domain. They show the DNS records to create at your registrar. Add them and wait. This can take from a few minutes up to a day.
4. HTTPS is enabled automatically.
5. Tell the site its address: copy `.env.example` to `.env` and set

   ```
   VITE_SITE_URL=https://www.your-domain.com
   ```

   On Netlify or Vercel, add the same variable in the site's **Environment variables** settings, then redeploy.

With `VITE_SITE_URL` set, the build adds the canonical link, the share image address, the structured data address, `sitemap.xml`, and the sitemap line in `robots.txt`. Without it, the build leaves them out instead of guessing.

## 6. Google Search Console

1. Go to https://search.google.com/search-console and sign in with a Google account.
2. Click **Add property**.
3. Choose **Domain** (best, covers www and non-www) or **URL prefix** (simpler).
4. **Verify ownership.**
   - For a Domain property, Google shows a TXT record. Add it in your registrar's DNS settings, wait, then click Verify.
   - For a URL prefix property, you can use the HTML tag method: Google gives you a `<meta name="google-site-verification" ...>` tag. Add it inside `<head>` in `index.html`, redeploy, then click Verify.
5. **Submit your sitemap.** Open **Sitemaps** in the left menu, enter `sitemap.xml`, and click Submit. (Your site is a single page, so the sitemap lists one address.)
6. **Check indexing.** Use the **URL inspection** box at the top and paste your home page address. It shows whether the page is in Google. If it is not, click **Request indexing**.
7. Check **Pages** in the left menu from time to time to see what is indexed and whether there are problems.

## 7. Help people find you honestly

Search engines decide what to index and where to rank it. Nobody can promise first place on Google, and a website alone does not make AI chat tools know you. Indexing and ranking depend on search-engine systems, how good your content is, how much competition exists for your name, and time. You can only make your real identity clear and easy to find:

- Use the same full name everywhere: **Eid Mohammad Kharoti**.
- Create real profiles (GitHub, LinkedIn) with the same name, photo, and a link to this site. Then add them to `socialLinks.js`. They also feed the `sameAs` structured data.
- Put real projects on GitHub with clear README files.
- Write original content about what you learn, such as short posts about React or building NoteHub.
- Ask people who really know your work (teachers, classmates, course mentors) to link to your portfolio where it is natural.
- Do not buy backlinks, post fake reviews, or repeat keywords. These can get a site penalized.
- Check results by searching your name in a private browser window after a few weeks.

## 8. What the site already includes

- Light and dark themes (dark by default, your choice is remembered)
- Keyboard-friendly navigation, skip link, visible focus, and labelled form fields
- Reduced-motion support (animations are off when the visitor asks for it)
- Semantic HTML with one `h1` and a clear heading order
- Title, description, Open Graph and Twitter tags, canonical link, Schema.org `Person` data, `robots.txt`, and `sitemap.xml`
- No tracking, no API keys, and no secrets

## 9. Later: adding a database

The first version needs none. When you are ready, you could store contact messages or project data in MongoDB through an Express API, then load projects in React with `fetch`. The "Learning databases" section on the site explains the basic ideas in beginner terms.
