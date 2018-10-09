const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  passwordTries: {
    type: Number,
    default: 0
  },
  passwordLockTries: {
    type: Number,
    default: 5
  },
  passwordLockUntil: {
    type: Number,
    default: 0
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: config.get('defaultAvatarPath'),
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  role: {
    type: String,
    enum: ['casual', 'guest', 'user', 'manager', 'admin'],
    default: 'guest'
  },
  ban: {
    type: Number,
    default: 0
  },
  code: {
    type: String,
    default: null
  },
  codeTries: {
    type: Number,
    default: 1
  },
  codeLockTries: {
    type: Number,
    default: 3
  },
},
  // {
  // toObject: {virtuals: true},
  // toJSON: {virtuals: true}
  // }
);

UserSchema.virtual('isCodeLocked').get(function() {
  return this.codeLockTries <= this.codeTries;
});

UserSchema.virtual('isPasswordLocked').get(function() {

  const dateNow = Date.now(); // in seconds
  return this.passwordLockUntil > dateNow;

});

let UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
