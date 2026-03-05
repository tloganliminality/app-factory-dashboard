'use client';

import { DashboardTab } from '@/types';

interface DashboardTabsProps {
  activeTab: 'dev' | 'production';
  onTabChange: (tab: 'dev' | 'production') => void;
}

const tabs: DashboardTab[] = [
  { id: 'dev', label: 'Development', icon: '⚡' },
  { id: 'production', label: 'Production', icon: '🚀' }
];

export default function DashboardTabs({ activeTab, onTabChange }: DashboardTabsProps) {
  return (
    <div className="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium transition-colors duration-200 touch-target ${
            activeTab === tab.id
              ? 'bg-primary-600 text-white'
              : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
          }`}
        >
          <span className="text-lg">{tab.icon}</span>
          <span className="hidden xs:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}