# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎨 Styled with Tailwind CSS
- 🔧 Component-based architecture with Radix UI
- 📧 Contact form integration (see CONTACT_FORM_SETUP.md)

## Getting Started

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

## Development

Run the development server:

```bash
npm run dev
```

The application will open at `http://localhost:3000`

## Production Build

### Build the application

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

### Preview the production build locally

```bash
npm run preview
```

or

```bash
npm start
```

The production build will be served at `http://localhost:3000`

## Deploying to a Server

### Option 1: Using the Built-in Preview Server

After building the application, you can run it on a server using:

```bash
npm run build
npm start
```

The server will listen on port 3000 and will be accessible on the network.

### Option 2: Using a Static File Server

Since this is a static website, you can deploy the `build` directory to any static hosting service:

- **Netlify**: Drag and drop the `build` folder or connect your Git repository
- **Vercel**: Connect your Git repository for automatic deployments
- **GitHub Pages**: Use the `build` folder as the source
- **AWS S3 + CloudFront**: Upload the `build` folder to an S3 bucket
- **Nginx/Apache**: Serve the `build` folder as static files

### Option 3: Using Nginx on a VPS

1. Build the application:
```bash
npm run build
```

2. Copy the `build` folder to your server:
```bash
scp -r build/* user@your-server:/var/www/portfolio
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    root /var/www/portfolio;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Restart Nginx:
```bash
sudo systemctl restart nginx
```

## Project Structure

```
personal_portfolio_1/
├── src/
│   ├── components/     # React components
│   ├── styles/         # CSS and styling files
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── build/              # Production build output
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Alias for preview (run production build)

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
