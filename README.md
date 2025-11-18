# SaveTokens Website

Official landing page for SaveTokens - We build tools to rescue tokens from inefficient formats.

## About

This website showcases the SaveTokens organization and our flagship project **AXON**, a next-generation data serialization format that achieves 60-95% token reduction for LLM interactions.

## Features

- **Interactive Demo**: Live JSON-to-AXON converter with real-time token savings calculation
- **Cost Calculator**: Calculate potential monthly/yearly savings based on your API usage
- **Code Examples**: Syntax-highlighted examples showing how to use AXON
- **Dark Mode**: Full dark mode support with persistence
- **Responsive Design**: Mobile-first, fully responsive layout
- **Fast & Lightweight**: Built with Astro for optimal performance

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.16
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Language**: TypeScript (strictest mode)
- **Deployment**: Ready for deployment to Vercel, Netlify, or any static host

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321/`

### Build

```bash
# Type check and build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── icon.png              # SaveTokens logo
│   └── savetokens_icon.ico   # Favicon
├── src/
│   ├── components/
│   │   ├── Hero.astro              # Hero section with headline
│   │   ├── InteractiveDemo.astro   # JSON-to-AXON converter
│   │   ├── CodeExamples.astro      # Code samples
│   │   ├── CostCalculator.astro    # ROI calculator
│   │   ├── Features.astro          # Features grid
│   │   └── Footer.astro            # Footer
│   ├── layouts/
│   │   └── Layout.astro            # Base layout
│   └── pages/
│       └── index.astro             # Homepage
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Components

### Hero
Main landing section with mission statement, key stats, and CTAs.

### InteractiveDemo
Live converter that demonstrates AXON compression with:
- Real-time JSON input
- AXON output with token counting
- Savings percentage calculation
- Example data buttons

### CodeExamples
Installation instructions and code samples showing:
- Basic usage
- Schema validation
- Type-safe encoding/decoding

### CostCalculator
Interactive calculator for estimating:
- Monthly API costs (JSON vs AXON)
- Token savings
- Annual cost savings
- Configurable compression rate and token pricing

### Features
Grid showcasing AXON's key benefits:
- Cost savings
- Type safety
- Compression algorithms
- Encoding modes
- Production readiness
- Open source license

Plus use cases for:
- LLM API calls
- RAG systems
- AI agents
- Chatbot context

### Footer
Links to:
- GitHub repositories
- Documentation
- Examples
- NPM package

## Deployment

### Build the site

```bash
npm run build
```

The static files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npx vercel
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Or connect your GitHub repository to Vercel/Netlify for automatic deployments.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Links

- **Website**: https://savetokens.dev
- **AXON Repository**: https://github.com/savetokens/axon
- **Organization**: https://github.com/savetokens
- **NPM Package**: https://www.npmjs.com/package/@axon-format/core
