import React from 'react';
import { Twitter, Github, Linkedin, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-auto border-t border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Acme Corp. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <span className="sr-only">Help Center</span>
                <HelpCircle className="w-5 h-5" />
            </a>
            <div className="h-4 w-px bg-gray-200"></div>
            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
            </a>
        </div>
      </div>
    </footer>
  );
};