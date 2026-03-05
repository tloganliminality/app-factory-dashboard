'use client';

import { Project } from '@/types';
import { getStatusColor, formatTimestamp } from '@/lib/mockData';

interface ProjectCardProps {
  project: Project;
  onProjectClick: (project: Project) => void;
}

export default function ProjectCard({ project, onProjectClick }: ProjectCardProps) {
  const statusColor = getStatusColor(project.status);
  
  return (
    <div 
      className="card p-4 cursor-pointer hover:shadow-md transition-shadow duration-200 touch-target"
      onClick={() => onProjectClick(project)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{project.name}</h3>
          <p className="text-sm text-gray-500">{project.version}</p>
        </div>
        <div className={`status-indicator status-${statusColor}`} />
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              statusColor === 'success' ? 'bg-success-500' :
              statusColor === 'warning' ? 'bg-warning-500' :
              statusColor === 'danger' ? 'bg-danger-500' :
              'bg-gray-400'
            }`}
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          statusColor === 'success' ? 'bg-success-100 text-success-700' :
          statusColor === 'warning' ? 'bg-warning-100 text-warning-700' :
          statusColor === 'danger' ? 'bg-danger-100 text-danger-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {project.status}
        </span>
        {project.lastBuild && (
          <span className="text-gray-500">
            {formatTimestamp(project.lastBuild.timestamp)}
          </span>
        )}
      </div>
    </div>
  );
}