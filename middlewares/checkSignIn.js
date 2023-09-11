  function checkSignIn(req, res, next) {
    if (req.session.userName) {
      next();
    } else {
      res.status(401).json({ success: false, message: `Authentication failed ` });
    }
  }

  module.exports = {checkSignIn}