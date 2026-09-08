# Introduction to Open Source — Session 1 Deck

A React + Vite slide deck for presenting "Introduction to Open Source" to
first-year students, styled to match the upGrad School of Technology dark
theme (progress bar, dot navigation, fullscreen mode).

## Run it

```bash
npm install
npm run dev
```

Then open the printed localhost URL. Use the arrow keys (or the on-screen
Prev/Next buttons and dots) to navigate, and press `F` or the corner icon
for fullscreen — good for presenting on a projector.

## Build for deployment

```bash
npm run build
```

Outputs a static site to `dist/` — drag that folder into Vercel/Netlify,
or serve it from any static host.

## Editing content

All slide text lives in one place: `src/data/slides.js`. Each entry is a
plain object with a `type` (title, quote, pipeline, twocol-compare,
perspectives, terms, steps, rules, events, tracks, tech, timeline,
projects, grading, nextsteps, closing) and the fields that type expects —
edit the text there and the deck updates automatically. Slide layouts
themselves live in `src/components/slides/SlideTypes.jsx`.
