# 常用命令

## 拉取代码

```bash
git clone xxx.git
```

#### 创建分支

```bash
git branch dev
# or
git checkout -b dev
# or
git switch -c dev
```

#### 切换本地分支

```bash
git checkout dev
# or
git switch dev
```

#### 切换分支并关联远程分支

```bash
git checkout -b dev origin/dev
# or
git checkout --track origin/dev
```

#### 查看本地所有分支

```bash
git branch
```

#### 查看远程所有分支

```bash
git branch -r
```

#### 删除本地分支

```bash
git branch -d dev
```

#### 删除远程分支

```bash
git push origin -d dev
```

#### 将代码从工作区添加暂存区

```bash
git add .
```

#### 查看尚未暂存的更新

```bash
git diff
```

#### 添加提交信息（`commit` 注释写错，执行 `git commit --amend` 此时会进入默认 `vim` 编辑器，修改注释后保存）

```bash
git commit -m 'xxxx'
```

#### 推送代码到远程分支

```bash
git push origin dev

# 强制推送（常在 git rebase 或 git reset 后使用）
git push -f origin dev
```
#### 拉取远程分支代码

```bash
git pull origin dev
```

#### 合并分支

```bash
git merge dev
```

#### 查看 `git` 状态

```bash
git status
```

#### 查看提交历史

```bash
git log
```

#### 查看可引用的历史版本记录

```bash
git reflog
```

#### 把本地未 `push` 的分叉提交历史整理成直线

```bash
git rebase origin/dev
```

#### 回到 `rebase` 执行之前的状态

```bash
git rebase --abort
```

#### 回退版本

```bash
# 回退指定 commit_id 版本
git reset --hard commit_id

# 回退上一个版本
git reset --soft HEAD^
# or
git reset --soft HEAD~1
```

#### 撤销代码

```bash
git revert commit_id
```

#### 修改分支名

```bash
# 第一步
git branch -m oldBranchName newBranchName

# 第二步
git push origin :oldBranchName

# 第三步
git push --set-upstream origin newBranchName
```

#### 查看 `git` 配置

```bash
# 查看全局配置
git config --global --list

# 查看用户名
git config --global user.name
```

#### 添加用户名

```bash
git config --global --add user.name newName
```

#### 删除用户名

```bash
git config --global --unset user.name
```

#### 修改用户名

```bash
git config --global user.name newName
```

#### 配置 `Git` 用户名和邮箱

```bash
# 用户名
git config --global user.name "Your Name"

# 邮箱
git config --global user.email "email@example.com"
```

#### 统计代码行数

```bash
git ls-files | xargs wc -l
```

## 提交规范

[相关参考(opens new window)](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)

`feat: 增加新功能`\
`fix: 修复问题/BUG`\
`style: 代码风格相关无影响运行结果的`\
`perf: 优化/性能提升`\
`refactor: 重构`\
`revert: 撤销修改`\
`test: 测试相关`\
`docs: 文档/注释`\
`chore: 依赖更新/脚手架配置修改等`\
`workflow: 工作流改进`\
`ci: 持续集成`\
`types: 类型定义文件更改`\
`wip: 开发中`

## `CodeReview` 常用缩写

`PR`（Pull Request）拉取请求，给其他项目提交代码\
`LGTM`（Looks Good To Me）代码已经过 review，可以合并\
`SGTM`（Sounds Good To Me）和上面那句意思差不多，也是已经通过了 review 的意思\
`WIP`（Work In Progress）如果有个改动很大的 PR，可以在写了一部分的情况下先提交，但需在标题写上 WIP，以告诉项目维护者这个功能还未完成，方便维护者提前 review 部分提交的代码\
`PTAL`（Please Take A Look）提示别人来看一下\
`TBR`（To Be Reviewed）提示维护者进行 review\
`TL;DR`（Too Long; Didn't Read）太长懒得看\
`TBD`（To Be Done(or Defined/Discussed/Decided/Determined)） 一般表示还没搞定
