/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-0': '#050914',
        'bg-1': '#0b1220',
        panel: 'rgba(255,255,255,0.04)',
        'panel-border': 'rgba(201,207,217,0.14)',
        cyan: '#4dd8f0',
        violet: '#b15cff',
        silver: '#c9cfd9',
        'text-hi': '#f3f6fa',
        'text-mid': '#aeb8c8',
        'text-lo': '#7c879a',
      },
      fontFamily: {
        head: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
}
