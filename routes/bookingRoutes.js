const router = require('express').Router();
const bookingController = require('../controller/bookingController');
const authController = require('../controller/authController');

router.use(authController.protect);
router.use(authController.restrictTo('admin', 'lead-guide'));

router.get(
  '/checkout-session/:tourID',
  authController.protect,
  bookingController.getCheckoutSession
);

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createOneBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
