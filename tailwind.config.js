/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#653C61',
          hover: '#4D2B49',
          dark: '#3A1E37',
          soft: '#F7F1F6',
          light: '#FBF8FA',
          muted: '#8D6E8B',
        },
        medical: {
          heading: '#171717',
          body: '#334155',
          secondary: '#475569',
          border: '#E7E7E7',
          lightBg: '#F8FAFC',
          cardBg: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(101, 60, 97, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -10px rgba(101, 60, 97, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'elevated': '0 20px 40px -15px rgba(101, 60, 97, 0.14), 0 8px 16px -4px rgba(0, 0, 0, 0.04)',
        'glow-brand': '0 10px 25px -5px rgba(101, 60, 97, 0.35)',
        'glow-soft': '0 15px 35px -10px rgba(101, 60, 97, 0.15)',
      }
    },
  },
  plugins: [],
}
