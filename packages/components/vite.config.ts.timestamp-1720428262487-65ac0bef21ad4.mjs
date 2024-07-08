// vite.config.ts
import { defineConfig } from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/vite@5.2.10_@types+node@20.12.11_less@4.1.3/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.10_vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.12.11_rollup@4.17.2_typescript@5.5.2_vite@5.2.10/node_modules/vite-plugin-dts/dist/index.mjs";
import { resolve } from "path";
import DefineOptions from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/unplugin-vue-define-options@1.4.5_rollup@4.17.2_vue@3.2.47/node_modules/unplugin-vue-define-options/dist/vite.mjs";
import vueJsx from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.10_vue@3.2.47/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///D:/devLog/lanvenUi/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.2.10/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { existsSync, mkdirSync, writeFileSync } from "fs";
var __vite_injected_original_dirname = "D:\\devLog\\lanvenUi\\packages\\components";
var vite_config_default = defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "lanven-ui",
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue", "ant-design-vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: ({ name }) => name.endsWith(".vue") ? `${name.slice(0, -4)}.js` : `${name}.js`,
          // 自定义入口文件
          preserveModules: true,
          preserveModulesRoot: "./",
          exports: "named",
          //配置打包根目录
          dir: "./lanven-ui/es",
          globals: {
            vue: "Vue"
          }
        }
      ],
      plugins: [
        {
          name: "merge-css",
          generateBundle(_, bundle) {
            const outputDirectory = resolve(__vite_injected_original_dirname, "lanvenUi/es");
            const outputCssFile = resolve(outputDirectory, "lanvenUi.css");
            let mergedCss = "";
            for (const fileName in bundle) {
              if (bundle[fileName].type === "asset" && fileName.endsWith(".css")) {
                mergedCss += bundle[fileName].source;
                delete bundle[fileName];
              }
            }
            if (!existsSync(outputDirectory)) {
              mkdirSync(outputDirectory, { recursive: true });
            }
            writeFileSync(outputCssFile, mergedCss);
          }
        }
      ]
    },
    lib: {
      entry: "./index.ts",
      name: "lanven-ui"
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: `@import "${resolve(__vite_injected_original_dirname, "./assets/index.less")}";`
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    dts({
      outDir: [resolve(__vite_injected_original_dirname, "./lanven-ui/es/")],
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      // tsconfigPath: '../../tsconfig.json',
      // skipDiagnostics: false,
      compilerOptions: {
        declaration: true
      },
      cleanVueFileName: true
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [(resolve(__vite_injected_original_dirname), "./assets/icons")],
      // 与本地储存地址一致
      // 指定symbolId格式
      symbolId: "icon-[name]"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname)
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZXZMb2dcXFxcbGFudmVuVWlcXFxccGFja2FnZXNcXFxcY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcZGV2TG9nXFxcXGxhbnZlblVpXFxcXHBhY2thZ2VzXFxcXGNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2RldkxvZy9sYW52ZW5VaS9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBEZWZpbmVPcHRpb25zIGZyb20gJ3VucGx1Z2luLXZ1ZS1kZWZpbmUtb3B0aW9ucy92aXRlJztcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBleGlzdHNTeW5jLCBta2RpclN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJ1aWxkOiB7XHJcbiAgICB0YXJnZXQ6ICdtb2R1bGVzJyxcclxuICAgIC8vXHU2MjUzXHU1MzA1XHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHJcbiAgICBvdXREaXI6ICdsYW52ZW4tdWknLFxyXG4gICAgLy9cdTUzOEJcdTdGMjlcclxuICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgICAvL2Nzc1x1NTIwNlx1NzlCQlxyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWyd2dWUnLCAnYW50LWRlc2lnbi12dWUnXSxcclxuICAgICAgaW5wdXQ6IFsnaW5kZXgudHMnXSxcclxuICAgICAgb3V0cHV0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZm9ybWF0OiAnZXMnLFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICh7IG5hbWUgfTogYW55KSA9PlxyXG4gICAgICAgICAgICBuYW1lLmVuZHNXaXRoKCcudnVlJykgPyBgJHtuYW1lLnNsaWNlKDAsIC00KX0uanNgIDogYCR7bmFtZX0uanNgLCAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcclxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcclxuICAgICAgICAgIHByZXNlcnZlTW9kdWxlc1Jvb3Q6ICcuLycsXHJcbiAgICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgICAgLy9cdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcclxuICAgICAgICAgIGRpcjogJy4vbGFudmVuLXVpL2VzJyxcclxuICAgICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgICAgdnVlOiAnVnVlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdtZXJnZS1jc3MnLFxyXG4gICAgICAgICAgZ2VuZXJhdGVCdW5kbGUoXzogYW55LCBidW5kbGU6IGFueSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXREaXJlY3RvcnkgPSByZXNvbHZlKF9fZGlybmFtZSwgJ2xhbnZlblVpL2VzJyk7IC8vIFx1OEMwM1x1NjU3NFx1OEY5M1x1NTFGQVx1NzZFRVx1NUY1NVxyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXRDc3NGaWxlID0gcmVzb2x2ZShvdXRwdXREaXJlY3RvcnksICdsYW52ZW5VaS5jc3MnKTtcclxuICAgICAgICAgICAgbGV0IG1lcmdlZENzcyA9ICcnO1xyXG5cclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcclxuICAgICAgICAgICAgICBpZiAoYnVuZGxlW2ZpbGVOYW1lXS50eXBlID09PSAnYXNzZXQnICYmIGZpbGVOYW1lLmVuZHNXaXRoKCcuY3NzJykpIHtcclxuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgbWVyZ2VkQ3NzICs9IGJ1bmRsZVtmaWxlTmFtZV0uc291cmNlO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGJ1bmRsZVtmaWxlTmFtZV07IC8vIFx1NTIyMFx1OTY2NFx1NTM5Rlx1NTlDQlx1NzY4NCBDU1MgXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWV4aXN0c1N5bmMob3V0cHV0RGlyZWN0b3J5KSkge1xyXG4gICAgICAgICAgICAgIG1rZGlyU3luYyhvdXRwdXREaXJlY3RvcnksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3cml0ZUZpbGVTeW5jKG91dHB1dENzc0ZpbGUsIG1lcmdlZENzcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiAnLi9pbmRleC50cycsXHJcbiAgICAgIG5hbWU6ICdsYW52ZW4tdWknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBsZXNzOiB7XHJcbiAgICAgICAgY2hhcnNldDogZmFsc2UsXHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiJHtyZXNvbHZlKF9fZGlybmFtZSwgJy4vYXNzZXRzL2luZGV4Lmxlc3MnKX1cIjtgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICBEZWZpbmVPcHRpb25zKCksXHJcbiAgICBkdHMoe1xyXG4gICAgICBvdXREaXI6IFtyZXNvbHZlKF9fZGlybmFtZSwgJy4vbGFudmVuLXVpL2VzLycpXSxcclxuICAgICAgLy9cdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTc2ODR0c2NvbmZpZy5qc29uXHU0RTNBXHU2MjExXHU0RUVDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCXHU2Mzg5LFx1NTk4Mlx1Njc5Q1x1NEUwRFx1OTE0RFx1N0Y2RSxcdTRGNjBcdTRFNUZcdTUzRUZcdTRFRTVcdTU3Mjhjb21wb25lbnRzXHU0RTBCXHU2NUIwXHU1RUZBdHNjb25maWcuanNvblxyXG4gICAgICAvLyB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5qc29uJyxcclxuICAgICAgLy8gc2tpcERpYWdub3N0aWNzOiBmYWxzZSxcclxuICAgICAgY29tcGlsZXJPcHRpb25zOiB7XHJcbiAgICAgICAgZGVjbGFyYXRpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsZWFuVnVlRmlsZU5hbWU6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgLy8gXHU2MzA3XHU1QjlBXHU5NzAwXHU4OTgxXHU3RjEzXHU1QjU4XHU3Njg0XHU1NkZFXHU2ODA3XHU2NTg3XHU0RUY2XHU1OTM5XHJcbiAgICAgIGljb25EaXJzOiBbKHJlc29sdmUoX19kaXJuYW1lKSwgJy4vYXNzZXRzL2ljb25zJyldLCAvLyBcdTRFMEVcdTY3MkNcdTU3MzBcdTUwQThcdTVCNThcdTU3MzBcdTU3NDBcdTRFMDBcdTgxRjRcclxuICAgICAgLy8gXHU2MzA3XHU1QjlBc3ltYm9sSWRcdTY4M0NcdTVGMEZcclxuICAgICAgc3ltYm9sSWQ6ICdpY29uLVtuYW1lXScsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcmVzb2x2ZShfX2Rpcm5hbWUpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UyxTQUFTLG9CQUFvQjtBQUMzVSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFlBQVk7QUFDbkIsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyxZQUFZLFdBQVcscUJBQXFCO0FBUHJELElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLElBRVIsUUFBUTtBQUFBO0FBQUEsSUFFUixRQUFRO0FBQUE7QUFBQSxJQUVSLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxPQUFPLGdCQUFnQjtBQUFBLE1BQ2xDLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLFFBQVE7QUFBQSxVQUNSLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxNQUN0QixLQUFLLFNBQVMsTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJO0FBQUE7QUFBQSxVQUM3RCxpQkFBaUI7QUFBQSxVQUNqQixxQkFBcUI7QUFBQSxVQUNyQixTQUFTO0FBQUE7QUFBQSxVQUVULEtBQUs7QUFBQSxVQUNMLFNBQVM7QUFBQSxZQUNQLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixlQUFlLEdBQVEsUUFBYTtBQUNsQyxrQkFBTSxrQkFBa0IsUUFBUSxrQ0FBVyxhQUFhO0FBQ3hELGtCQUFNLGdCQUFnQixRQUFRLGlCQUFpQixjQUFjO0FBQzdELGdCQUFJLFlBQVk7QUFFaEIsdUJBQVcsWUFBWSxRQUFRO0FBQzdCLGtCQUFJLE9BQU8sUUFBUSxFQUFFLFNBQVMsV0FBVyxTQUFTLFNBQVMsTUFBTSxHQUFHO0FBRWxFLDZCQUFhLE9BQU8sUUFBUSxFQUFFO0FBQzlCLHVCQUFPLE9BQU8sUUFBUTtBQUFBLGNBQ3hCO0FBQUEsWUFDRjtBQUVBLGdCQUFJLENBQUMsV0FBVyxlQUFlLEdBQUc7QUFDaEMsd0JBQVUsaUJBQWlCLEVBQUUsV0FBVyxLQUFLLENBQUM7QUFBQSxZQUNoRDtBQUVBLDBCQUFjLGVBQWUsU0FBUztBQUFBLFVBQ3hDO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxRQUNULGdCQUFnQixZQUFZLFFBQVEsa0NBQVcscUJBQXFCLENBQUM7QUFBQSxNQUN2RTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDRixRQUFRLENBQUMsUUFBUSxrQ0FBVyxpQkFBaUIsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSTlDLGlCQUFpQjtBQUFBLFFBQ2YsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLElBQ3BCLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBO0FBQUEsTUFFbkIsVUFBVSxFQUFFLFFBQVEsZ0NBQVMsR0FBRyxpQkFBaUI7QUFBQTtBQUFBO0FBQUEsTUFFakQsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxnQ0FBUztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
