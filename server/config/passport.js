const ApplicationError = require('../errors/applicationError');
const log = require('../config/winston')(module);
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const UserModel = require('../models/userModel');

const config = require('../config');

module.exports = function(passport) {

  let emailVerificationOptions = {};
  emailVerificationOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
  emailVerificationOptions.secretOrKey = config.get('JWT_EMAIL');

  let jwtOptions = {};
  jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptions.secretOrKey = config.get('JWT_SECRET');

  passport.use('jwt',
    new JwtStrategy(jwtOptions, (jwtPayload, done) => {
        // на основі _id (витягнутого з токена) робить пошук
        // в базі, чи є такий юзер, і ф-я done повертає відповідь

        UserModel.findOne({_id: jwtPayload.sub._id})
          .then(user => {
            if (user) {
              // console.log('user', user);

              done(null, user);
            } else {
              done(null, false);
            }
          })
          .catch(err => {
            done(err, false);
          });
      }
    ));

  passport.use('jwt.email.verification',
    new JwtStrategy(emailVerificationOptions, (jwtPayload, done) => {
        UserModel.findOne({_id: jwtPayload.sub._id})
          .then(user => {
            if (user) {
              done(null, user);
            } else {
              done(null, false);
            }
          })
          .catch(err => {
            done(err, false);
          });
      }
    ));

  let jwtOptionsPasswordResetCheckCode = {};
  jwtOptionsPasswordResetCheckCode.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptionsPasswordResetCheckCode.secretOrKey = config.get('JWT_SECRET_CODE');

  passport.use('jwt.passwordResetCheckCode',
    new JwtStrategy(jwtOptionsPasswordResetCheckCode, (jwtPayload, done) => {
        // console.log('passport sub', jwtPayload.sub);
        UserModel.findOne({_id: jwtPayload.sub._id})
          .then(user => {
            if (user) {
              done(null, user);
            } else {
              done(null, false);
            }
          })
          .catch(err => {
            done(err, false);
          });
      }
    ));

  let jwtOptionsPasswordReset = {};
  jwtOptionsPasswordReset.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  jwtOptionsPasswordReset.secretOrKey = config.get('JWT_SECRET_CHANGE_PASSWORD');

  passport.use('jwt.passwordReset',
    new JwtStrategy(jwtOptionsPasswordReset, (jwtPayload, done) => {

        UserModel.findOne({_id: jwtPayload.sub._id})
          .then(user => {
            if (user) {
              done(null, user);
            } else {
              done(null, false);
            }
          })
          .catch(err => {
            done(err, false);
          });
      }
    ));

};
