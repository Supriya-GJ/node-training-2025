const Product = require('../models/products');

// Retrieve all the items from the database
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

// Retrieve only the items required(user specifies)
const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

// Post all the items
const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        
      } catch (error) {
        res.status(500).json({message: error.message})
      }    
}

// Update an item in the DB
const updateProduct = async (req, res) => {
    try {
    
        const {id} = req.params;
    
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        if(!product){
          return res.status(404).json({message: "Product not found"});
        }
    
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

// Delete an item from the DB
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
    
        const product = await Product.findByIdAndDelete(id);
    
        if(!product){
          return res.status(404).json({message: "Product not found"});
        }
    
        res.status(200).json({ message : 'Product deleted successfully'});
        
      } catch (error) {
        res.status(500).json({message: error.message})
      }
}

module.exports = {
    getProducts,
    getProduct,
    createProducts,
    updateProduct,
    deleteProduct
}