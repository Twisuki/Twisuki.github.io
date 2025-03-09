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
      children: [
        {
          text: "开发",
          prefix: "dev/",
          icon: "gear",
          collapsible: true,
          children: "structure"
        },
        {
          text: "学习",
          prefix: "study/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "生活",
          prefix: "life/",
          collapsible: true,
          children: "structure"
        },
        {
          text: "其他",
          prefix: "other/",
          collapsible: true,
          children: "structure"
        }
      ],
    },
    {
      text: "工具 kites",
      icon: "gears",
      prefix: "kits/",
      children: "structure",
    }
  ],
});
