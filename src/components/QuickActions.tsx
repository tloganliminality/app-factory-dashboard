'use client';

import { QuickAction } from '@/types';

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="card p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            disabled={action.disabled}
            className={`btn btn-secondary flex items-center justify-start gap-3 text-left ${
              action.disabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="text-lg">{action.icon}</span>
            <span className="font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}