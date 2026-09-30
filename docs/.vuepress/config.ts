/** @format */
import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';
import vuePluginDemoPlus from './plugins/vuepress-plugin-demoblock-plus/index';
import sidebar, { ReadNextDirs } from './sidebar';
import { Version } from '@shi-zhong/genshin-ui';

const DateVersion = () => {
  const date = new Date();

  function padNumber(n: number, l: number = 2) {
    return n.toString().padStart(l, '0');
  }

  const month = padNumber(date.getMonth() + 1);
  const day = padNumber(date.getDate());

  const minutes = padNumber(date.getHours() * 60 + date.getMinutes(), 3);

  return `u${month}.${day}.${minutes}`;
};

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
      { text: 'v1.0.3', link: '' }, // 同步版本
      { text: DateVersion(), link: '' },
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
