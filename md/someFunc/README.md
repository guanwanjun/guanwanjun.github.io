#一些方法的运用

##Lazy Fun:在特定的时间段内，只执行最后一次fn

    var lazyFn = function(fn, lazyTime) {
        var timer = 0;
        var createTimer = function(ctx, args) {
            setTimeout(function(){
                fn.apply(ctx, args);
            }, lazyTime);
        };
        return function() {
            clearTimeout(timer);
            timer = createTimer(this, Array.prototype.slice.call(arguments));
        };
    }

之前写过一段程序，执行一系列dom操作等，单个运行没问题，当浏览器resize时，重新执行程序输出，人为频繁操作了下窗口，
$(window).resize频繁执行，浏览器崩溃了。后来用lazyFn来解决的

![](http://guanwanjun.github.io/md/someFunc/lazyFun.png)