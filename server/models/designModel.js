const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const DesignSchema = new Schema({
  _id: {
    type: String,
    required: true,
    // unique: true
  },
  image: {
    type: String,
    default: config.get('defaultProductImgPath'),
    required: true
  },
  // imgSmall: {
  //   type: String,
  //   default: config.get('defaultProductImgPath'),
  //   required: true
  // },
  structure: {
    type: String,
    required: true,
    enum: ['дошка', 'художній паркет', 'плитка', 'абстракція', 'дитячий'],

  },
  // tags: [{
  //   name: {
  //     type: String,
  //     required: true
  //   },
  //   value: {
  //     type: String,
  //     required: true
  //   },
  // }],
});

let DesignModel = mongoose.model('designs', DesignSchema);
module.exports = DesignModel;
