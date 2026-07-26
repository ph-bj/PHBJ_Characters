import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      '__BUILD_VERSION__': JSON.stringify(new Date().getTime().toString()),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // --- Vendor libraries ---
            if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/recharts/') || id.includes('node_modules/victory-')) {
              return 'vendor-recharts';
            }
            if (id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) {
              return 'vendor-motion';
            }
            if (id.includes('node_modules/lucide-react/')) {
              return 'vendor-lucide';
            }
            if (id.includes('node_modules/d3') || id.includes('node_modules/internmap') || id.includes('node_modules/delaunator') || id.includes('node_modules/robust-predicates')) {
              return 'vendor-d3';
            }

            // --- Chapter translations: split into groups of 10 ---
            if (id.includes('/chapterTranslations/')) {
              const m = id.match(/chapterTranslations(\d+)\.ts/);
              if (m) {
                const num = parseInt(m[1], 10);
                const group = Math.ceil(num / 10); // 1-10, 11-20, etc.
                return `data-translations-${group}`;
              }
              return 'data-translations-index';
            }

            // --- Questions data: isolate the 3 massive files ---
            if (id.includes('/questions/data/qinyan-story-per-chapter.ts')) {
              return 'data-q-qinyan-story';
            }
            if (id.includes('/questions/data/ziyu-story-per-chapter.ts')) {
              return 'data-q-ziyu-story';
            }
            if (id.includes('/questions/data/tian-chunhang-su-huifang.ts')) {
              return 'data-q-tian-chunhang';
            }
            if (id.includes('/questions/')) {
              return 'data-questions';
            }

            if (id.includes('/appreciationData/')) {
              return 'data-appreciation';
            }

            // --- Large individual data modules ---
            if (id.includes('/relationships.ts')) {
              return 'data-relationships';
            }
            if (id.includes('/worksData.json')) {
              return 'data-works';
            }
            if (id.includes('/characterAppearances.ts')) {
              return 'data-appearances';
            }
            if (id.includes('/lacunae.ts')) {
              return 'data-lacunae';
            }
            if (id.includes('/data.ts') && id.includes('/src/')) {
              return 'data-core';
            }
            if (id.includes('/englishWorkTitles.ts') || id.includes('/nameChips.ts')) {
              return 'data-core';
            }
            if (id.match(/\/summaries_\d+to\d+\.ts/) || id.includes('/chapterSummaries.ts')) {
              return 'data-summaries';
            }
            if (id.includes('/prefaceTranslation.ts') || id.includes('/chapterMeta.json') || id.includes('/chapters.ts')) {
              return 'data-chapters';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      allowedHosts: true,
    },
  };
});
