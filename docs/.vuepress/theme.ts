import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { sitemap } from "vuepress-theme-hope";

export default hopeTheme({
  hostname: "https://podongmaoyi.github.io/MyBlog/",

  author: {
    name: "破洞毛衣",
    url: "https://podongmaoyi.github.io/MyBlog/",
  },

  favicon: "/favicon.ico",

  // logo
  logo: "/logo.svg",

  // 主题色选择器
  themeColor: true,

  // 导航栏
  navbar: Navbar,
  // 侧边栏
  sidebar: Sidebar,

  // 页脚
  displayFooter: true,



  // 仓库链接
  repo: "PoDongMaoYi/MyBlog",
  // 文档仓库地址，默认同主题选项中的 repo
  docsRepo: "PoDongMaoYi/MyBlog",
  // 文档在仓库中的目录，默认为根目录
  docsDir: "docs",
  // 文档存放的分值，默认为 "main"
  docsBranch: "main",

  // 全屏
  fullscreen: true,

  markdown: {
    mermaid: true,
    plantuml: true,
    // 语法高亮
    highlighter: "shiki",
    math: {
      type: "katex", // 或 'mathjax'
    },
    tabs: true,
    // 与选项卡功能相同，但它是专门为代码块构建的。
    // 代码选项卡只会渲染 @tab 标记后的代码块，其他 Markdown 内容将被忽略
    codetabs: true,
    // 文件支持任务列表
    tasklist: true,
    // 支持标记 使用 == == 进行标记。请注意两边需要有空格
    mark: true,
  },

  // 插件相关
  plugins: {
    blog: {
      excerptLength: 0,
    },
    seo: true,
    // slimsearch: true,
    sitemap: {
      devHostname: "https://podongmaoyi.github.io/",
      hostname: "https://podongmaoyi.github.io/",
    },
    feed: {
      rss: true,
      atom: true,
      json: true,
      hostname: "https://podongmaoyi.github.io/",
    },
  },
});
