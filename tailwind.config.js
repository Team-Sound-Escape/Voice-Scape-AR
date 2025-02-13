/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        perspective: {
          '1000': '1000px',
        },
        transformOrigin: {
          'top-center': 'top center',
        }
      },
    },
    plugins: [],
  }