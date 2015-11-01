#Express

Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
[中文站介绍](http://www.expressjs.com.cn/)，[英文站介绍](http://expressjs.com/)

##大家来said hello world

执行以下命令，创建一个目录

``
$  mkdir helloworld

$  cd helloworld
``

使用npm init为这个应用创建一个package.json文件。这个命令会指导你输入一系列关于你应用的信息

``
$  npm init
``

关于什么是package.json，Mr. Nico Reed nicoreed有段解释

>All npm packages contain a file, usually in the project root, called package.json - this file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.
[原文地址](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json)

在当前目录安装express，并且保存在package.json段dependencies列表中

``
$ npm install express --save
``

[helloworld小程序代码](./application/express/helloworld)



