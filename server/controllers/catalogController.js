const CatalogModel = require('../models/catalogModel');
const ResObj = require('../libs/responseObject');
const DbError = require('../errors/dbError');
const ApplicationError = require('../errors/applicationError');
const ObjectId = require('../config/mongoose').Types.ObjectId;
const log = require('../config/winston')(module);

// module.exports.getPrefix = function(req, res, next) {
//   const _id = req.query.category;
//   CatalogModel.findOne({_id}, {prefix: 1, _id: 0})
//     .then(result => {
//     return res.status(200).json(new ResObj(true, 'Префікс', result));
//   })
//     .catch(err => next(new DbError()));
// };

module.exports.getCategoryById = function(req, res, next) {
  const _id = req.query._id;
  CatalogModel.findOne({_id})
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Категорія', result));
    })
    .catch(err => next(new DbError()));
};

getCategoryDescendants = function(category, depth) {
  return new Promise(function(resolve, reject) {
    CatalogModel.aggregate([
      {
        $match: {parent: category}
      },
      {
        $sort: {order: 1}
      },
      {
        $graphLookup: {
          from: 'catalogs',
          startWith: '$_id',
          connectFromField: '_id',
          connectToField: 'parent',
          as: 'children',
          maxDepth: depth
        }
      },
      {
        $addFields: {numOfChildren: {$size: '$children'}}
      }
    ]).then(result => resolve(result))
      .catch(err => reject(new DbError()));
  })
};
module.exports.getCategoryDescendants = getCategoryDescendants;

module.exports.getAllDescendants = function(req, res, next) {
  // const item = ObjectId(req.query.item);
  const category = req.query.category;
  const depth = +req.query.depth;
  getCategoryDescendants(category, depth)
    .then(result => {
      return res.status(200).json(new ResObj(true, 'Каталог', result));
    })
    .catch(err => next(err));
};



module.exports.getDescendants = function(req, res, next) {
  item = req.query.item;
  CatalogModel.aggregate([
    {
      $match: {parent: item}
    },
    {
      $sort: {order: 1}
    }
  ]).then(result => {
      return res.status(200).json(new ResObj(true, 'Каталог', result));
    })
    .catch(err => next(new DbError()));
};

module.exports.getMainMenu = function(req, res, next) {
  // const item = ObjectId(req.query.item);
  // item = req.query.item;
  // console.log('item', item);
  CatalogModel.aggregate([
    {
      $facet: {
        common: [
          {
            $match: {parent: 'common'}
          },
          {
            $sort: {order: 1}
          }
        ],
        system: [
          {
            $match: {parent: 'system'}
          },
          {
            $sort: {order: 1}
          }
          ]
      },
    },
  ]).then(result => {
    return res.status(200).json(new ResObj(true, 'Каталог', result[0]));
  })
    .catch(err => next(new DbError()));
};

// New

module.exports.getAllParents = function(req, res, next) {
  const category_id = req.query.category_id;
  CatalogModel.aggregate([
      // {
      //   $match: {_id: category_id}
      // },
      // {
      //   $sort: {order: 1}
      // },
      // {
      //   $graphLookup: {
      //     from: 'catalogs',
      //     startWith: '$parent',
      //     connectFromField: 'parent',
      //     connectToField: '_id',
      //     as: 'hierarchy',
      //   }
      // },
      // {
      //   $addFields: {numOfChildren: {$size: '$hierarchy'}}
      // },

      {
        $match: {_id: category_id}
      },
      {
        $sort: {order: 1}
      },
      {
        $graphLookup: {
          from: 'catalogs',
          startWith: '$parent',
          connectFromField: 'parent',
          connectToField: '_id',
          as: 'hierarchy',
          // depthField: 'depthField'
        }
      },

      // {
      //   $addFields: {numOfChildren: {$size: '$hierarchy'}}
      // },
      {
        $unwind: '$hierarchy'
      },

      {
        $addFields: {sizeOfAncestors: {$size: '$hierarchy.ancestors'}}
      },
      {
        $sort: {sizeOfAncestors: 1}
      },
      {
        $group:
          {_id: '$_id',
            hierarchy: {$push: '$hierarchy'},
            name: {$first: '$name'}
          }

      }

    ]).then(result => res.status(200).json(new ResObj(true, 'Каталог', result)))
      .catch(err => next(new DbError()));
};
