/**
 * custom error
 *
 * @param message
 * @param status
 * @param code
 * @constructor
 */

function ApplicationError(message, status, code) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ApplicationError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message ? message : 'Помилка програми';
  this.status = status || 500;
  this.code = code || 0;
  this.name = 'ApplicationError';
}

ApplicationError.prototype = Object.create(Error.prototype);
ApplicationError.prototype.constructor = Error;

module.exports = ApplicationError;

//    messages
// noSuchUser (wrong email, _id, login)
// wrongCredentials (wrong code, password)
// maxTries (reached max of tries)
// recaptchaErr ()
// bc (Bestcrypt errors)
// notAuthorized (don't have permission)
