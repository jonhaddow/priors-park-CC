# Priors Park Community Church

The website for [Priors Park Community Church](https://priorsparkcommunitychurch.co.uk/), with events and sermons, and content edited through a CMS.

## Tech stack

- [Astro](https://astro.build) with [Preact](https://preactjs.com) and [Tailwind CSS](https://tailwindcss.com)
- [Sanity](https://www.sanity.io) as the CMS; the studio config is in `sanity.config.ts`, with schemas in `src/sanity/schemas/`
- Hosted on [Netlify](https://www.netlify.com)

## Running locally

```sh
npm i
npm run dev      # local dev server
npm run build    # production build
npm run studio   # Sanity Studio locally
```

The studio is deployed by a separate Netlify site at [cms.priorsparkcommunitychurch.co.uk](https://cms.priorsparkcommunitychurch.co.uk), built from this repo with `cms/netlify.toml` (its "Package directory" is `cms`). It only rebuilds when the studio config, schemas or dependencies change.
