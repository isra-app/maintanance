import React from 'react';
import { Server, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-teal-500/20 blur-lg animate-pulse-slow"></div>
        <div className="relative bg-white p-4 rounded-2xl shadow-md border border-teal-100">
            <Server className="w-10 h-10 text-teal-600" />
        </div>
        <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-sm">
             <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          System Update
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
          We are currently enhancing our infrastructure to serve you better. 
          Expect a faster, more secure experience when we return.
        </p>
      </div>
    </div>
  );
};