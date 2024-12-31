// 顶部导航栏
import { navbar } from "vuepress-theme-hope";

/** 笔记工具导航栏 */
let NoteTools = {
  text: "笔记工具",
  children: [
    {
      text: "VuePress",
      link: "/NoteTools/VuePress.md",
    },
    {
      text: "Markdown",
      link: "/NoteTools/Markdown.md",
    },
  ],
};

/** 通识 */
let general = {
  text: "通识",
  children: [
    {
      text: "通识",
      link: "/通识/通识.md",
    },
    {
      text: "Linux",
      link: "/通识/Linux/",
    },
  ],
};
/** 部署 */
let deploy = {
  text: "部署",
  children: [
    {
      text: "MYBlog",
      link: "/部署/MYBlog.md",
    },
    {
      text: "Linux",
      link: "/部署/Linux/",
    },
  ],
};

export const Navbar = navbar([
  NoteTools, // 笔记工具
  general, // 通识
  deploy, // 部署
]);
