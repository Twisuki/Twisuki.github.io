import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "intro",
  "/notes/",
  "/kits/",
  "friend",
  {
    text: "项目 projects",
    icon: "star",
    children: [
      {
        text: "弦月档案",
        icon: "link",
        link: "https://twis.uk/yisibite",
      },
    ]
  }
]);
