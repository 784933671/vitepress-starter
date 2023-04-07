export default {
  lang: "zh-CN",
  title: "前端开发教程", //站点标题
  description: "前端开发教程", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "前端开发教程",
    logo: "/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "vue相关", link: "/articles/组件库环境搭建" },
      { text: "环境配置", link: "/circumstances/index" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          collapsible: true,
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
      "/circumstances/": [
        {
          text: "npm管理",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "npm包发布",
              link: "/circumstances/index",
            },
          ],
        },
      ],
    },
  },
};
