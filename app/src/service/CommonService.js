class CommonService {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.status = this.status.bind(this);
  }

  login(req, res, next) {
    let account = req.query.account || req.body.account;
    let password = req.query.password || req.body.password;
    if (!account || !password) {
      res.send({
        success: false,
        message: '请输入账号和密码'
      });
    } else {
      req.session.user = {
        account: account,
        password: password
      };;
      res.send({ success: true });
    }
  }

  logout(req, res, next) {
    req.session.destroy(err => { });
    res.clearCookie('connect.sid');
    res.send({ success: true });
  }

  status(req, res, next) {
    if (!req.session.user) {
      res.send({ success: false });
    } else {
      res.send({
        success: true,
        user: req.session.user
      });
    }
  }
}

module.exports = new CommonService();