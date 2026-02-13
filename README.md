# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎨 Styled with Tailwind CSS
- 🔧 Component-based architecture with Radix UI
- 📧 Contact form integration (see CONTACT_FORM_SETUP.md)

## Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mdyunus05786/personal_portfolio_1.git
cd personal_portfolio_1
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

Build the application:

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
1. Builds the project when changes are pushed to `main`
2. Deploys the built files to GitHub Pages

### Setup GitHub Pages (One-time)

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch
5. The workflow will run automatically and deploy your site

Your portfolio will be available at: `https://mdyunus05786.github.io/personal_portfolio_1/`

### Manual Deployment (Optional)

If you want to manually trigger a deployment:

1. Go to the **Actions** tab in your GitHub repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the `main` branch
4. Click "Run workflow" button

### How It Works

- **Local Development**: Uses `/` as the base path (no prefix)
- **GitHub Pages**: Uses `/personal_portfolio_1/` as the base path
- The base path is automatically configured using the `GITHUB_PAGES` environment variable
- All your local development commands (`npm run dev`, `npm run build`) work without any changes

### Troubleshooting

**Site not loading on GitHub Pages?**
- Make sure GitHub Pages is enabled in repository settings
- Check that the workflow ran successfully in the Actions tab
- Verify the source is set to "GitHub Actions"
- Wait a few minutes for GitHub's CDN to update

**Assets not loading?**
- The `.nojekyll` file in the `public` folder ensures proper asset loading
- This file is automatically copied to the build output

## Project Structure

```
personal_portfolio_1/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/             # React components
│   ├── styles/                 # CSS and styling files
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Application entry point
├── public/
│   └── .nojekyll               # GitHub Pages configuration
├── build/                      # Production build output (gitignored)
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
└── package.json                # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

## Contact Form Setup

For instructions on setting up the contact form, see [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md).

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI Components
- Framer Motion
- Lucide Icons

## License

This project is open source and available under the MIT License.
