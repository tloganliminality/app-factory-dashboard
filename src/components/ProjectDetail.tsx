'use client';

import { Project } from '@/types';
import { getStatusColor, formatTimestamp, formatDuration } from '@/lib/mockData';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const statusColor = getStatusColor(project.status);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center p-4 safe-area-bottom">
      <div className="bg-white rounded-t-lg sm:rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`status-indicator status-${statusColor}`} />
            <h2 className="text-xl font-semibold text-gray-900">{project.name}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 touch-target"
          >
            ✕
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Project Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Version:</span>
                <span className="text-gray-900">{project.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  statusColor === 'success' ? 'bg-success-100 text-success-700' :
                  statusColor === 'warning' ? 'bg-warning-100 text-warning-700' :
                  statusColor === 'danger' ? 'bg-danger-100 text-danger-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Progress:</span>
                <span className="text-gray-900">{project.progress}%</span>
              </div>
              {project.repository && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Repository:</span>
                  <span className="text-gray-900 font-mono text-xs truncate max-w-[150px]">
                    {project.repository}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          {project.description && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          )}
          
          {project.lastBuild && (
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Last Build</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    getStatusColor(project.lastBuild.status) === 'success' ? 'bg-success-100 text-success-700' :
                    getStatusColor(project.lastBuild.status) === 'warning' ? 'bg-warning-100 text-warning-700' :
                    getStatusColor(project.lastBuild.status) === 'danger' ? 'bg-danger-100 text-danger-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.lastBuild.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="text-gray-900">{formatTimestamp(project.lastBuild.timestamp)}</span>
                </div>
                {project.lastBuild.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-gray-900">{formatDuration(project.lastBuild.duration)}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            {project.deploymentUrl && (
              <button className="btn btn-primary w-full">
                🚀 View Deployment
              </button>
            )}
            {project.repository && (
              <button className="btn btn-secondary w-full">
                📱 View Repository
              </button>
            )}
            <button 
              className={`btn w-full ${
                project.lastBuild?.status === 'failed' ? 'btn-warning' : 'btn-secondary'
              }`}
            >
              🔄 Rebuild
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}