import React, { useState, useEffect } from 'react';
import { MaintenanceStatus } from './components/MaintenanceStatus';
import { BackgroundPattern } from './components/BackgroundPattern';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between bg-gradient-to-br from-gray-50 to-teal-50 selection:bg-teal-500 selection:text-white overflow-y-auto">
      {/* Background Decorative Elements */}
      <BackgroundPattern />

      {/* Main Content Container */}
      <main className={`relative z-10 w-full max-w-5xl px-6 pt-12 pb-24 flex flex-col items-center justify-center flex-grow transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        
        <Header />

        <div className="mt-12 w-full max-w-2xl">
          <MaintenanceStatus />
        </div>

        <div className="mt-12 w-full max-w-md">
          <Newsletter />
        </div>

      </main>

      <Footer />
    </div>
  );
}