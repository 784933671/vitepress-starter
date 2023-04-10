---
layout: doc
---

## 1、下载

[下载地址](https://github.com/coreybutler/nvm-windows/releases "https://github.com/coreybutler/nvm-windows/releases")

## 2、安装nvm
**注意：安装之前必须完全卸载已安装的`node`**

>>安装完成后，在CMD命令窗口输入nvm -v,输出如下版本号即证明安装成功
```cmd
Running version 1.1.7.
```

``` cmd
nvm off                     //禁用node.js版本管理(不卸载任何东西)
nvm on                      //启用node.js版本管理
nvm install <version>       //安装指定版本node,例如nvm install 12.18.3
nvm uninstall <version>     //卸载指定版本node,例如nvm uninstall 12.18.3 
nvm list                    //显示所有安装的node.js版本
nvm list available          //显示可以安装的所有node.js的版本(windows系统)
nvm use <version>           //切换到使用指定的nodejs版本，例如nvm use 12.18.3
```
## 3、修改nvm配置文件（可选）
nvm安装完成后，打开nvm安装目录下的settings.txt文件:

***`root`和`path`分别是`nvm`和`node`的安装路径，这两个不要动，这是之前安装时根据你选择的路径自动生成的，这个配置文件默认也只有这两项。因为我没改配置文件，所以后面的4项我都没有，只是后来搜到了，就说一下，`arch`表示安装的`node`是多少位，`proxy`是设置代理，`node_mirror`是更改`nvm`下载`node`时的镜像，这里是设置为淘宝镜像，`npm_mirror`是更改`npm`下载依赖包的镜像，也是修改为了淘宝镜像。***

### 4、安装node

*   查看`nvm`支持安装的`node`版本

使用`nvm list available`

*   使用`nvm install 版本号`安装指定版本`node`

我刚开始没有使用查询指令，使用`nvm install 12.0.0`安装，结果出了问题，后来才知道，`nvm`支持安装的版本里面就没有`12.0.0`,其实`node`也没有`12.0.0`,所以这里一定要查询版本号之后再安装。我这里选择安装`12.18.3`。

```markdown
C:\Users\Silence>nvm install 12.18.3
Downloading node.js version 12.18.3 (64-bit)...
Complete
Creating D:\nvm\temp

Downloading npm version 6.14.6... Complete
Installing npm v6.14.6...

Installation complete. If you want to use this version, type

nvm use 12.18.3

```

这里同时安装了`node`和`npm`,因为我没修改下载镜像，所以速度很慢，如果介意可以修改下载镜像为淘宝镜像。

*   检测`node`和`npm`是否安装成功,如下显示则为成功：



```markdown
C:\Users\Silence>node -v
v12.18.3

C:\Users\Silence>npm -v
6.14.6
```

### 5、切换node版本

初次使用`nvm`安装`node`之后，必须先使用`nvm use 版本号`切换到已安装版本的`node`才可以

```markdown
C:\Users\Silence>nvm use 12.18.3
Now using node v12.18.3 (64-bit)

```

### 6、多版本node切换

为了演示多版本`node`切换，我这重复上面的第4步，安装一个最新版本的`node`

*   查看当前安装的所有`node`版本

```
C:\Users\Silence>nvm list

    14.7.0
  * 12.18.3 (Currently using 64-bit executable)


```

`*`号符表示的是当前使用的版本

*   切换不同版本的`noe`

```markdown
C:\Users\Silence>nvm use 14.7.0
Now using node v14.7.0 (64-bit)

C:\Users\Silence>nvm list

  * 14.7.0 (Currently using 64-bit executable)
    12.18.3

```

### 7、nvm常用指令

```markdown
nvm off                     //禁用node.js版本管理(不卸载任何东西)
nvm on                      //启用node.js版本管理
nvm install <version>       //安装指定版本node,例如nvm install 12.18.3
nvm uninstall <version>     //卸载指定版本node,例如nvm uninstall 12.18.3 
nvm list                    //显示所有安装的node.js版本
nvm list available          //显示可以安装的所有node.js的版本(windows系统)
nvm use <version>           //切换到使用指定的nodejs版本，例如nvm use 12.18.3
```