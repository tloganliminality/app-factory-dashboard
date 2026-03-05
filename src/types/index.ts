export interface Project {
  id: string;
  name: string;
  version: string;
  status: 'development' | 'testing' | 'blocked' | 'production' | 'maintenance';
  progress: number;
  lastBuild?: {
    timestamp: string;
    status: 'success' | 'failed' | 'in-progress';
    duration?: number;
  };
  repository?: string;
  deploymentUrl?: string;
  description?: string;
}

export interface BuildStatus {
  projectId: string;
  status: 'success' | 'failed' | 'in-progress' | 'queued';
  timestamp: string;
  duration?: number;
  branch?: string;
  commit?: string;
  logs?: string[];
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  disabled?: boolean;
}

export interface DashboardTab {
  id: 'dev' | 'production';
  label: string;
  icon: string;
}

export type StatusColor = 'success' | 'warning' | 'danger' | 'neutral';