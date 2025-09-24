import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    tailwindcss(),react()
  ],
  loader: {
      '.js': 'jsx',  // This enables JSX parsing for .js files
    },
    module.exports = {
  theme: {
    extend: {
      colors: {
        border: '#e5e5e5', // Example custom border color
      },
    },
  },
};
})