import React, { useState } from 'react';
import { Bell, ArrowRight, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="w-full text-center space-y-4">
        <h4 className="text-gray-900 font-medium flex items-center justify-center space-x-2">
            <Bell className="w-4 h-4 text-teal-500" />
            <span>Get notified when we are back online</span>
        </h4>

        <form onSubmit={handleSubmit} className="relative max-w-sm mx-auto">
            <div className="relative group">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    disabled={status === 'success'}
                    className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm disabled:bg-gray-50 disabled:text-gray-500"
                />
                <button
                    type="submit"
                    disabled={status !== 'idle' || !email}
                    className={`absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        status === 'success' 
                        ? 'bg-teal-500 text-white w-10' 
                        : 'bg-teal-600 text-white hover:bg-teal-700 w-10 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'
                    }`}
                >
                    {status === 'loading' ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : status === 'success' ? (
                        <Check className="w-4 h-4" />
                    ) : (
                        <ArrowRight className="w-4 h-4" />
                    )}
                </button>
            </div>
            {status === 'success' && (
                <p className="absolute -bottom-8 left-0 right-0 text-teal-600 text-sm font-medium animate-fade-in-up">
                    You're on the list! We'll ping you shortly.
                </p>
            )}
        </form>
    </div>
  );
};