import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
const fs = require('fs');
const path = require('path');

export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'lanvenUi',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'ant-design-vue'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: ({ name }: any) =>
            name.endsWith('.vue') ? `${name.slice(0, -4)}.js` : `${name}.js`, // 自定义入口文件
          preserveModules: true,
          preserveModulesRoot: './',
          exports: 'named',
          //配置打包根目录
          dir: './lanvenUi/es',
          globals: {
            vue: 'Vue',
          },
        },
      ],
      plugins: [
        {
          name: 'merge-css',
          generateBundle(_: any, bundle: any) {
            const outputDirectory = path.resolve(__dirname, 'lanvenUi/es'); // 调整输出目录
            const outputCssFile = path.resolve(outputDirectory, 'lanvenUi.css');
            let mergedCss = '';

            for (const fileName in bundle) {
              if (bundle[fileName].type === 'asset' && fileName.endsWith('.css')) {
                //@ts-ignore
                mergedCss += bundle[fileName].source;
                delete bundle[fileName]; // 删除原始的 CSS 文件
              }
            }

            if (!fs.existsSync(outputDirectory)) {
              fs.mkdirSync(outputDirectory, { recursive: true });
            }

            fs.writeFileSync(outputCssFile, mergedCss);
          },
        },
      ],
    },
    lib: {
      entry: './index.ts',
      name: 'lanvenUi',
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${resolve(__dirname, './assets/index.less')}";`,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      outputDir: [resolve(__dirname, './lanvenUi/es/')],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
      skipDiagnostics: false,
      cleanVueFileName: true,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [(resolve(__dirname), './assets/icons')], // 与本地储存地址一致
      // 指定symbolId格式
      symbolId: 'icon-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname),
    },
  },
});
