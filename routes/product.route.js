const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.getAll);
router.get('/:id', product_controller.get);
router.post('/', product_controller.create);
router.put('/:id', product_controller.update);
router.delete('/:id', product_controller.delete);

module.exports = router;
