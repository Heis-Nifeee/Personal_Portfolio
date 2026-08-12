/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"],
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["'Inter'", "sans-serif"],
            mono: ["'Space Mono'", "monospace"],
          },
          colors: {
            border: 'hsl(var(--border))',
            background: '#0a0e17',
            foreground: '#f8fafc',
            primary: {
              DEFAULT: '#22d3ee',
              foreground: '#0a0e17'
            },
            cyan: {
              400: '#22d3ee',
              500: '#06b6d4',
            }
          },
          animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }
        }
      },
      plugins: [require("tailwindcss-animate")],
    };