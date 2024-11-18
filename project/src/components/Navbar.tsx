import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LineChart, Wallet, Settings } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/opportunities', icon: LineChart, label: 'Opportunities' },
    { to: '/portfolio', icon: Wallet, label: 'Portfolio' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold neon-text">ArbitrageBot</h1>
            <div className="flex space-x-4">
              {navItems.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-indigo-600/20 text-indigo-400 neon-glow'
                        : 'text-gray-300 hover:bg-indigo-600/10 hover:text-indigo-400'
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}