const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;

const RecommendationSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  parent: {
    type: String,
    required: true,
  },
});

let RecommendationModel = mongoose.model('recommendations', RecommendationSchema);
module.exports = RecommendationModel;
// module.exports.RecommendationSchema = RecommendationSchema;
