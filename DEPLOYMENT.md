# Deployment Guide - Aquapharm Website

## Pre-Deployment Checklist

- ✅ All pages created and tested
- ✅ Responsive design verified
- ✅ Navigation menus working
- ✅ Forms functional
- ✅ SEO metadata added
- ✅ Sitemap.xml generated
- ✅ Robots.txt configured
- ✅ Performance optimized

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the company behind Next.js and provides the best hosting for Next.js applications.

#### Steps:

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd aquapharm-nextjs
vercel
```

4. **Production Deploy**
```bash
vercel --prod
```

#### Advantages:
- Zero configuration
- Automatic HTTPS
- Global CDN
- Automatic scaling
- Built-in analytics
- Free SSL certificates
- Continuous deployment from Git

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

### Option 3: AWS Amplify

1. Connect your Git repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### Option 4: Traditional Node.js Hosting

For VPS or dedicated servers:

1. **Build the application**
```bash
npm run build
```

2. **Install PM2 (Process Manager)**
```bash
npm install -g pm2
```

3. **Start with PM2**
```bash
pm2 start npm --name "aquapharm" -- start
```

4. **Configure Nginx as reverse proxy**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Create `.env.local` file for environment-specific settings:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Aquapharm

# Contact Form (if using email service)
EMAIL_SERVICE_API_KEY=your-key-here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

### 1. Image Optimization
- All images are automatically optimized by Next.js
- Use appropriate image formats (WebP)
- Implement lazy loading (built-in)

### 2. Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components

### 3. Caching Strategy
- Static pages cached at CDN edge
- API routes cached appropriately
- Browser caching configured

### 4. Bundle Analysis
```bash
npm install @next/bundle-analyzer
```

Add to `next.config.ts`:
```typescript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:
```bash
ANALYZE=true npm run build
```

## Post-Deployment Tasks

### 1. Domain Configuration
- Point your domain to deployment platform
- Configure SSL certificate
- Set up www redirect

### 2. SEO Setup
- Submit sitemap to Google Search Console
- Verify domain ownership
- Set up Google Analytics
- Configure meta tags

### 3. Monitoring
- Set up error tracking (Sentry)
- Configure uptime monitoring
- Enable performance monitoring

### 4. Backup Strategy
- Regular database backups (if applicable)
- Code repository backups
- Media files backup

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Monitoring Checklist
- [ ] Check website performance weekly
- [ ] Monitor error logs
- [ ] Review analytics data
- [ ] Update content regularly
- [ ] Test forms and functionality
- [ ] Verify SSL certificate validity
- [ ] Check mobile responsiveness

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment Issues
- Check Node.js version compatibility
- Verify environment variables
- Review build logs
- Check DNS configuration

## Support

For deployment support:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: Next.js Discord

---

**Last Updated**: November 2025
**Version**: 1.0.0
