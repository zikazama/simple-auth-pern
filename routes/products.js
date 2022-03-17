const express = require("express");
 
const { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/Products.js");

const { 
    verify,
  } = require("../controllers/Auth.js");
 
const router = express.Router();

router.get('/', verify, getAllProducts);
router.get('/:id', verify, getProductById);
router.post('/', verify, createProduct);
router.patch('/:id', verify, updateProduct);
router.delete('/:id', verify, deleteProduct);
 
exports.productRoutes = router;