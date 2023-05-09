---
title: windows删除文件夹下所有文件
editLink: true
prev:
  text: '消除异步函数的传染性'
  link: '/articles/消除异步函数的传染性'
---

# {{ $frontmatter.title }}

windows命令

## 查看自己有多少个node_modules
> >首先进入有很多项目的目录

``` cmd
FOR /d /r . %d in (node_modules,.history) DO @IF EXIST "%d" echo %d"
```

## 删除目录中所有找到的node_modules和.history文件夹
> >警告！这个步骤会删除所有名字为node_modules 的文件夹

``` cmd
FOR /d /r . %d in (node_modules,.history) DO @IF EXIST "%d" rmdir /s /q "%d"
```
