# Door to Door Construction website

The new website for Door to Door Construction Ltd., a general contractor in Surrey, BC. It's built with [Astro](https://astro.build), which turns the files in `src/` into a plain, fast HTML website.

Pages:

| Page | Address | File |
| --- | --- | --- |
| Home | `/` | `src/pages/index.astro` |
| Services | `/services` | `src/pages/services.astro` |
| Projects | `/projects` | `src/pages/projects.astro` |
| About | `/about` | `src/pages/about.astro` |
| Contact / free estimate | `/contact` | `src/pages/contact.astro` |

## Run it on your computer

You need [Node.js](https://nodejs.org) version 18.20 or newer.

```bash
npm install      # first time only: downloads Astro
npm run dev      # starts a preview at http://localhost:4321
```

Edit a file, save it, and the browser updates by itself. Press `Ctrl + C` in the terminal to stop.

To build the final website (what gets uploaded), run `npm run build`. The result goes in the `dist/` folder. `npm run preview` lets you look at that build.

## Where to change things

- **Phone, email, address**: `src/data/site.ts`. Changing them there updates every page.
- **Page text**: open the page's file in `src/pages/` and edit the words between the tags.
- **The four service groups** (home page tiles and Services page): `src/data/services.ts`.
- **Header, footer, mobile buttons, "Got a project?" band**: `src/components/`.
- **Page titles and Google descriptions**: the `title` and `description` at the top of each page file.
- **Colours and hover effects**: mostly written straight into the pages. Shared rules live in `src/styles/global.css`.

### Photos

All photos are listed in `src/data/images.ts`. Each one has a file name (in `public/images/`) and the address of the same photo on the client's current website.

- If the file is in `public/images/`, the site uses it.
- If not, the site loads it from the client's current website.

Two photos are not in the repo yet: `Door-Services.jpg` and `2018-11.jpg` (they couldn't be downloaded when the site was built). To fetch them, run:

```bash
npm run download-images
```

**Do this before the old website is switched off.** The new site replaces the old one on the same domain, so once it goes live, the old photo addresses stop working.

To add or swap a photo: put the file in `public/images/`, add or change its line in `src/data/images.ts`, then use it in a page with `img('yourKey')`.

## Connect the quote form

The form sends requests by email through [Formspree](https://formspree.io) (free plan is fine).

1. Sign up at formspree.io with the email address that should receive the requests.
2. Create a new form. Formspree shows an address like `https://formspree.io/f/abcdwxyz`.
3. Copy the last part (`abcdwxyz`).
4. Open `src/data/site.ts` and paste it into `FORMSPREE_ID = ''`, so it reads `FORMSPREE_ID = 'abcdwxyz'`.
5. Save, commit and push. Send a test request from the live site and confirm it in Formspree.

Until this is done, the form shows a "please call us" message instead of sending, so no request is lost silently.

## Put it online (Vercel)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. Click **Add New → Project** and import this repository.
3. Vercel detects **Astro** automatically. Leave the defaults and click **Deploy**.
4. In the project's **Settings → Domains**, add `doortodoor911.com` and follow the DNS instructions.

Every push to the `main` branch updates the live site automatically.

## Undo a change

Every change is saved as a "commit" in git, so nothing is lost.

```bash
git log --oneline          # list recent changes, newest first
git revert <commit-id>     # undo one change (makes a new commit that reverses it)
git push
```

On GitHub you can also browse any older version of a file from its **History** button.

## Before launch

- [ ] Run `npm run download-images` so every photo is stored in the repo.
- [ ] Get real project photos from the client if possible. Many current photos are generic.
- [ ] Connect the quote form (see above) and send a test.
- [ ] Add real Google reviews. Testimonials were left out on purpose because the current site only has placeholder reviews.
- [ ] Confirm the copy with the client (it's written in the company voice; no owner name was available).
- [ ] Point the domain at Vercel.
