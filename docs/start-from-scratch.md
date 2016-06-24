---

title: 从零开始新建一个React工程
---

开发环境里要实时看到React代码运行结果，需要实时编译工具，这些配置比较繁琐，所以：我们从公用的一份模板代码开始，建立新的工程。

### 1. 获取工程模板

```bash
 git clone https://git.sprucetec.com/shangwenwu/Initial_project.git
```

### 2. 工程目录结构

```bash
/Initial_project/
├── Images/
├── Lib/
├── View/
│   ├── router/
│   ├── ContainerPage/
│   ├── Action/
│   ├── Reducers/
│   ├── Components/
│   ├── Config/
│   ├── Api/
│   └── index.js
├── index.html
├── package.json
└── webpack.config.js
```

约定：

`/Images/`、`/Lib/`两个目录放置需要原样加载到浏览器中的资源文件（例如：jquery.min.js、bootstrap.css、build.js）

`/View/`中是所有的React代码

`/View/index.js` React的入口文件（webpack中配置的entry）

`/View/router/` 配置路由（我们做的是SAP单页应用）

`/View/ContainerPage/` 下放置每个页面的容器Component（直接对应到router中的条目）

`/View/Action/`、`/View/Reducers/` 分别放置Redux需要的action和reducer

`/View/Components/` 附赠的一套组件包

`/View/Config/` 全局通用的常量、state初始值

`/View/Api/` 集中管理后端提供的数据接口

`/index.html`浏览器中加载的html，它负责加载必要的js和css，启动整个web应用。

`/webpack.config.js` webpack配置信息，一般不需要改动

其他的，不解释。


### 3. 安装依赖

修改`package.json`信息，执行`npm install`安装依赖

```json
{
 "name": "工程名（英文）",  
 "version": "1.0.0",  
 "description": "介绍",  
 "author": "参与人"
}
```

### 4. 启动开发

执行`npm start`启动webpack的开发服务，可以修改代码，浏览器实时看到最新结果。