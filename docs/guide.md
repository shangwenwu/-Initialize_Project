---
order: 3
title: 开发指导
---


## 开发指导

请先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。

其他相关学习资料：

- [React中文文档](http://reactjs.cn/)
- [React深入浅出系列](http://www.infoq.com/cn/articles/react-art-of-simplity) 适合有经验的前端工程师，更深入的理解React的设计理念
- [阮一峰老师的ES6教材](http://es6.ruanyifeng.com)


## 开发过程

我们使用**ES6**和**jsx**编写和组织源码，所以，要先学习过以上基础知识之后才能开始下面新概念的学习。（或者，先看看原理，再照葫芦画瓢）

另外，啰嗦一句：所有工具都是都过npm管理的，遇到不认识的模块（import过来的东西）可以直接去<http://npmjs.com/package/{module-name}>看介绍。

### 理解Redux

Redux是React的黄金搭档，做复杂交互的利器。

简单描述React的工作原理：「由state控制组件的展示状态，用户操作导致state改变，完成交互」
面对复杂交互，需要多个组件相互协作，传递状态、同步改变……程序面临可维护性的难题！

这就是Redux要解决的问题：

> 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。
惟一改变 state 的办法是触发 action，一个描述发生什么的对象。
为了描述 action 如何改变 state 树，你需要编写 reducers。

请看文档：[Redux中文](http://cn.redux.js.org/)  [Redux英文原版](http://redux.js.org/)

### 最佳实践

对照阮一峰老师的[图示MVC、MVP、MVVM](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html) ，React+Redux的模式思想 更像传统的MVC模式（只是React中的View由jsx语法编写，不是很容易跟Controller区分，有点类似php跟html混写）

### 配置路由

Web应用中的经典话题「路由」。由于WWW万维网的共享特性，我们希望任何一个页面的url分享给其他人，对方都能看到同一个页面内容（如果不是这样，当你刷新网页的时候，可能会抓狂）。

在React构建的单页应用（SPA，Single Page Application）中，内容的切换完全是由浏览器中js控制的，我们通过「路由」的概念，来管理url跟具体内容的关系。这就是React-Router的作用。

1. 首先，要展示的内容，必须是一个React.Component，我们约定将这些Component（类比传统概念里的网页）都放置在`/View/ContainerPage/`目录下（在模式概念上，我们称他们为Container Component容器组件）

2. 然后，在`/View/router/index.js`中分配url

React页面是用Component堆出来的，所以React-router的原理很简单，就是一堆嵌套的Components。

- [React-Router官方文档（注意版本）](https://github.com/reactjs/react-router)
- [React-Router中文文档](http://react-guide.github.io/react-router-cn/index.html)


### 使用组件

基于React+npm+webpack的技术架构，最大的优势就是**模块化管理**，最大限度重用已有的劳动成果。

原理：React定义了一套「组件规范」所有React.Component的子类，都可以组合到一起。

我们可以引用第三方提供的丰富的组件库（这更得益于npm社区多年的积累），下面是一些推荐：

- Antd: <http://ant.design/docs/react/introduce> 支付宝团队出品，重度推荐！！
- Material-UI: <http://www.material-ui.com/> Google出品

使用它们，只需要两步：

1. `npm install --save`
2. 代码中`import XXX from 'antd'`

就这么简单！因为有了npm，不用管他放到哪个目录；因为有了webpack，不需要手动修改html中的js引用。

示例：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### 编写自己的组件



### 按需加载

通过 `import { Button } from 'antd';` 引入会加载 antd 下所有的模块，如果要按需加载可以通过以下的写法来引用。

```jsx
import Button from 'antd/lib/button';
```

更高级的用法可以参考：[Antd文档 - 按需加载](http://ant.design/docs/react/getting-started#按需加载)
