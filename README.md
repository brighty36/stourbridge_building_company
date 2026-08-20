# Test Building Company — draft website

A plain HTML, CSS and small vanilla JavaScript website. There is no framework and no build step.

## Preview

Open `index.html` directly, or serve the folder with any local static-file server.

## Draft-only items to replace

- Phone display: `01384 000 000`
- Phone links and WhatsApp number: `+441384000000`
- Placeholder domain: `https://www.testbuilding.com`
- Owner name and verified owner story
- Legal business identity and correspondence address
- Years of experience
- Insurance claim
- Testimonials and project descriptions
- All Picsum images, following `photos-needed.md`
- Privacy notice placeholders

Search the project for `PLACEHOLDER`, `REPLACE`, `CONFIRM`, `[XX]` and `[OWNER NAME]` before publication.

## Enquiry form

The form on `contact.html` is deliberately cosmetic. `script.js` stops submission and tells the visitor that nothing was sent. Connect a real endpoint and revise the privacy notice before removing that behaviour.

## Deployment

The files can be uploaded as-is to Cloudflare Pages. Set the build command to blank and the output directory to the folder containing `index.html`. Replace the placeholder domain in canonical links, structured data, `robots.txt` and `sitemap.xml` first.
