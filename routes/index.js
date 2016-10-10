var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/myCounter.html', function(req, res, next) {
  res.render('myCounter', { title: 'react 学习-自定义组件' });
});
router.get('/counter.html', function(req, res, next) {
  res.render('counter', { title: 'react 学习' });
});
module.exports = router;
