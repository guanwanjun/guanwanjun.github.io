#Express

Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
[中文站介绍](http://www.expressjs.com.cn/)，[英文站介绍](http://expressjs.com/)

##大家来say hello world

执行以下命令，创建一个目录

    $  mkdir helloworld
    $  cd helloworld

使用npm init为这个应用创建一个package.json文件。这个命令会指导你输入一系列关于你应用的信息

    $  npm init

关于什么是package.json，Mr. Nico Reed nicoreed有段解释

>All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.
[原文地址](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json)

在当前目录安装express，并且保存在package.json段dependencies列表中

    $ npm install express --save

[helloworld小程序代码](https://github.com/guanwanjun/guanwanjun.github.io/blob/master/md/nodeLearning/application/express/helloworld/)






##简单留言板

下边即将做一个简单的留言板，需求如下：

* 一个留言框页面，提供输入留言

* 一个留言列表页，显示留言

* 列表提供删除和编辑功能

* mongodb存储数据

* 使用swig模版（没有用jade，不习惯）




###express生成及设置成swig模版

####express应用生成
通过应用生成器工具 express 可以快速创建一个应用的骨架。
先安装一个生成器

    $  npm install express-generator -g

创建一个名为message的应用

    $  express message

express命令运行后，先不急着运行npm install，将package.json的"jade": "~1.11.0"改成"swig": "~1.4.2"，然后运行

    $  npm install

####设置成swig模版

将message应用里的app.js里的

    app.set('view engine', 'jade');
改成

    var swig = require('swig');
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');

修改views目录里边的.jade后缀改为.html，修改layout.html为

    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>{% block title %}My Site{% endblock %}</title>

      {% block head %}
      <link rel="stylesheet" href="main.css">
      {% endblock %}
    </head>
    <body>
    {% block content %}{% endblock %}
    </body>
    </html>

修改index.html为

    {% extends 'layout.html' %}

    {% block title %}Message{% endblock %}

    {% block head %}
    {% parent %}<!--此处的意思为引用layout的head里的内容-->
    <link rel="stylesheet" href="custom.css">
    {% endblock %}

    {% block content %}
    <p>message there</p>
    {% endblock %}


###supervisor使用

鉴于我们要经常修改html／js等文件，每次都重启node很不方便，所以安装supervisor来帮我们解决问题

    $  npm install supervisor －g
    $  supervisor -e html,js -- bin/www



###swig模版用法
[swig模版等用法](http://paularmstrong.github.io/swig/docs/)这里可以学习swig的用法，边用边学吧


