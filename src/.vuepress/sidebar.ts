import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    {
      text: "笔记 notes",
      icon: "book",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
    {
      text: "工具 kites",
      icon: "gears",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
