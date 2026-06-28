# Mendip Maths Tutoring — website

A fast, static multi-page website for Mendip Maths Tutoring, designed to be hosted on **GitHub Pages**. No build step, no dependencies — just HTML, CSS and a little vanilla JavaScript.

## Pages
| File | Page |
|------|------|
| `index.html` | Home (full-bleed Glastonbury Tor hero) |
| `about.html` | About — Ryan's story |
| `offer.html` | What we offer |
| `fees.html` | Fees & cancellation policy |
| `catchment.html` | Catchment area |
| `contact.html` | Contact & free taster |

## Design
- **Type:** Fraunces (display serif) + Inter (body) via Google Fonts
- **Palette:** deep forest green `#1e3a29` + warm stone neutrals on white, with a clay accent
- **Imagery:** Glastonbury Tor (`assets/tor.jpg`) and Cheddar Gorge (`assets/gorge.jpg`)
- Subtle scroll-reveal + spring motion, fully responsive, respects `prefers-reduced-motion`

## Add Ryan's photo
The About page looks for `assets/ryan.jpg`. Drop a portrait there (roughly 4:5 / portrait orientation works best). Until you do, a tidy placeholder is shown automatically.

## Deploy to GitHub Pages
1. Create a new repository on GitHub (e.g. `mendip-maths`).
2. Push this folder (see git commands below).
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## Contact details (edit in each HTML file's header/footer + contact.html)
- Email: learning@mendipmaths.com
- Phone: 07889 733 873
- Based: Shepton Mallet, Somerset
