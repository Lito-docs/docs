# SuperDocs Demo

A comprehensive demo of SuperDocs - the open-source Mintlify alternative.

## Overview

This repository contains a sample documentation site built with [SuperDocs](https://github.com/superdocsai/superdocs), showcasing its features and capabilities.

## Features

- Zero-config documentation generation
- Built on Astro for maximum performance
- MDX support for rich content
- Customizable theming
- Automatic landing page generation
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/devrohit06/superdocs-demo.git
   cd sample-demo
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx --yes @devrohit06/superdocs dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To create a production build:

```bash
npx --yes @devrohit06/superdocs build -i .
```

This generates a `dist` folder with static files.

## Deployment

This project supports multiple deployment options:

### GitHub Pages (Automated)

The project is automatically deployed to GitHub Pages using GitHub Actions when pushing to the `main` branch.

**Setup**: Go to your repository Settings > Pages, and set the source to "GitHub Actions".

### Vercel

1. Import the repository in Vercel
2. Vercel will automatically detect the `vercel.json` configuration
3. Deploy!

### Netlify

1. Connect the repository in Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Deploy!

### Manual Deployment

For other platforms, use:

```bash
npx --yes @devrohit06/superdocs build -i .
```

Then deploy the `dist` folder to your hosting provider.

## Project Structure

```
sample-docs/
├── docs-config.json    # Site configuration
├── concepts/           # Core concepts documentation
├── getting-started/    # Getting started guides
├── guides/             # User guides
├── introduction/       # Introduction pages
└── reference/          # API reference
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is licensed under the MIT License.
