const rp = require('request-promise-native');
const config = require('../config');
const log = require('../config/winston')(module);
const ApplicationError = require('../errors/applicationError');

module.exports = function(req, res, next) {
  log.debug('captcha', req.query.recaptcha);
  let recaptcha = req.query.recaptcha;
  if (recaptcha === '' ||
    recaptcha === null ||
    recaptcha === undefined) {
    return next(new ApplicationError('recaptchaErr', 401));
  }
  const recaptchaSecret = config.get('RECAPTCHA_SECRET');
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
  ${recaptchaSecret}&response=${recaptcha}&
  remoteip=${req.connection.remoteAddress}`;

  rp(recaptchaURL)
    .then(result => {
      // console.log('result', result);
      result = JSON.parse(result);
      if (result.success === true) {
        return next();
      } else {
        // console.log('error');
        return next(new ApplicationError('recaptchaErr', 401));
      }})
    .catch(error => next(new ApplicationError('recaptchaErr', 401)));
};
