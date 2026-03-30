# LoekLucas Portfolio — Cookie Banner Demo

A minimal portfolio dummy page with a GDPR-style cookie consent banner, hosted via GitHub Pages.

## Files

```
index.html   — Main page + cookie banner markup
style.css    — All styling
cookies.js   — Consent logic (stores choice in localStorage)
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (can be public or private with Pages enabled).
2. Push these three files to the `main` branch:

```bash
git init
git add index.html style.css cookies.js
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to your repo on GitHub → **Settings** → **Pages**.
4. Under **Source**, select `Deploy from a branch` → branch: `main` → folder: `/ (root)`.
5. Click **Save**. Your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

It may take 1–2 minutes for the first deploy to appear.

## How the banner works

- On first visit the banner slides up from the bottom.
- "Read the full policy" opens a modal with the complete Cookies Policy text.
- Accepting or declining saves the choice to `localStorage` under the key `cookie_consent`.
- Returning visitors whose choice is already stored will not see the banner again.
- To reset (for testing), open DevTools → Application → Local Storage → delete the `cookie_consent` key.
