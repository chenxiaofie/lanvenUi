import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: true,
    rollupOptions: {
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: resolve(__dirname, './dist/lib'),
        },
      ],
    },
    lib: {
      entry: './index.ts',
      name: 'lanvenUiUtils',
    },
  },

  plugins: [
    dts({
      outDir: resolve(__dirname, './dist/es'),
      tsconfigPath: '../../tsconfig.json',
    }),
    dts({
      outDir: resolve(__dirname, './dist/lib'),
      tsconfigPath: '../../tsconfig.json',
    }),
  ],
});
