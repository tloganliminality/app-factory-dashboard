# Deployment Guide

## Quick Deploy to Railway

1. **Install Railway CLI** (if not already installed):
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**:
   ```bash
   railway login
   ```

3. **Deploy from project directory**:
   ```bash
   cd app-factory-dashboard
   railway deploy
   ```

4. **Set up custom domain** (optional):
   ```bash
   railway domain
   ```

## Environment Configuration

### Production Environment Variables
Add these in Railway dashboard or via CLI:

```bash
# Optional: Analytics/monitoring
NEXT_PUBLIC_APP_ENV=production

# Optional: API endpoints (for future integrations)
NEXT_PUBLIC_API_URL=https://your-api.railway.app
```

## Build & Deploy Process

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
```

### Automatic Deployment
Railway will automatically:
1. Detect Next.js application
2. Install dependencies (`npm install`)
3. Build the application (`npm run build`)
4. Start production server (`npm start`)

## Mobile PWA Installation

Once deployed, users can install the dashboard as a mobile app:

### iOS (Safari)
1. Open the deployed URL in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

### Android (Chrome)
1. Open the deployed URL in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home Screen"
4. Tap "Add"

## Performance Optimization

### Production Checklist
- ✅ Next.js static optimization enabled
- ✅ Tailwind CSS purging configured
- ✅ Service Worker for PWA functionality
- ✅ Mobile-first responsive design
- ✅ Touch-optimized interface

### Monitoring
After deployment:
1. Test mobile responsiveness
2. Verify PWA installation works
3. Check touch interactions
4. Validate offline functionality

## Domain Configuration

For production use, configure a custom domain:

1. **Add CNAME record** in your DNS:
   ```
   dashboard.yourdomain.com -> your-app.railway.app
   ```

2. **Configure in Railway**:
   ```bash
   railway domain add dashboard.yourdomain.com
   ```

## Security Headers

Railway automatically provides:
- HTTPS/SSL certificates
- Security headers
- CDN optimization

## Future API Integration

The dashboard is designed for easy API integration:
- Update `mockData.ts` with real API calls
- Configure environment variables
- Add authentication if needed

Example API integration points:
- GitHub API for repository data
- CI/CD webhooks for build status
- Railway deployment status API