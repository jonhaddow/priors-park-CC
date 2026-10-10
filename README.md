# Priors Park Community Church

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

Runs the [Priors Park Community Church](https://priorsparkcommunitychurch.co.uk/) site.

## Development

To install dependencies:

```
npm i
```

To run the site for local development:

```
npm run dev
```

To build the production output:

```
npm run build
```

## CMS

Content is managed in [Sanity](https://www.sanity.io/) (project `i6kx6v0q`). The studio config lives in `sanity.config.ts`, with schemas in `src/sanity/schemas/`.

To run the studio locally:

```
npm run studio
```

The studio is deployed by a separate Netlify site at [cms.priorsparkcommunitychurch.co.uk](https://cms.priorsparkcommunitychurch.co.uk), which builds from this repo using `cms/netlify.toml` (its "Package directory" is set to `cms`). It only rebuilds when the studio config, schemas or dependencies change.
