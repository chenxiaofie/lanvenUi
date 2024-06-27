import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';
import sideBar from '../../components/index';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'lanvenUi',
  description: 'web vue3.x ui组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: sideBar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/chenxiaofie/lanvenUi/' }],
  },
  vite: {
    // Vite 配置选项
    plugins: [
      vueJsx(),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, '../../../packages/components/assets/icons')],
        // default
        symbolId: 'icon-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../../packages/components'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: `@import "${resolve(
            __dirname,
            '../../../packages/components/assets/index.less',
          )}";`,
        },
      },
    },
  },
});
