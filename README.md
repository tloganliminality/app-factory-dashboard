# App Factory Dashboard

A mobile-first development dashboard for Troy's app development workflow.

## Features

### Development Dashboard
- **4-Quadrant Layout**: Optimized for mobile viewing
- **Project Cards**: Visual status indicators with progress tracking
- **Build Status**: Real-time monitoring of build processes
- **Pipeline Overview**: High-level project health metrics
- **Quick Actions**: Touch-optimized common tasks

### Mobile Optimization
- **Responsive Design**: Mobile-first with tablet and desktop support
- **Touch-Friendly**: 44px minimum tap targets
- **PWA Ready**: Installable on mobile home screen
- **Offline Capable**: Cached data for field access
- **Safe Areas**: Proper handling of notches and home indicators

### Current Project Status
- **WildCall v2.1**: Testing phase (85% complete)
- **Pantry App v1.3**: Development (60% complete)
- **MA Practice v1.0**: Blocked (25% complete)

## Technology Stack

- **Next.js 14**: React framework with app directory
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Mobile-first styling framework
- **Lucide React**: Consistent iconography
- **PWA**: Progressive Web App capabilities

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
The dashboard runs on `http://localhost:3000` and includes:
- Hot reload for development
- TypeScript checking
- ESLint configuration
- Mobile-responsive testing

### Deployment
Ready for deployment to Railway, Vercel, or any Node.js hosting platform:

```bash
# Build optimized production bundle
npm run build

# Deploy to Railway (recommended for this project)
railway deploy
```

## Architecture

### Component Structure
```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Main dashboard page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── DashboardTabs.tsx
│   ├── ProjectCard.tsx
│   ├── BuildStatus.tsx
│   ├── QuickActions.tsx
│   ├── PipelineOverview.tsx
│   └── ProjectDetail.tsx
├── lib/                # Utilities and mock data
│   └── mockData.ts
└── types/              # TypeScript definitions
    └── index.ts
```

### Data Flow
1. **Mock Data**: Static project and build status data
2. **State Management**: React useState for UI state
3. **Future API Integration**: Designed for easy backend connection

### Mobile Responsiveness
- **Breakpoints**: xs (475px), sm (640px), md (768px), lg (1024px)
- **Touch Targets**: Minimum 44px for accessibility
- **Safe Areas**: iOS notch and home indicator support
- **Viewport Optimization**: Proper scaling and zooming controls

## Future Integrations

### Phase 2: Production Dashboard
- Live deployment monitoring
- Performance metrics
- Error tracking
- User analytics

### Phase 3: Real Data Integration
- GitHub API for repository data
- CI/CD pipeline integration
- Railway deployment status
- Notion build specs integration

### Phase 4: Advanced Features
- Push notifications
- Real-time updates via WebSocket
- Offline data synchronization
- Advanced filtering and search

## Design System

### Color Palette
- **Primary**: Blue (#2563eb) for main actions
- **Success**: Green (#10b981) for healthy status
- **Warning**: Yellow (#f59e0b) for attention needed
- **Danger**: Red (#ef4444) for errors/blocked
- **Neutral**: Gray (#6b7280) for inactive states

### Typography
- **Headers**: System font stack, semibold weights
- **Body**: Regular system fonts for readability
- **Code**: Monospace for technical identifiers

### Status Indicators
- **Visual**: Color-coded dots and backgrounds
- **Accessible**: Text labels and proper contrast
- **Consistent**: Same colors across all components

## Professional Usage

This dashboard is designed for Troy's field access needs:
- **Quick Status Checks**: Immediate project health visibility
- **Touch Navigation**: Easy single-handed operation
- **Professional Appearance**: Suitable for client/partner meetings
- **Reliable Performance**: Optimized for mobile network conditions

The development dashboard provides the foundation for a complete app factory management system, starting with essential project monitoring and expanding to full production oversight.