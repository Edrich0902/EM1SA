import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  if (mode === 'production') {
    return {
      mode: mode,
      plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        Components({
          resolvers: [PrimeVueResolver()],
        }),
      ],
      appType: 'spa',
      build: {
        outDir: './dist/prod',
        sourcemap: true,
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    }
  }

  return {
    mode: mode,
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
    ],
    appType: 'spa',
    build: {
      outDir: './dist/dev',
      sourcemap: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
