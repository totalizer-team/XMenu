import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.png'],
  themeConfig: {
    title: 'XMenu',
    name: 'XMenu',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/totalizer-team/XMenu',
    },
    footer: 'Open-source MIT Licensed | Copyright © 2024-present',
  },
  locales: [{ id: 'en-US', name: 'English', suffix: '' }],
});
