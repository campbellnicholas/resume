import { memo, useState, useRef, useEffect } from 'react';
import { useTheme, themeRegistry, Theme } from '../context/ThemeContext';

/**
 * ThemeToggle - Component for selecting and switching between themes
 */
const ThemeToggle = memo(() => {
  const { theme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="theme-toggle-container flex items-center gap-2" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-button"
        aria-label="Select theme"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {theme === 'system' ? '🖥️' : 
         theme === 'dark' ? '🌙' : 
         theme === 'sepia' ? '📜' : 
         theme === 'high-contrast' ? '⚡' : '☀️'}
      </button>
      
      <button
        onClick={() => window.print()}
        className="theme-toggle-button print:hidden"
        aria-label="Print resume"
      >
        🖨️
      </button>
      
      {isOpen && (
        <div className="theme-dropdown" role="menu">
          {availableThemes.map((themeKey) => (
            <button
              key={themeKey}
              onClick={() => handleThemeChange(themeKey)}
              className={`theme-option ${theme === themeKey ? 'active' : ''}`}
              role="menuitem"
              aria-label={themeRegistry[themeKey].description}
            >
              <span className="theme-icon">
                {themeKey === 'system' ? '🖥️' : 
                 themeKey === 'dark' ? '🌙' : 
                 themeKey === 'sepia' ? '📜' : 
                 themeKey === 'high-contrast' ? '⚡' : '☀️'}
              </span>
              <span className="theme-name">{themeRegistry[themeKey].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle; 