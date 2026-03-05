#!/bin/bash

# App Factory Dashboard - Instant Railway Deployment
# This script will deploy the dashboard to Railway immediately

set -e

echo "🚀 App Factory Dashboard - Instant Deploy to Railway"
echo "================================================="

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "📦 Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Check if logged in
if ! railway whoami &> /dev/null; then
    echo "🔐 Railway login required..."
    echo "Visit: https://railway.com/cli-login"
    echo "Or run: railway login --browserless"
    echo ""
    echo "After login, run this script again."
    exit 1
fi

echo "✅ Railway CLI authenticated"

# Initialize Railway project if needed
if [ ! -f "railway.toml" ]; then
    echo "📋 Initializing Railway project..."
    railway init
fi

# Set up environment variables
echo "⚙️ Configuring environment..."
railway variables set NODE_ENV=production
railway variables set PORT=3000
railway variables set NEXT_PUBLIC_APP_ENV=production

# Build the project
echo "🔨 Building production bundle..."
npm run build

# Deploy to Railway
echo "🚀 Deploying to Railway..."
railway up

# Get the deployment URL
echo "🌐 Getting deployment URL..."
DEPLOY_URL=$(railway domain)

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo "========================"
echo ""
echo "📱 Live Dashboard URL: $DEPLOY_URL"
echo ""
echo "🎯 Features Available:"
echo "  ✅ Mobile-responsive design"
echo "  ✅ PWA installation (Add to Home Screen)"
echo "  ✅ Development & Production dashboards"
echo "  ✅ Touch-optimized interface"
echo "  ✅ Real-time project status"
echo ""
echo "📱 To install as mobile app:"
echo "  1. Open $DEPLOY_URL on mobile"
echo "  2. Tap 'Add to Home Screen'"
echo "  3. Enjoy native app experience!"
echo ""
echo "🚀 Dashboard is now live and ready for business use!"