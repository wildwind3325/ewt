var common = require('./common');

var router = app => {
  app.all('/api/*', async (req, res, next) => {
    if (req.url.startsWith('/api/common/')) {
      next(); // 登录等操作不检查权限
    } else if (!req.session.user) {
      res.send({
        success: false,
        message: '您尚未登录'
      });
    } else {
      // 在此根据req.url校验权限
      next();
    }
  });

  app.use('/api/common', common);
};

module.exports = router;