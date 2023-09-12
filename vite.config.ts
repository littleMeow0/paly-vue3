import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite' // 按需API自动导入
import Components from 'unplugin-vue-components/vite' // 按需组件自动导入


// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({ 
      imports: ['vue','vue-router','@vueuse/core'],
      dirs: ['src/modules/i18n'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,

      // imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/head', '@vueuse/core'],
      // dts: 'src/auto-imports.d.ts',
      // dirs: ['src/composables', 'src/stores'],
      // vueTemplate: true,
    }),
    Components({ 
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
