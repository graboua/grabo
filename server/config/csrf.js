const config = require('../config');

module.exports = function(req, res, next) {
  res.cookie(
    'XSRF-TOKEN',
    req.csrfToken(),
    config.get('cookieCsrfOptions')
  );
  next();
};
