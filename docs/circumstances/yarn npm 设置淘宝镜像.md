## 一、NPM设置淘宝镜像

#### 1.查询当前配置的镜像

```bash
npm get registry
```
> <https://registry.npmjs.org/>

#### 2.设置成淘宝镜像

```bash
npm config set registry http://registry.npm.taobao.org/
```

#### 3.换成原来的

```bash
npm config set registry https://registry.npmjs.org/
```

## 二、[Yarn](https://so.csdn.net/so/search?q=Yarn\&spm=1001.2101.3001.7020) 设置淘宝镜像

#### 1.查询当前配置的镜像

```bash
yarn config get registry
```

> <https://registry.yarnpkg.com>

#### 2.设置成淘宝镜像

```bash
yarn config set registry http://registry.npm.taobao.org/
```

#### 3.换成原来的

```bash
yarn config set registry http://registry.npmjs.org/
```

## 三、常用淘宝镜像

```bash
npm install phantomjs --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
npm install chromedriver --chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver
npm install operadriver --operadriver_cdnurl=http://npm.taobao.org/mirrors/operadriver
npm config set disturl https://npm.taobao.org/dist
npm config set electron_mirror https://npm.taobao.org/mirrors/electron/
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/
```

```bash
yarn config set disturl https://npm.taobao.org/dist -g
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/ -g
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/ -g
yarn config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/ -g
yarn config set chromedriver_cdnurl https://cdn.npm.taobao.org/dist/chromedriver -g
yarn config set operadriver_cdnurl https://cdn.npm.taobao.org/dist/operadriver -g
yarn config set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents -g
```