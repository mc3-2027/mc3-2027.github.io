# Context – Conference Website for ICMCCC 2027 Bilbao

## Project Type

Static website for a scientific conference, to be developed with Codex inside Visual Studio Code and deployed using GitHub Pages.

The website should be based conceptually on the repository:

```bash
git clone https://github.com/harshi0102/ConferencePage.git

but adapted to the visual identity and content of the conference.

Conference Identity

Conference name:

3rd International Conference on Mineral Carbonation for Cement and Concrete

Short name:

ICMCCC 2027

Location:

Bilbao

Date:

September 2027

The website must be hosted under the conference identity, not under a personal name such as Hegoi Manzano.

Preferred repository or GitHub Pages name should be based on:

* icmccc2027
* mineral-carbonation-2027
* icmccc-bilbao-2027

Scientific Scope

The conference focuses on:

* Mineral carbonation
* CO₂ mineralization
* Cement and concrete
* Alternative cementitious binders
* Calcium carbonate formation
* Carbon capture and utilization in cement-based materials
* Physical chemistry of carbonation
* Materials science of low-carbon binders

The tone must be scientific, professional, and international.

Website Goal

Create a clean, modern, static conference website suitable for GitHub Pages.

The website should include standard conference sections such as:

* Home
* About
* Topics
* Important dates
* Program
* Speakers
* Committees
* Venue
* Registration
* Abstract submission
* Contact

Some sections may initially contain placeholder text and should be easy to update later.

Visual Identity

The design should follow the logo and branding image provided by the user.

Main visual style

* White background as default
* Clean scientific layout
* Modern but sober
* High readability
* Strong visual hierarchy
* Good spacing
* Avoid clutter
* Avoid dark backgrounds except for optional contrast blocks

Color palette

Use the conference palette extracted from the branding image:

* Deep navy: #0D2B45
* Mineral green: #2E7D32
* Teal green: #2FA189
* Blue grey: #4A6B87
* Light blue: #7EB4D1
* Neutral grey: #888888

Use white as the dominant background color.

Typography

Use a modern sans-serif style similar to:

* Montserrat Bold / SemiBold for headings
* Montserrat Regular for body text

If web fonts are used, prefer Google Fonts Montserrat.

Design Requirements

The site should look like a professional scientific conference website.

Use:

* Large title sections
* Clean cards for topics and speakers
* Responsive layout
* Clear buttons
* Horizontal navigation
* Conference logo area
* Modern section spacing
* Subtle dividers
* No excessive animations

Buttons and highlights should mainly use:

* #0D2B45
* #2E7D32
* #2FA189

Technical Requirements

The website must be static and compatible with GitHub Pages.

Preferred stack:

* HTML
* CSS
* JavaScript only if necessary

Alternatively, if the template uses Bootstrap, it may be preserved.

The site should be easy to edit manually.

Avoid complex build systems unless absolutely necessary.

GitHub Pages Deployment

The project should be prepared so that it can be pushed to GitHub and published through GitHub Pages.

Include:

* index.html
* CSS files
* assets folder
* images folder
* README with deployment instructions

The repository should not depend on local-only files.

Project Structure

Suggested structure:

conference-website/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
├── pages/
│   ├── program.html
│   ├── speakers.html
│   ├── venue.html
│   ├── registration.html
│   └── contact.html
└── docs/

Adapt this structure if the selected template requires a different organization.

Branding Image

The uploaded branding image contains several logo variants and the preferred palette.

Codex should use this image as visual reference for:

* color palette
* scientific-mineral visual tone
* Bilbao identity
* clean white-background layout
* navy-green-blue visual balance

Do not attempt to recreate the logo unless explicitly asked.

Use placeholder logo files if the final logo is not yet available.

Content Philosophy

The website should initially be functional even if some content is provisional.

Use clear placeholder text where needed, for example:

* Program coming soon
* Registration details will be announced
* Abstract submission opening soon

Avoid fake names, fake dates, or fake speakers unless explicitly provided.

Expected Output from Codex

When working in VS Code, Codex should:

1. Inspect the current folder.
2. Create or adapt a static conference website.
3. Apply the conference color palette.
4. Create the core sections.
5. Prepare files for GitHub Pages.
6. Add a README explaining:
    * how to preview locally
    * how to push to GitHub
    * how to enable GitHub Pages

Style Constraints

* No personal branding
* No “Hegoi Manzano” in site title or repository naming
* Conference identity first
* White background
* Scientific and professional tone
* Minimal text blocks
* Easy future editing