var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');//响应一个hello world字符串
});
app.listen(8081, function () {//监听来自于8081端口的请求
  console.log('app is listening at port 8081');
});