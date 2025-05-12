import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
 base: '/Rick_And_Morty/',
  plugins: [react()],
})
