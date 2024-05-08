// const express = require('express');
// const eCommerceController = require('../controllers/eCommerceController');
// const router = express.Router();

// router.get('/products', eCommerceController.getProducts);

// module.exports = router;

const express = require('express');
const eCommerceController = require('../controllers/eCommerceController');
const router = express.Router();
const cors = require('cors');

// Remove this line as it's unnecessary
// const app = express();

// Use CORS middleware directly on the router
router.use(cors());

router.get('/products', eCommerceController.getProducts);

module.exports = router;