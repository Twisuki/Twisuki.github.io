import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Twisuki",
  description: "Twisuki的个人主页",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
