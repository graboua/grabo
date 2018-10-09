const express = require('express');
const router = express.Router();
const ApplicationError = require('../errors/applicationError');
const passport = require('passport');
const userController = require('../controllers/userController');
const catalogController = require('../controllers/catalogController');
const uploadController = require('../controllers/uploadController');
const productController = require('../controllers/productController');
const designController = require('../controllers/designController');
const systemController = require('../controllers/systemController');
const sharedController = require('../controllers/sharedController');
const recaptcha = require('../middleware/recaptcha');
const authorization = require('../middleware/authorization');

/**
 * design routes
 */

router.get('/design/get-designs',
  designController.getDesigns
);

router.post('/design/add-image',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  designController.designAddImage
);

router.post('/design/add-images-batch',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  designController.designAddImagesBatch
);

router.post('/design/upsert',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  designController.designUpsert
);

router.get('/design/get-design-by-id/:_id',
  designController.getDesignById
);

router.delete('/design/delete/:_id',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  designController.designDelete
);

/**
 * product routes
 */

router.get('/product/get-products-with-gallery',
  productController.getProductsWithGallery
);

router.get('/product/get-products-by-design-id',
  productController.getProductsByDesignId
);

router.get('/product/get-recommendations',
  productController.getRecommendations
);

router.get('/product/get-recommendations-by-ids',
  productController.getRecommendationsByIds
);

router.get('/product/get-products-by-recommendation',
  productController.getProductsByRecommendation
);

router.post('/product/upsert',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productUpsert
);

router.post('/product/add-main-image',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productAddMainImage
);

router.post('/product/add-brief-image',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productAddBriefImage
);

router.post('/product/add-assets',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productAddAssets
);

router.post('/product/add-techassets',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productAddTechAssets
);

router.get('/product/get-products',
  productController.getProducts
);

router.get('/product/get-product-by-id',
  productController.getProductById
);

// router.get('/product/get-main-page-products',
//   productController.getMainPageProducts
// );
//
// router.get('/product/get-sku-list',
//   passport.authenticate('jwt', {session: false}),
//   productController.getSkuList
// );

router.post('/product/create',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productCreate
);

router.put('/product/edit',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productEdit
);

router.delete('/product/delete/:_id',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productDelete
);

router.post('/product/add-image',
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  productController.productAddImage
);

// New
router.get('/product/get-products-by-category',
  productController.getProductsByCategory
);
/**
 * catalog routes
 */
router.get('/catalog/get-category-by-id',
  catalogController.getCategoryById
);

router.get('/catalog/get-all-descendants',
  catalogController.getAllDescendants
);

router.get('/catalog/get-descendants',
  catalogController.getDescendants
);

router.get('/catalog/get-main-menu',
  catalogController.getMainMenu
);

// New
router.get('/catalog/get-all-parents',
  catalogController.getAllParents
);

/**
 * users routes
 */

router.post('/user/create',
  recaptcha,
  passport.authenticate('jwt', {session: false}),
  authorization('manager'),
  userController.userCreate
);

router.get('/user/login',
  userController.userLogin
);

router.get('/user/profile',
  passport.authenticate('jwt', {session: false}),
  userController.userProfile
);

router.get('/user/role',
  passport.authenticate('jwt', {session: false}),
  userController.userRole
);

router.put('/user/edit',
  passport.authenticate('jwt', {session: false}),
  userController.userEdit
);

router.put('/user/edit-avatar',
  passport.authenticate('jwt', {session: false}),
  uploadController.userEditAvatar
);

router.get('/user/email-verification-send',
  passport.authenticate('jwt', {session: false}),
  userController.userEmailVerificationSend
);

router.get('/user/email-verification',
  passport.authenticate('jwt.email.verification', {session: false}),
  userController.userEmailVerificationReceive
);

router.get('/user/password-reset-check-email',
  recaptcha,
  userController.passwordResetCheckEmail
);

router.get('/user/password-reset-check-code',
  passport.authenticate('jwt.passwordResetCheckCode', {session: false}),
  userController.passwordResetCheckCode
);

router.get('/user/password-reset',
  passport.authenticate('jwt.passwordReset', {session: false}),
  userController.passwordReset
);

/**
 * shared routes
 */

router.post('/shared/send-feedback-message',
  recaptcha,
  sharedController.sendFeedbackMessage
);

/**
 * catch apis 404 and forward to error handler
 */

router.use('*', function(req, res, next) {
  const err = new ApplicationError(404, 'Помилковий запит');
  next(err);
});

module.exports = router;

