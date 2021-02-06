"use strict";

/** 首页路由文件 */
// 引入express
var express = require('express'); // 引入express路由对象


var router = express.Router(); // 首页路由

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'hello'
  });
}); // 欢迎页路由

router.get('/welcome', function (req, res, next) {
  res.render('welcome', {
    title: 'welcome'
  });
}); // 导出路由

module.exports = router;