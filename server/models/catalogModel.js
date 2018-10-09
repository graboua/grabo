const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

const CatalogDescriptionSchema = new Schema({

  title: {
    type: String,
  },
  p: {
    type: [String],
  },
  li: {
    type: [String],
  }
});

const CatalogSchema = new Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  ancestors: {
    type: [String],
    required: true,
  },
  parent: {
    type: String,
    require: true,
  },
  slogan: {
    type: String,
  },
  description: CatalogDescriptionSchema,
  assets: {
    type: [String],
    default: config.get('defaultProductImgPath'),
  },
  prefix: {
    type: String,
  }
});

let CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;
