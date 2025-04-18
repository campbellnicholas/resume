import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'sepia' | 'high-contrast' | 'system';

interface ThemeRegistry {
  [key: string]: {
    name: string;
    description: string;
    isSystem?: boolean;
  };
}

export const themeRegistry: ThemeRegistry = {
  light: {
    name: 'Light',
    description: 'Default light theme',
  },
  dark: {
    name: 'Dark',
    description: 'Dark theme for low-light environments',
  },
  sepia: {
    name: 'Sepia',
    description: 'Warm, eye-friendly theme',
  },
  'high-contrast': {
    name: 'Contrast',
    description: 'High contrast theme for improved readability',
  },
  system: {
    name: 'System',
    description: 'Follow system color scheme',
    isSystem: true,
  },
};

interface ThemeContextType {
  theme: Theme;
  availableThemes: Theme[];
  setTheme: (theme: Theme) => void;
  getCurrentTheme: () => Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider - Provides theme context to the application
 * @param {ReactNode} children - Child components that will have access to theme context
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Initialize theme from localStorage or system preference
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme in themeRegistry) {
      return savedTheme as Theme;
    }
    return 'system';
  });

  // Get available themes (excluding system if it's not supported)
  const availableThemes = Object.keys(themeRegistry) as Theme[];

  // Get the actual theme to apply (resolves 'system' to light/dark)
  const getCurrentTheme = (): Theme => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  };

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const currentTheme = getCurrentTheme();
    
    // Remove all theme classes
    document.documentElement.classList.remove(...Object.keys(themeRegistry));
    
    // Add the current theme class
    document.documentElement.classList.add(currentTheme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const currentTheme = getCurrentTheme();
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(currentTheme);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, availableThemes, setTheme, getCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme - Custom hook for accessing theme context
 * @returns {ThemeContextType} Theme context with current theme and theme management functions
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 