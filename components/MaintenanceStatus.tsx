import React from 'react';
import { CheckCircle2, RefreshCw, AlertCircle } from 'lucide-react';

export const MaintenanceStatus: React.FC = () => {
  const progress = 85;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-8 md:p-10 w-full animate-float">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50">
            <RefreshCw className="w-6 h-6 text-teal-600 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Migration in Progress</h3>
            <p className="text-sm text-gray-500">Updating database schema & security patches</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-600">Overall Completion</span>
                <span className="text-teal-600">{progress}%</span>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-teal-500 rounded-full relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] transform -skew-x-12" style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}></div>
                </div>
            </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <StatusStep 
                title="Backup Data" 
                status="completed" 
            />
            <StatusStep 
                title="Server Upgrade" 
                status="in-progress" 
            />
            <StatusStep 
                title="Verification" 
                status="pending" 
            />
        </div>
      </div>
    </div>
  );
};

interface StatusStepProps {
    title: string;
    status: 'completed' | 'in-progress' | 'pending';
}

const StatusStep: React.FC<StatusStepProps> = ({ title, status }) => {
    let icon;
    let colorClass;
    let textClass;

    switch (status) {
        case 'completed':
            icon = <CheckCircle2 className="w-5 h-5 text-teal-500" />;
            colorClass = "border-teal-200 bg-teal-50";
            textClass = "text-teal-900";
            break;
        case 'in-progress':
            icon = <RefreshCw className="w-5 h-5 text-teal-600 animate-spin" />;
            colorClass = "border-teal-500 ring-1 ring-teal-500 ring-offset-2 bg-white";
            textClass = "text-teal-700 font-semibold";
            break;
        case 'pending':
            icon = <AlertCircle className="w-5 h-5 text-gray-300" />;
            colorClass = "border-gray-100 bg-gray-50";
            textClass = "text-gray-400";
            break;
    }

    return (
        <div className={`flex items-center space-x-3 p-3 rounded-xl border ${colorClass} transition-all duration-300`}>
            <div className="flex-shrink-0">
                {icon}
            </div>
            <span className={`text-sm ${textClass}`}>{title}</span>
        </div>
    );
}