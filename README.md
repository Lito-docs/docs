# Lito Demo

A comprehensive demo of Lito - Beautiful documentation sites from Markdown.

## Overview

This repository contains a sample documentation site built with [Lito](https://github.com/Lito-docs/cli), showcasing its features and capabilities.

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
   git clone https://github.com/Lito-docs/docs.git
   cd sample-demo
   ```

2. Install dependencies (if any):

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npx --yes @litodocs/cli dev -i .
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Development with Custom Configuration

You can customize your documentation on-the-fly using CLI options:

```bash
# Custom branding and colors
npx --yes @litodocs/cli dev -i . \
  --name "My Custom Docs" \
  --description "Custom documentation site" \
  --primary-color "#0066CC" \
  --accent-color "#00CC66"
```

**Available CLI Options:**

- `--name <name>` - Set project name
- `--description <description>` - Set project description
- `--primary-color <color>` - Set primary theme color (hex)
- `--accent-color <color>` - Set accent theme color (hex)
- `--favicon <path>` - Set favicon path
- `--logo <path>` - Set logo path
- `-p, --port <number>` - Dev server port (default: 4321)

### Building for Production

To create a production build:

```bash
npx --yes @litodocs/cli build -i .
```

Optimize for your hosting provider:

```bash
# Vercel
npx --yes @litodocs/cli build -i . --provider vercel

# Netlify
npx --yes @litodocs/cli build -i . --provider netlify

# Cloudflare (SSR)
npx --yes @litodocs/cli build -i . --provider cloudflare --rendering server
```

## Deployment

Lito simplifies deployment with provider-specific optimizations.

### GitHub Pages (Automated)

The project is automatically deployed to GitHub Pages using GitHub Actions when pushing to the `main` branch.

### Vercel, Netlify, & Cloudflare

Use the `--provider` flag during build to automatically generate the necessary configuration files (`vercel.json`, `netlify.toml`) and install required adapters.

```bash
npx --yes @litodocs/cli build -i . --provider <provider_name>
```

### Manual Deployment

For other platforms, use:

```bash
npx --yes @litodocs/cli build -i .
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
