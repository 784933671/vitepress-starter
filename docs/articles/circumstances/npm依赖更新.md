---
layout: doc
---


## npm更新方式
**需要全局安装npm-check-updates，然后执行ncu -u命令，回车后即可开始更新**

``` cmd
npm install npm-check-updates --global
ncu -u
```

## yarn更新方式
**检测到需要更新的包后，空格键可以选择或取消单个需要更新的包，A键可以切换所有需要更新的依赖包，最后回车即可更新**

``` cmd

yarn upgrade-interactive --latest

```

## 更新单个依赖包
**以更新vue到最新版本为例**

``` cmd
npm更新方式

npm i --save vue@latest

yarn更新方式

yarn add vue@latest

```