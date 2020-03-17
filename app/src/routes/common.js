var express = require('express');

var commonService = require('../service/CommonService');

var router = express.Router();

router.all('/login', commonService.login);
router.all('/logout', commonService.logout);
router.all('/status', commonService.status);

module.exports = router;