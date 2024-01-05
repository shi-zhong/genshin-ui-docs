/** @format */
import { defaultTheme, defineUserConfig } from 'vuepress';
import vuePluginDemoPlus from 'vuepress-plugin-demoblock-plus';
import sidebar from './sidebar';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'GenshinUI',
  base: '/genshin-ui-docs/',
  description: '尝试还原原神中的一些UI(Web.Vue)',
  plugins: [
    vuePluginDemoPlus({
      scriptImports: [
        "import * as GenshinUI from '@shi-zhong/genshin-ui'",
        "import * as GenshinUIUtils from '@shi-zhong/genshin-ui/utils'",
      ],
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
        {
          searchValue: /import ({.*}) from '@shi-zhong\/genshin-ui\/utils'/g,
          replaceValue: ((s, s1) => `const ${s1} = GenshinUIUtils`) as any,
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
    navbar: [{ text: 'github', link: 'https://github.com/shi-zhong/genshin-ui' }],
    sidebar: sidebar([
      '/install',
      {
        text: 'UI',
        prefix: '/UI/',
        link: 'index.md',
        children: [
          'Button',
          'Card',
          'Highlight',
          'Loading',
          'Menu',
          'Message',
          'Modal',
          'Select',
          'Tabs',
          'Tags',
        ],
      },
      {
        text: '基础组件',
        prefix: '/Base/',
        link: 'index.md',
        children: ['Icon', 'ScrollView', 'Popover'],
      },
      {
        text: '工具函数',
        prefix: '/Utils/',
        children: ['MockDrag'],
      },
      {
        text: '额外资源',
        prefix: '/Extra/',
        children: ['Artifact', 'Element', 'Weapon', 'CSSVariables'],
      },
    ]),
  }),
  markdown: {
    code: {
      lineNumbers: false,
    },
  },
});
