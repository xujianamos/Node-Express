"use strict";

/** 首页路由文件 */
// 引入express
var express = require('express'); // 引入express路由对象


var router = express.Router(); // 首页路由

router.get('/', function (req, res, next) {
  // index为页面的文件名，对应views目录中的index.jade文件
  // 第二个参数为传入到页面文件的对象
  res.render('index', {
    title: 'hello'
  });
}); // 欢迎页路由

router.get('/welcome', function (req, res, next) {
  res.render('welcome', {
    title: 'welcome'
  });
}); // 渲染index页面，传递不同参数

router.get('/world', function (req, res, next) {
  res.render('index', {
    title: 'hello world'
  });
}); // post请求

router.post('/post', function (req, res, next) {
  res.render('index', {
    title: 'post请求'
  });
}); // put请求

router.put('/put', function (req, res, next) {
  res.render('index', {
    title: 'put请求'
  });
}); // delete请求

router["delete"]('/delete', function (req, res, next) {
  res.render('index', {
    title: 'hdelete请求'
  });
}); // 中间件练习

router.get('/car', function (req, res, next) {
  // 中间件
  console.log('------这里是中间件');
  next();
}, function (req, res, next) {
  res.send('这里是返回');
}); // 导出路由

module.exports = router;