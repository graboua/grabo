
/**
 * custom mongoose error
 * 
 * @param message
 * @param code
 * @constructor
 */

function DbError(message, code) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, DbError);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message || 'Помилка БД';
  this.code = code || 0;
  this.name = 'DbError';
}

/*!
 * Inherits from Error.
 */

DbError.prototype = Object.create(Error.prototype);
DbError.prototype.constructor = Error;

/*!
 * Module exports.
 */

module.exports = DbError;
