### 基于233的模板进行个人博客的搭建
#### 下载
仓库地址：[https://github.com/233Official/dailynotes](https://github.com/233Official/dailynotes)  
克隆仓库之前你需要有git的使用基础，没有的话可以先去了解一下。此处默认你已经安装并且会使用Git。复制仓库地址（如果你没有本地创建SSH Key就复制Https地址，如果创建了，那么随意），打开git bash，输入以下命令： 
```
git clone [url]
```
复制的https链接会要求你登录GitHub账号，输入账号密码即可。
#### 部署
- 这里使用的是VSCode进行部署，首先需要打开文件。这里有一个技巧，可能有些人知道，就是说在本地仓库目录下输入cmd打开命令行，然后在命令行输入code . 即可使用VSCode打开当前文件，前提是你的VSCode安装的时候添加到了环境变量。
- 需要下载[pnpm](https://pnpm.io/zh/)
- 打开VSCode终端，输入以下命令：
    ```
    pnpm install
    ```
    安装所有的依赖。
- 配置到GitHub Actions:
    