# Vercel Deployment Guide for SARO SEREYVICHEA Portfolio

## Pre-Deployment Checklist

### 1. Environment Variables

Set these in your Vercel dashboard under Project Settings > Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_NAME=SARO SEREYVICHEA
```

### 2. Build Configuration

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 3. Common Vercel Deployment Issues & Solutions

#### Issue 1: Build Failures

**Symptoms**: Build fails during deployment
**Solutions**:

- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build`
- Verify Node.js version compatibility

#### Issue 2: Image Optimization Errors

**Symptoms**: Images not loading or optimization errors
**Solutions**:

- Images are configured in `next.config.js`
- Ensure images are in the `public` folder
- Check image file sizes and formats

#### Issue 3: Environment Variables Not Working

**Symptoms**: Site works locally but not on Vercel
**Solutions**:

- Add environment variables in Vercel dashboard
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Redeploy after adding environment variables

#### Issue 4: SEO Meta Tags Not Working

**Symptoms**: Meta tags not appearing in search results
**Solutions**:

- Verify `SEO.tsx` component is properly imported
- Check that meta tags are in the `<Head>` component
- Test with browser dev tools

### 4. Deployment Steps

1. **Connect Repository**:

   - Go to Vercel dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:

   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Set Environment Variables**:

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_APP_NAME=SARO SEREYVICHEA
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Test the deployed site

### 5. Post-Deployment Verification

#### Check These Items:

- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Meta tags appear in page source
- [ ] Contact form works (if implemented)
- [ ] Mobile responsiveness
- [ ] Performance scores (use PageSpeed Insights)

#### SEO Verification:

- [ ] robots.txt accessible at `/robots.txt`
- [ ] sitemap.xml accessible at `/sitemap.xml`
- [ ] Meta tags in page source
- [ ] Structured data validation (use Google's Rich Results Test)

### 6. Troubleshooting Commands

```bash
# Test build locally
npm run build

# Check for linting errors
npm run lint

# Test production build
npm run start

# Update dependencies
npm update
```

### 7. Performance Optimization

#### Vercel-Specific Optimizations:

- Enable Vercel Analytics
- Use Vercel's Edge Functions if needed
- Optimize images with Next.js Image component
- Enable compression in `next.config.js`

#### SEO Performance:

- Submit sitemap to Google Search Console
- Monitor Core Web Vitals
- Test mobile usability
- Check page load speeds

### 8. Monitoring & Maintenance

#### Regular Checks:

- [ ] Site uptime monitoring
- [ ] Performance metrics
- [ ] SEO rankings for target keywords
- [ ] Security updates for dependencies

#### Monthly Tasks:

- [ ] Update dependencies
- [ ] Check Google Search Console
- [ ] Monitor analytics
- [ ] Test contact form functionality

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Contact Information

For technical issues with this portfolio:

- **Developer**: SARO SEREYVICHEA
- **Email**: sarosereyvichea@gmail.com
- **GitHub**: https://github.com/vichea-tech
