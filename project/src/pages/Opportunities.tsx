import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import BetCard from '../components/BetCard';

export default function Opportunities() {
  const [filters, setFilters] = useState({
    sport: 'all',
    bookmaker: 'all',
    minProfit: 0,
  });

  const opportunities = [
    {
      id: 1,
      bookmaker1: 'Betfair',
      bookmaker2: 'Pinnacle',
      odds1: 2.15,
      odds2: 1.95,
      profit: 3.8,
      event: 'Manchester United vs Arsenal',
      timestamp: '2024-03-15 14:30',
      sport: 'Football',
      ev: 102.5,
      links: {
        bookmaker1: 'https://betfair.com/event/123',
        bookmaker2: 'https://pinnacle.com/event/456',
      },
    },
    {
      id: 2,
      bookmaker1: 'Bet365',
      bookmaker2: 'William Hill',
      odds1: 1.85,
      odds2: 2.25,
      profit: 2.9,
      event: 'Lakers vs Warriors',
      timestamp: '2024-03-15 20:00',
      sport: 'Basketball',
      ev: 98.7,
      links: {
        bookmaker1: 'https://bet365.com/event/789',
        bookmaker2: 'https://williamhill.com/event/012',
      },
    },
    {
      id: 3,
      bookmaker1: 'DraftKings',
      bookmaker2: 'FanDuel',
      odds1: 3.10,
      odds2: 1.45,
      profit: 4.2,
      event: 'Nadal vs Djokovic',
      timestamp: '2024-03-16 16:00',
      sport: 'Tennis',
      ev: 105.3,
      links: {
        bookmaker1: 'https://draftkings.com/event/345',
        bookmaker2: 'https://fanduel.com/event/678',
      },
    },
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    if (filters.sport !== 'all' && opp.sport !== filters.sport) return false;
    if (filters.bookmaker !== 'all' && 
        opp.bookmaker1 !== filters.bookmaker && 
        opp.bookmaker2 !== filters.bookmaker) return false;
    if (opp.profit < filters.minProfit) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Betting Opportunities</h1>
          <p className="mt-2 text-muted-foreground">
            Current arbitrage opportunities across markets
          </p>
        </div>
      </div>

      <div className="card p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search events..."
              className="input pl-9"
            />
          </div>
          
          <select
            className="input"
            value={filters.sport}
            onChange={(e) => setFilters({ ...filters, sport: e.target.value })}
          >
            <option value="all">All Sports</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
          </select>

          <select
            className="input"
            value={filters.bookmaker}
            onChange={(e) => setFilters({ ...filters, bookmaker: e.target.value })}
          >
            <option value="all">All Bookmakers</option>
            <option value="Betfair">Betfair</option>
            <option value="Pinnacle">Pinnacle</option>
            <option value="Bet365">Bet365</option>
          </select>

          <div className="relative">
            <input
              type="number"
              placeholder="Min. Profit %"
              className="input"
              value={filters.minProfit}
              onChange={(e) => setFilters({ ...filters, minProfit: Number(e.target.value) })}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opp) => (
          <BetCard key={opp.id} {...opp} />
        ))}
      </div>
    </div>
  );
}