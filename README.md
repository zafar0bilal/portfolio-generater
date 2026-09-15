# Freelancer Portfolio Generator — V3

This version uses the **six portfolio reference presets uploaded in the chat** as inspiration for the template picker.

## What changed
- 24 templates grouped into **6 reference-inspired design families**
- The six reference images are stored in `assets/presets/`
- Each template has a different font choice
- Each template has a different animation treatment
- Users can override the animation in the Design step
- Project/work image upload is still included
- Profile image upload is still included
- Live preview updates instantly
- Responsive generator
- Template search/filter
- LocalStorage autosave
- Full-screen portfolio preview
- Export current portfolio as HTML

## The 6 preset families
1. Framer-inspired orange/red creative editorial
2. Cinematic visual designer / dark luxury
3. Oversized typography / magazine
4. Gaming / esports dashboard
5. Bright interactive grid / playful
6. Cool minimal editorial / gallery

The reference images are used as visual references in the **Choose Design** cards; the generated portfolio itself is built from HTML/CSS so the user's own information and project images can be inserted.

## Add work pictures
Go to **02 — Your Work** and click **Upload work picture** inside any Project card. The uploaded image appears automatically in the live portfolio's Selected Work section.

## GitHub Pages
Upload:
- `index.html`
- `styles.css`
- `app.js`
- `assets/presets/preset-01.png` through `preset-06.png`

Then enable GitHub Pages from the repository Settings → Pages.

## Note
For a production application with accounts, permanent published URLs and cloud-stored project images, add a backend/database and cloud storage later.


## V4 updates
- Main/profile image location changes by preset family instead of using one identical hero layout.
- Project image location changes by preset family and project position.
- Project uploads have **Show full image / Fill frame** plus focus controls.
- Social inputs ask for usernames/handles instead of URLs.
- Instagram, LinkedIn, GitHub, Behance and Dribbble icons are shown in the generated portfolio and open the corresponding profile in a new tab when clicked.
