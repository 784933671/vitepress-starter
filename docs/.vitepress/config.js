export default {
  lang: "zh-CN",
  title: "前端开发教程", //站点标题
  description: "前端开发教程", //mate标签description，多用于搜索引擎抓取摘要
  base: "/course/", //部署站点的基础路径
  outDir: "../course", //输出目录
  lastUpdated: true, //最后更新时间
  themeConfig: {
    siteTitle: "前端开发教程",
    logo: "/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "vue相关", link: "/articles/组件库环境搭建" },
      { text: "环境配置", link: "/circumstances/nvm" },
      { text: "公司", link: "/company/svn" },
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
              text: "nvm实现多版本node自由切换",
              link: "/circumstances/nvm",
            },
            {
              text: "yarn npm 设置淘宝镜像",
              link: "/circumstances/yarn npm 设置淘宝镜像",
            },
            {
              text: "git常用命令",
              link: "/circumstances/git常用命令",
            },
          ],
        },
      ],
      "/company/": [
        {
          text: "svn管理",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "svn地址",
              link: "/company/svn",
            },
          ],
        },
      ],
    },
  },
};
