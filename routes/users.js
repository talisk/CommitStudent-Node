var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUser', function(req, res, next) {
	userDao.add(req, res, next);
});

router.get('/delUser', function(req, res, next) {
	userDao.delete(req, res, next);
});

router.get('/updateByID', function(req, res, next) {
	userDao.queryAll(req, res, next)
});

router.get('/queryByID', function(req, res, next) {
	userDao.queryById(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
	userDao.queryAll(req, res, next);
});

router.get('/queryByName', function(req, res, next) {
	userDao.queryByName(req, res, next);
});

router.get('/queryByStuID', function(req, res, next) {
	userDao.queryByStuID(req, res, next);
});

module.exports = router;
