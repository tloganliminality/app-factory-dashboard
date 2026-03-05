import { Project, BuildStatus } from '@/types';

export const mockProjects: Project[] = [
  {
    id: 'wildcall',
    name: 'WildCall',
    version: 'v2.1',
    status: 'testing',
    progress: 85,
    lastBuild: {
      timestamp: '2024-03-05T10:30:00Z',
      status: 'success',
      duration: 180
    },
    repository: 'tloganliminality/bird-call-trainer',
    deploymentUrl: 'https://wildcall-staging.railway.app',
    description: 'Bird call identification and training app'
  },
  {
    id: 'pantry',
    name: 'Pantry App',
    version: 'v1.3',
    status: 'development',
    progress: 60,
    lastBuild: {
      timestamp: '2024-03-05T09:15:00Z',
      status: 'in-progress',
      duration: 45
    },
    repository: 'tloganliminality/pantry-app',
    deploymentUrl: 'https://pantry-dev.railway.app',
    description: 'Pantry management and meal planning'
  },
  {
    id: 'ma-practice',
    name: 'MA Practice',
    version: 'v1.0',
    status: 'blocked',
    progress: 25,
    lastBuild: {
      timestamp: '2024-03-04T16:45:00Z',
      status: 'failed',
      duration: 30
    },
    repository: 'tloganliminality/ma-practice',
    description: 'Ski instructor movement analysis'
  }
];

export const mockBuildStatuses: BuildStatus[] = [
  {
    projectId: 'wildcall',
    status: 'success',
    timestamp: '2024-03-05T10:30:00Z',
    duration: 180,
    branch: 'main',
    commit: 'abc123f'
  },
  {
    projectId: 'pantry',
    status: 'in-progress',
    timestamp: '2024-03-05T09:15:00Z',
    branch: 'feature/meal-planning',
    commit: 'def456a'
  },
  {
    projectId: 'ma-practice',
    status: 'failed',
    timestamp: '2024-03-04T16:45:00Z',
    duration: 30,
    branch: 'main',
    commit: 'ghi789b'
  }
];

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'success':
    case 'production':
      return 'success';
    case 'testing':
    case 'development':
    case 'in-progress':
      return 'warning';
    case 'failed':
    case 'blocked':
      return 'danger';
    default:
      return 'neutral';
  }
};

export const formatDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
};

export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};