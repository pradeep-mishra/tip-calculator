/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};
