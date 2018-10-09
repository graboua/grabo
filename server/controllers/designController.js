const DesignModel = require('../models/designModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const formidable = require('formidable');
const log = require('../config/winston')(module);
const cloudinary = require('../config/cloudinary');
const catalogController = require('../controllers/catalogController');
const util = require('util');

module.exports.getDesigns = function(req, res, next) {
      DesignModel.find({})
        .sort({_id: 1})
        .then(result => {
          return res.status(200).json(new ResObj(true, 'Дизайни', result));
        })
        .catch(err => next(new DbError()));
};

module.exports.designAddImagesBatch = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10485760});
  form.parse(req, function(err, fields, files) {

    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: fields.design_id + '_' + Date.now(), // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        eager: [
          {width: 650, height: 650, crop: 'fill', fetch_format: 'auto'},
          {width: 250, height: 250, crop: 'fill', fetch_format: 'auto'},
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          {width: 40, height: 40, crop: 'fill', fetch_format: 'auto'},
        ],
        timeout: 120000
      })
      .then(result => {

        let design = {
          _id: fields.design_id,
          image: result.public_id,
          structure: fields.structure
        };
        log.debug('design', design);
        // log.debug('design', typeof design.image);
        // log.debug('design', typeof design.structure);
        //
        return DesignModel.findOneAndUpdate(
          {_id: design._id},
          {$set: design},
          {upsert: true, new: true} // upsert + return updated object
        );
      })
      .then(result => {
        return res.status(200).json(new ResObj(true, 'Дизайн додано/змінено', result));
      })
      .catch(err => next(new ApplicationError('Помилка завантаження зображення - upload', 400)));
  });

  // form
  //   .on('field',
  //     function(name, value) {
  //       receivedFiles.push([name, value]);
  //       log.debug('field name', util.inspect(name, {showHidden: false, depth: null}));
  //       log.debug('field value', util.inspect(value, {showHidden: false, depth: null}));
  //     })
  //   .on('file',
  //   function(name, file) {
  //     receivedFiles.push([name, file]);
  //     log.debug('file name', util.inspect(name, {showHidden: false, depth: null}));
  //     log.debug('file file', util.inspect(file, {showHidden: false, depth: null}));
  //   })
  //   .on('end',
  //       function() {
  //         // log.debug('receivedFiles', receivedFiles);
  //         return res.status(200).json(new ResObj(true, 'Зображення завнтажене', receivedFiles))
  //       })
  //   .parse(req, function(err, fields, files) {
  //     if (err) {
  //       return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
  //     }
  //   });
};

module.exports.designAddImage = function(req, res, next) {
  let form = new formidable.IncomingForm({maxFileSize: 10485760});

  form.parse(req, function(err, fields, files) {

    if (err) {
      return next(new ApplicationError('Помилка завантаження зображення - form parse', 400));
    }

    cloudinary.v2.uploader.upload(
      files.file.path,
      {
        public_id: fields.design_id + '_' + Date.now(), // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        // width: 650, height: 650, crop: 'fill'
        eager: [
          {width: 650, height: 650, crop: 'fill', fetch_format: 'auto'},
          {width: 250, height: 250, crop: 'fill', fetch_format: 'auto'},
          {width: 180, height: 180, crop: 'fill', fetch_format: 'auto'},
          {width: 40, height: 40, crop: 'fill', fetch_format: 'auto'},
          ]
      },
      function(err, result) {
        if (err) {
          return next(
            new ApplicationError('Помилка завантаження зображення - upload', 400)
          );
        }
        console.log('product_img_cloudinary result', result);
        return res.status(200).json(
          new ResObj(true, 'Зображення завнтажене', result.public_id) // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
        );
      });

  });
};

module.exports.designUpsert = function(req, res, next) {
  const design = req.body;
  // log.debug('design', design);
  log.debug('design', typeof design._id);
  log.debug('design', typeof design.image);
  log.debug('design', typeof design.structure);
  DesignModel.findOneAndUpdate(
    {_id: design._id},
    {$set: design},
    {upsert: true, new: true} // upsert + return updated object
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Дизайн додано/змінено', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getDesignById = function(req, res, next) {
  const _id = req.params._id;

  DesignModel.findById(
    {_id: _id},
  )
    .then(result => {
      return res.status(200).json(new ResObj(true, 'дизайн', result));
    })
    .catch(err => next(new DbError())
    );
};

module.exports.designDelete = function(req, res, next) {
  const _id = req.params._id;

  // res.status(200).json(new ResObj(true, 'FAKE !! Продукт видалено'));
  DesignModel.deleteOne({_id: _id})
    .then(
      result => {
        log.debug('result', result);

        if (result.n !== 1) {
          next(new ApplicationError('Не вдалося внести зміни', 400));
        } else {
          return res.status(200).json(new ResObj(true, 'Продукт видалено'));
        }
      },
      err => next(new DbError(err.message, err.code))
    );
};
