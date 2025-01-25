import { createContext, PropsWithChildren, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';
import { Theme } from '../types/index.ts';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = 'theme';

export function ThemeProvider({ children }: PropsWithChildren) {
  const { value: theme, setStorageData: setTheme } = useLocalStorage<Theme>(
    THEME_STORAGE_KEY,
    Theme.DARK
  );

  useEffect(() => {
    document.body.classList.remove(Theme.DARK, Theme.LIGHT);
    document.body.classList.add(theme);
  }, [theme]);

  const setThemeForProvider = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeForProvider,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error(
      'useThemeContext has to be used within <ThemeContext.Provider>'
    );
  }

  return themeContext;
};
