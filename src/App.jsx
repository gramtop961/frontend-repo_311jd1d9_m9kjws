import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import PackageForm from './components/PackageForm';
import CalendlySection from './components/CalendlySection';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Services />
      <PackageForm />
      <CalendlySection />
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500">
          © {new Date().getFullYear()} Private Practice. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
