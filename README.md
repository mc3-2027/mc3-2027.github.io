# 3MC3 Bilbao Conference Website

Static website for the **3MC3 — International Conference on Mineral Carbonation for Cement and Concrete**, Bilbao, 13–15 September 2027.

## Project Structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── pages/committees.html
├── docs/
└── context.md
```

The homepage presents the conference, with a separate organization and committees page:

- Home
- About
- Topics
- Important dates
- Program
- Speakers
- Committees
- Venue
- Registration
- Abstract submission
- Contact

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser.

For a local server preview, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Editing Content

Most content is in `index.html`. Styling is in `assets/css/styles.css`.

The conference chair, MC3 Advisory Board, and local committee are in
`pages/committees.html`. Names and affiliations were taken from the committee CSV
files; the HTML is edited manually and does not update automatically when a CSV
changes. Scientific committee members will be added after availability is confirmed.

Placeholder items that should be updated later include:

- Final venue details
- Abstract submission dates and portal link
- Registration fees and deadlines
- Speaker names, affiliations, and talk titles
- Confirmed scientific committee members
- Final contact email address

## GitHub Pages Deployment

1. Create a GitHub repository with a conference-focused name, such as `3mc3`, `mc3-2027`, or `mc3-bilbao-2027`.
2. Initialize Git locally if needed:

   ```bash
   git init
   git add .
   git commit -m "Create initial 3MC3 website"
   ```

3. Add the GitHub remote:

   ```bash
   git remote add origin https://github.com/OWNER/REPOSITORY.git
   git branch -M main
   git push -u origin main
   ```

4. In GitHub, go to **Settings > Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save the settings. GitHub will publish the site after the first Pages build completes.

## Branding

The site uses the MC3 2027 logo assets and palette from the provided branding image:

- Deep navy: `#0D2B45`
- Mineral green: `#2E7D32`
- Teal green: `#2FA189`
- Blue grey: `#4A6B87`
- Light blue: `#7EB4D1`
- Neutral grey: `#888888`
