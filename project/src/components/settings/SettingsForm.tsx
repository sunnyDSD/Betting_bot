import React from 'react';
import { useSettingsStore } from '../../lib/store';

export default function SettingsForm() {
  const { settings, updateSettings, toggleTheme } = useSettingsStore();

  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Trading Settings</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium">
            Minimum Profit Percentage
          </label>
          <input
            type="number"
            value={settings.minProfitPercentage}
            onChange={(e) =>
              updateSettings({ minProfitPercentage: Number(e.target.value) })
            }
            className="mt-1 block w-full input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Maximum Risk per Trade (%)
          </label>
          <input
            type="number"
            value={settings.maxRiskPerTrade}
            onChange={(e) =>
              updateSettings({ maxRiskPerTrade: Number(e.target.value) })
            }
            className="mt-1 block w-full input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Preferred Currency
          </label>
          <select
            value={settings.preferredCurrency}
            onChange={(e) =>
              updateSettings({ preferredCurrency: e.target.value })
            }
            className="mt-1 block w-full input"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Notifications</span>
          <button
            onClick={() =>
              updateSettings({ notifications: !settings.notifications })
            }
            className={`${
              settings.notifications ? 'bg-primary' : 'bg-muted'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span
              className={`${
                settings.notifications ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Dark Mode</span>
          <button
            onClick={toggleTheme}
            className={`${
              settings.theme === 'dark' ? 'bg-primary' : 'bg-muted'
            } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
          >
            <span
              className={`${
                settings.theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-1`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}