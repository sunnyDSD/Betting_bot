import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Portfolio() {
  const activeBets = [
    {
      id: 1,
      event: 'Manchester United vs Arsenal',
      invested: 1000,
      expectedReturn: 1038,
      profit: 3.8,
      status: 'In Progress',
      timeLeft: '1h 30m',
    },
    {
      id: 2,
      event: 'Lakers vs Warriors',
      invested: 1500,
      expectedReturn: 1543.50,
      profit: 2.9,
      status: 'In Progress',
      timeLeft: '45m',
    },
  ];

  const completedBets = [
    {
      id: 3,
      event: 'PSG vs Real Madrid',
      invested: 2000,
      actualReturn: 2084,
      profit: 4.2,
      status: 'Completed',
      date: '2024-03-14',
    },
    {
      id: 4,
      event: 'Nadal vs Federer',
      invested: 1200,
      actualReturn: 1238.40,
      profit: 3.2,
      status: 'Completed',
      date: '2024-03-13',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Portfolio</h1>
        <p className="mt-2 text-gray-600">Track your active and completed bets</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Bets</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invested</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Return</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Left</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeBets.map((bet) => (
                <tr key={bet.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bet.event}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bet.invested}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bet.expectedReturn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="flex items-center text-green-600">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      {bet.profit}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet.timeLeft}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Completed Bets</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invested</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual Return</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {completedBets.map((bet) => (
                <tr key={bet.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bet.event}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bet.invested}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${bet.actualReturn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="flex items-center text-green-600">
                      <ArrowUpRight className="w-4 h-4 mr-1" />
                      {bet.profit}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}