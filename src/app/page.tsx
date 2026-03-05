'use client';

import { useState } from 'react';
import DashboardTabs from '@/components/DashboardTabs';
import ProjectCard from '@/components/ProjectCard';
import BuildStatus from '@/components/BuildStatus';
import QuickActions from '@/components/QuickActions';
import PipelineOverview from '@/components/PipelineOverview';
import ProjectDetail from '@/components/ProjectDetail';
import { mockProjects, mockBuildStatuses } from '@/lib/mockData';
import { Project, QuickAction } from '@/types';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'dev' | 'production'>('dev');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active tab
  const filteredProjects = mockProjects.filter(project => {
    if (activeTab === 'dev') {
      return project.status === 'development' || project.status === 'testing' || project.status === 'blocked';
    }
    return project.status === 'production' || project.status === 'maintenance';
  });

  const quickActions: QuickAction[] = [
    {
      id: 'rebuild-all',
      label: 'Rebuild All Projects',
      icon: '🔄',
      action: () => alert('Rebuilding all projects...')
    },
    {
      id: 'deploy-staging',
      label: 'Deploy to Staging',
      icon: '🚀',
      action: () => alert('Deploying to staging...')
    },
    {
      id: 'run-tests',
      label: 'Run Test Suite',
      icon: '🧪',
      action: () => alert('Running tests...')
    },
    {
      id: 'view-logs',
      label: 'View Build Logs',
      icon: '📝',
      action: () => alert('Opening build logs...')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 safe-area-top safe-area-bottom">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">App Factory</h1>
            <p className="text-sm text-gray-500">Development Dashboard</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">
              {new Date().toLocaleDateString()}
            </div>
            <div className="text-xs text-gray-400">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="px-4 py-4">
        <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="px-4 pb-4">
        {activeTab === 'dev' ? (
          <div className="space-y-6">
            {/* Projects Grid */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onProjectClick={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* 4-Quadrant Layout for Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PipelineOverview projects={filteredProjects} />
              <BuildStatus builds={mockBuildStatuses} />
            </div>

            {/* Quick Actions - Full Width on Mobile */}
            <QuickActions actions={quickActions} />
          </div>
        ) : (
          // Production Dashboard (Placeholder)
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Production Dashboard</h2>
            <p className="text-gray-500 mb-4">Coming in Phase 2</p>
            <div className="text-sm text-gray-400">
              Production monitoring, deployment status, and live metrics will be available here.
            </div>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}