import React from 'react';
import { TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';

export default function Home() {
  const stats = [
    {
      title: 'Total Profit',
      value: '$2,847.23',
      change: '+12.5%',
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Active Opportunities',
      value: '23',
      change: '+5',
      icon: TrendingUp,
      color: 'bg-blue-500',
    },
    {
      title: 'Risk Level',
      value: 'Low',
      change: 'Stable',
      icon: AlertTriangle,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your arbitrage betting control center</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Balance</h2>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">$25,000.00</span>
          <span className="ml-2 text-sm text-gray-500">USD</span>
        </div>
        <div className="mt-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-3/4"></div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            75% of funds currently available for trading
          </div>
        </div>
      </div>
    </div>
  );
}