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
      prefix: "kits/",
      children: "structure",
    }
  ],
});
