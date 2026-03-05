'use client';

import { BuildStatus as BuildStatusType } from '@/types';
import { getStatusColor, formatTimestamp, formatDuration } from '@/lib/mockData';

interface BuildStatusProps {
  builds: BuildStatusType[];
}

export default function BuildStatus({ builds }: BuildStatusProps) {
  return (
    <div className="card p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Build Status</h2>
      <div className="space-y-3">
        {builds.map((build, index) => {
          const statusColor = getStatusColor(build.status);
          const project = build.projectId === 'wildcall' ? 'WildCall' :
                          build.projectId === 'pantry' ? 'Pantry App' :
                          build.projectId === 'ma-practice' ? 'MA Practice' : 
                          build.projectId;
          
          return (
            <div key={`${build.projectId}-${index}`} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors duration-200">
              <div className={`status-indicator status-${statusColor}`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900 truncate">{project}</span>
                  {build.branch && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                      {build.branch}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{formatTimestamp(build.timestamp)}</span>
                  {build.duration && (
                    <span>{formatDuration(build.duration)}</span>
                  )}
                  {build.commit && (
                    <span className="font-mono">{build.commit}</span>
                  )}
                </div>
              </div>
              <div className={`text-xs font-medium px-2 py-1 rounded ${
                statusColor === 'success' ? 'bg-success-100 text-success-700' :
                statusColor === 'warning' ? 'bg-warning-100 text-warning-700' :
                statusColor === 'danger' ? 'bg-danger-100 text-danger-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {build.status === 'in-progress' ? 'Building...' : build.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}