import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Opportunities from './pages/Opportunities';
import Portfolio from './pages/Portfolio';
import Settings from './pages/Settings';
import { useSettingsStore } from './lib/store';

export default function App() {
  const { settings } = useSettingsStore();

  useEffect(() => {
    // Update theme based on settings
    if (settings.theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      document.documentElement.classList.toggle('dark', settings.theme === 'dark');
    }
  }, [settings.theme]);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        <Navbar />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}