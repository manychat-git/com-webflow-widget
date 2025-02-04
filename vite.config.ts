import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,
    strictPort: true
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'ComGraph',
      formats: ['iife'],
      fileName: () => 'graph.min.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        },
        format: 'iife',
        inlineDynamicImports: true,
        extend: true,
        name: 'ComGraph'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
      },
      format: {
        comments: false
      }
    },
    target: 'es2015'
  }
}));
