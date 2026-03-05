'use client';

import { Project } from '@/types';
import { getStatusColor } from '@/lib/mockData';

interface PipelineOverviewProps {
  projects: Project[];
}

export default function PipelineOverview({ projects }: PipelineOverviewProps) {
  const totalProjects = projects.length;
  const successProjects = projects.filter(p => p.status === 'production' || (p.lastBuild?.status === 'success' && p.status === 'testing')).length;
  const inProgressProjects = projects.filter(p => p.status === 'development' || p.status === 'testing').length;
  const blockedProjects = projects.filter(p => p.status === 'blocked').length;
  
  const overallHealth = blockedProjects > 0 ? 'danger' : inProgressProjects > successProjects ? 'warning' : 'success';
  
  return (
    <div className="card p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Overview</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className={`text-3xl font-bold ${
            overallHealth === 'success' ? 'text-success-600' :
            overallHealth === 'warning' ? 'text-warning-600' :
            'text-danger-600'
          }`}>
            {totalProjects}
          </div>
          <div className="text-sm text-gray-500">Total Projects</div>
        </div>
        
        <div className="text-center">
          <div className={`text-3xl font-bold ${
            overallHealth === 'success' ? 'text-success-600' :
            overallHealth === 'warning' ? 'text-warning-600' :
            'text-danger-600'
          }`}>
            {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / totalProjects)}%
          </div>
          <div className="text-sm text-gray-500">Avg Progress</div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="status-indicator status-success" />
            <span className="text-sm text-gray-700">Ready/Testing</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{successProjects}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="status-indicator status-warning" />
            <span className="text-sm text-gray-700">In Progress</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{inProgressProjects}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="status-indicator status-danger" />
            <span className="text-sm text-gray-700">Blocked</span>
          </div>
          <span className="text-sm font-medium text-gray-900">{blockedProjects}</span>
        </div>
      </div>
      
      {blockedProjects > 0 && (
        <div className="mt-4 p-3 bg-danger-50 border border-danger-200 rounded-lg">
          <div className="flex items-center gap-2 text-danger-700">
            <span className="text-sm font-medium">⚠️ Attention Required</span>
          </div>
          <p className="text-sm text-danger-600 mt-1">
            {blockedProjects} project{blockedProjects > 1 ? 's' : ''} blocked and need{blockedProjects > 1 ? '' : 's'} immediate attention
          </p>
        </div>
      )}
    </div>
  );
}