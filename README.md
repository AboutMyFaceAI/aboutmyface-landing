# AboutMyFace AI - Landing Page

Simple, elegant landing page for the AboutMyFace AI mobile app.

## Features

- **Landing Page**: Clean hero section with app download link and feature highlights
- **Privacy Policy**: Required for App Store submission
- **Terms of Service**: Legal compliance for mobile app
- **Static Export**: Optimized for fast loading on Vercel

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- CSS (no heavy frameworks)
- Static site generation

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to preview

## Deployment to Vercel

### Quick Deploy (Recommended)

1. Push this repository to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Click "Deploy" (no configuration needed!)

### Connect Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add `aboutmyface.ai`
3. Follow DNS instructions to point your domain to Vercel

### Alternative: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
aboutmyface-landing/
├── app/
│   ├── page.tsx           # Landing page
│   ├── privacy/
│   │   └── page.tsx       # Privacy Policy
│   ├── terms/
│   │   └── page.tsx       # Terms of Service
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── next.config.ts         # Next.js configuration (static export)
├── package.json
└── README.md
```

## Important Notes

- Static export enabled (`output: 'export'`)
- Privacy and Terms pages are publicly accessible (required for App Store)
- Update App Store link in `app/page.tsx` once app is published
- All styling is done with CSS classes in `globals.css`

## Customization

### Update App Store Link

Edit `app/page.tsx` line 13 to add your actual App Store URL:

```tsx
href="https://apps.apple.com/app/YOUR-APP-ID"
```

### Change Colors

Edit `app/globals.css` to modify the color scheme:
- Primary: `#16c2d5`
- Background: `#1a1a2e`
- Secondary background: `#16213e`

### Add Content

All content is in the respective page components. Simply edit the text in:
- `app/page.tsx` - Landing page content
- `app/privacy/page.tsx` - Privacy policy text
- `app/terms/page.tsx` - Terms of service text

## Support

For questions or issues, contact support@aboutmyface.ai
