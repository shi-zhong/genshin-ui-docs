import { defineClientConfig } from "@vuepress/client";
import Demo from "./components/Demo.vue";
import DemoBlock from "./components/DemoBlock.vue";
import "./styles/index.css";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
  setup() {
  },
  rootComponents: []
});
