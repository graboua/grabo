const UserModel = require('../models/userModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const config = require('../config');

/**
 *
 * @param {string} _id - users _id
 * @param {object} modificationRequest
 * @param {string} modificationRequest.name - key
 * @param {string} modificationRequest.value - value
 * @returns {Promise}
 */
module.exports.update = function(_id, modificationRequest) {
  return new Promise(function(resolve, reject) {
    UserModel.update({_id},
      {$set: {[modificationRequest.name]: modificationRequest.value}})
      .then(
        result => {
          if (result.ok !== 1) {
            reject(new ApplicationError('Не вдалося внести зміни', 400));
          }
          resolve(new ResObj(true, 'Зміни внесено'));
        },
        err => reject(new DbError(err.message, err.code))
      );
  });
};

module.exports.updateOne = function(query, modificationRequest) {
  return new Promise(function(resolve, reject) {
    UserModel.update({_id},
      {$set: {[modificationRequest.name]: modificationRequest.value}})
      .then(
        result => {
          if (result.ok !== 1) {
            reject(new ApplicationError('Не вдалося внести зміни', 400));
          }
          resolve(new ResObj(true, 'Зміни внесено'));
        },
        err => reject(new DbError(err.message, err.code))
      );
  });
};
