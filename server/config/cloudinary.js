const cloudinary = require('cloudinary');
const config = require('./');

cloudinary.config({
  cloud_name: config.get('CLOUDINARY_NAME'),
  api_key: config.get('CLOUDINARY_KEY'),
  api_secret: config.get('CLOUDINARY_SECRET')
});

module.exports = cloudinary;
