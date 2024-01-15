/** @format */
import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';
import vuePluginDemoPlus from 'vuepress-plugin-demoblock-plus';
import sidebar, { ReadNextDirs } from './sidebar';
import { Version } from '@shi-zhong/genshin-ui';

// read version

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'GenshinUI',
  base: '/genshin-ui-docs/',
  description: '尝试还原原神中的一些UI(Web.Vue)',
  plugins: [
    vuePluginDemoPlus({
      scriptImports: ["import * as GenshinUI from '@shi-zhong/genshin-ui'"],
      scriptReplaces: [
        {
          searchValue:
            /Object.defineProperty\(__returned__, '__isScriptSetup', { enumerable: false, value: true }\)/,
          replaceValue:
            "/** Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true }) */",
        },
        {
          searchValue: /import ({.*}) from '@shi-zhong\/genshin-ui'/g,
          replaceValue: ((s, s1) => `const ${s1} = GenshinUI`) as any,
        },
      ],
    }),
  ],
  pagePatterns: [
    '**/*.md',
    '!**/README.md',
    '!**/template.md',
    '!.vuepress',
    '!node_modules',
  ],
  open: false,
  theme: defaultTheme({
    navbar: [
      { text: 'github', link: 'https://github.com/shi-zhong/genshin-ui' },
      { text: Version, link: '' }, // 同步版本
    ],
    sidebar: sidebar([
      '/install',
      ...ReadNextDirs(['UI', 'Base', 'Utils', 'Extra']),
    ]),
  }),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1000,
      },
    },
  }),
});
