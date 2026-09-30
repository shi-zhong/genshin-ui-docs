/** @format */
import { defineClientConfig } from '@vuepress/client';

import CssVariables from './components/StyleViewer.vue';
import WeaponDescribe from './components/WeaponDescribe.vue';
import ArtifactDescribe from './components/ArtifactDescribe.vue';
import TypeProps from './components/TypeProps.vue';
import TypeEmits from './components/TypeEmits.vue';

import GenshinUI from '@shi-zhong/genshin-ui';

import '@shi-zhong/genshin-ui/css';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册
    app.component('WeaponDescribe', WeaponDescribe);
    app.component('ArtifactDescribe', ArtifactDescribe);
    app.component('CssVariables', CssVariables);
    app.component('Props', TypeProps);
    app.component('Emits', TypeEmits);

    app.use(GenshinUI);
  },
  setup() {},
  layouts: {},
  rootComponents: [],
});
