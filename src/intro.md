---
containerClass: home
home: true
portfolio: true
icon: heart
sidebar: false
avatar: avatar.png
welcome: 你好, 这里是
name: Twisuki
titles:
    - Hi, this is Twisuki~
    - Welcome to my page meow~

actions:
  - text: 快速上手
    link: ./get-started/
    icon: signs-post
    type: primary

  - text: 指南
    icon: lightbulb
    link: ./guide/

  - text: 案例
    icon: star
    link: ./demo/

highlights:
  - header: 易于安装
    image: /assets/image/box.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
      - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: 在 Markdown 中添加你想要的内容
    description: 我们扩展了标准的 CommonMark 规范，为你添加了成吨功能。
    image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 链接检查
        icon: clipboard-check
        details: 检查 Markdown 链接
        link: ./guide/markdown/others.html#link-check

      - title: 提示容器
        icon: box-archive
        details: 用样式装饰 Markdown 内容
        link: ./guide/markdown/stylize/hint.html

      - title: GFM 警告
        icon: bell
        details: GFM 风格的警告容器
        link: ./guide/markdown/stylize/alert.html

      - title: 选项卡
        icon: table-columns
        details: 使用选项卡对相似内容进行分组
        link: ./guide/markdown/content/tabs.html

      - title: 代码组
        icon: code
        details: 使用选项卡对相似代码进行分组
        link: ./guide/markdown/code/code-tabs.html

---

# 介绍 intro

