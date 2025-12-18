# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean black and yellow theme with smooth animations and transitions.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects

## 📁 Project Structure

```
Personal-Website/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/              # Custom React hooks
│   │   └── useIntersectionObserver.ts
│   ├── data/               # Data files
│   │   └── portfolioData.ts
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Theme

- **Background**: Deep black (`#0a0a0a`)
- **Primary Accent**: Yellow (`#facc15`, `#ffd700`)
- **Text**: Grayscale with yellow accents
- **Design**: Minimal, developer-focused with subtle animations

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized static files ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### Updating Content

Edit the data file at `src/data/portfolioData.ts` to update:
- Personal information (name, email, location, etc.)
- Projects
- Experience items
- Skills

### Replacing Image Placeholders

Project images are currently placeholders. To add real images:

1. Add your images to `public/images/projects/` directory
2. Update the `Project` interface in `src/types/index.ts` to include an `imageUrl` field
3. Update `src/components/Projects.tsx` to use the image:

```tsx
<img 
  src={project.imageUrl} 
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

### Changing Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  'dark-bg': '#0a0a0a',
  'yellow-primary': '#facc15',
  // ... other colors
}
```

## 🚢 Deployment

### Cloudflare Pages

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect your repository to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project"
   - Connect your Git repository

3. **Configure build settings:**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 or higher

4. **Deploy:**
   - Cloudflare will automatically build and deploy on every push to your main branch

### AWS S3 + CloudFront

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to S3:**
   ```bash
   # Install AWS CLI if not already installed
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

3. **Configure S3 bucket:**
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for React Router compatibility)
   - Configure bucket policy for public read access

4. **Set up CloudFront:**
   - Create a CloudFront distribution
   - Set origin to your S3 bucket
   - Set default root object to `index.html`
   - Configure error pages:
     - 403 → 200 → `/index.html`
     - 404 → 200 → `/index.html`

5. **Optional: Custom Domain:**
   - Add your domain to CloudFront
   - Configure DNS records to point to CloudFront distribution

### Alternative: AWS CLI Script

Create a deployment script `deploy.sh`:

```bash
#!/bin/bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

Make it executable:
```bash
chmod +x deploy.sh
```

## 🎯 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Viewport-based animations (fade-in, slide-in)
- ✅ Hover effects on interactive elements
- ✅ Contact form with validation
- ✅ Accessibility considerations (reduced motion support)
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Production-ready build output

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Troubleshooting

### Build Errors

- Ensure Node.js version is 18 or higher
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check that all TypeScript types are properly defined

### Styling Issues

- Clear browser cache
- Ensure Tailwind CSS is properly configured in `tailwind.config.js`
- Check that `index.css` imports Tailwind directives

## 📄 License

This project is open source and available for personal use.

## 👤 Author

Shahzaib Nadeem - Computer Engineering Student at University of the Pacific

---

**Note**: Remember to update the contact form submission handler in `src/components/Contact.tsx` to connect to your backend service or email service provider (e.g., Formspree, EmailJS, or your own API).
