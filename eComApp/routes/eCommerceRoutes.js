const express = require('express');
const eCommerceController = require('../controllers/eCommerceController');
const router = express.Router();

router.get('/products', eCommerceController.getProducts);

module.exports = router;