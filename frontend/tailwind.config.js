/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundColor: {
        'gray-light': 'rgba(166, 166, 166, var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
};
