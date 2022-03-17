const {Products} = require("../models");
 
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.getProductById = async (req, res) => {
    try {
        const product = await Products.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.createProduct = async (req, res) => {
    try {
        await Products.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.updateProduct = async (req, res) => {
    try {
        await Products.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
exports.deleteProduct = async (req, res) => {
    try {
        await Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}