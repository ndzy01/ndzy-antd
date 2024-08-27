import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'https://www.ndzy01.com/ndzy-antd/',
  },
  html: {
    title: 'ndzy',
    favicon: 'https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png',
  },
});
