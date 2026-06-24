# ICMCCC 2027 Bilbao Conference Website

Static website for the **3rd International Conference on Mineral Carbonation for Cement and Concrete**, Bilbao, September 2027.

## Project Structure

```text
.
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/
├── pages/
├── docs/
└── context.md
```

The first version is a single-page conference website with sections for:

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

Placeholder items that should be updated later include:

- Final venue details
- Abstract submission dates and portal link
- Registration fees and deadlines
- Speaker names, affiliations, and talk titles
- Organizing and scientific committee members
- Final contact email address

## GitHub Pages Deployment

1. Create a GitHub repository with a conference-focused name, such as `icmccc2027`, `mineral-carbonation-2027`, or `icmccc-bilbao-2027`.
2. Initialize Git locally if needed:

   ```bash
   git init
   git add .
   git commit -m "Create initial ICMCCC 2027 website"
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

The site uses the ICMCCC 2027 logo assets and palette from the provided branding image:

- Deep navy: `#0D2B45`
- Mineral green: `#2E7D32`
- Teal green: `#2FA189`
- Blue grey: `#4A6B87`
- Light blue: `#7EB4D1`
- Neutral grey: `#888888`
