/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for themes
        'theme-text': 'var(--text-color)',
        'theme-bg': 'var(--background-color)',
        'theme-hover': 'var(--hover-color)',
        'theme-border': 'var(--border-color)',
        'theme-modal': 'var(--modal-background)',
        'theme-success': 'var(--success-color)',
        'theme-error': 'var(--error-color)',
      },
    },
  },
  plugins: [],
} 