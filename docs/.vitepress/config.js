import { defineConfig } from 'vitepress'
export default defineConfig({
  lang: "zh-CN",
  title: "前端开发教程", //站点标题
  description: "前端开发教程", //mate标签description，多用于搜索引擎抓取摘要
  base: "/", //部署站点的基础路径
  outDir: "dist", //输出目录
  lastUpdated: true, //最后更新时间
  cacheDir: './.vitepress/.vite', //缓存目录
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    search: {
      provider: 'local'
    },
    lastUpdatedText: '最后更新时间',
    siteTitle: "前端开发教程",
    logo: "/logo.png",
    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/articles/组件库环境搭建" },
      { text: "公司", link: "/company/svn" },
      { text: "gitee", link: "https://gitee.com/t784933671" },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            {
              text: "gulp的使用",
              link: "/articles/gulp的使用"
            },
          ],
        },
        {
          text: "vue教程",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "pina和vuex",
              link: "/articles/vue/pina和vuex",
            },
            {
              text: "自定义v-model",
              link: "/articles/vue/v-model",
            },
          ],
        },
        {
          text: "npm管理",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "nvm实现多版本node自由切换",
              link: "/articles/circumstances/nvm",
            },
            {
              text: "yarn npm 设置淘宝镜像",
              link: "/articles/circumstances/yarn_npm",
            }
          ],
        },
        {
          text: "git",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "git常用命令",
              link: "/articles/git/index",
            }
          ]
        },
        {
          text: "脚本",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "windows删除文件夹下所有文件",
              link: "/articles/command/index",
            }
          ]
        },
        {
          text: "其他",
          collapsible: true,//是否可以折叠
          collapsed: false,//默认展开
          items: [
            {
              text: "消除异步函数的传染性",
              link: "/articles/消除异步函数的传染性",
            },
            {
              text: "监听鼠标移入方向",
              link: "/articles/监听鼠标移入方向.md",
            },
            {
              text: "永远走不完的进度条",
              link: "/articles/永远走不完的进度条.md",
            },
          ],
        },
      ],

      "/company/": [
        {
          text: "创立公司",
          items: [
            {
              text: "svn地址",
              link: "/company/svn"
            },
            {
              text: "vpn相关",
              link: "/company/vpn"
            },
            {
              text: "bladex框架",
              link: "/company/bladex/bladex"
            },
            {
              text: "蓝湖",
              link: "/company/lanhu"
            },
          ]
        },
      ],
    },
  },
});
