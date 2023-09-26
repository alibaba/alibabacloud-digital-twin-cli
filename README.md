## dtf-cli 命令工具

dtf-cli 是 twinfabric 产品扩展开发工具，基于该命令行工具，可以快速开发 twinfabric 产品的功能包插件，实现各业务需求的定制化。

## dtf-cli 命令工具使用

### 一、环境准备

安装 node 环境，node 版本必须在 v12.13.0 及以上。详见 NodeJS 官网：[Node.js](https://nodejs.org/en)。

安装成功时，在命令行操作界面执行 (OXS 在 terminal 中执行，Windows 在 cmd 中执行)：

```
node -v
v12.13.0

npm -v
6.12.0
```

### 二、安装开发工具套件

运行命令安装

```
npm install dtf-cli -g
```

安装成功时：

```
dtf --version
1.0.2
```

### 三、初始化扩展包

在您的命令行界面执行：

```
dtf addon init
```

### 四、启动调试

在项目中运行如下命令，启动后会显示调试方法

```
npm run start
```

### 五、扩展包打包

在项目中运行如下命令,会自动构建并打包

```
npm run package
```

生成新包会放在项目的 package 文件夹下
