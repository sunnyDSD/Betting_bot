import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
  minProfitPercentage: number;
  maxRiskPerTrade: number;
  preferredCurrency: string;
  notifications: boolean;
  theme: 'light' | 'dark' | 'system';
}

interface SettingsStore {
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: {
        minProfitPercentage: 2,
        maxRiskPerTrade: 10,
        preferredCurrency: 'USD',
        notifications: true,
        theme: 'dark',
      },
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      toggleTheme: () =>
        set((state) => ({
          settings: {
            ...state.settings,
            theme: state.settings.theme === 'dark' ? 'light' : 'dark',
          },
        })),
    }),
    {
      name: 'arbitrage-settings',
    }
  )
);