import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    exclude: [...configDefaults.exclude, 'e2e/*'],  // Optional: excludes 'e2e' tests if necessary
  },
  server: {
    watch: {
      usePolling: true, // Enable polling to detect changes in Docker
      interval: 100,    // Poll every 100ms
    },
    host: true,          // This is necessary when running inside Docker
    strictPort: true,
    port: 5173,
    hmr: {
      clientPort: 5173,  // Ensures hot module replacement (HMR) works on the exposed port
    }
  }
})