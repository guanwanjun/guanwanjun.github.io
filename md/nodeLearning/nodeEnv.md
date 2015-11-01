#Node环境准备


##安装node

如果没有安装node，在安装前可以考虑先安装nvm来管理node版本，nvm全称**Node Version Manager**，可以用来管理node版本.
[访问其github地址](https://github.com/creationix/nvm)

如果安装了稳定的node版本，并且不想折腾版本的差异，可以安装个安装包，配置个全局环境变量跑跑（win下）。


###mac下安装nvm

    $  brew install nvm

nvm安装后，需要配置文件~/.bash_profile, ~/.zshrc or ~/.profile，mac下修改了~/.bashrc，添加了如下内容

    #FOR NVM
    export NVM_DIR=~/.nvm
    source $(brew --prefix nvm)/nvm.sh


然后运行

    $  source ~/.bashrc

就可以在当前终端运行nvm了。
（注：关掉终端重新打开终端时，会访问不到nvm命令，需要重新source运行一遍，如果不想每次都手动启动需另行配置）

利用nvm安装指定版本

    $  nvm install 4.2.1

查看node版本安装情况

    $  nvm ls

使用指定版本

    $  nvm use x.xx.x

其他node安装方式网上资源很多，不多说。

###配置npm镜像

由于国内网络环境的各种限制原因，可以尝试配置一个npm镜像，配置方式很简单

    $  npm install -g cnpm --registry=https://registry.npm.taobao.org

这样以后就可以通过cnpm install来安装包了

###安装n

n是一个node模块，功能和nvm类似，[访问其github地址](https://github.com/tj/n)

    $  sudo npm install -g n

查看有哪些版本，前边会有个o表示当前选中版本

    $  n ls

安装node指定版本，比如安装4.2.0版本

    $  n 4.2.0

使用特定node版本来运行脚本

    $  n use 4.2.0 test.js
