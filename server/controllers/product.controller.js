const { response } = require("express");
const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
    res.json({
        message: "hello friend"
    })
}

module.exports.createProduct = (req, res) => {
    const { title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

module.exports.findProducts = (req, res) => {
    Product.find({})
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json(err))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params._id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate({
        _id:req.params._id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedProduct=>res.json(updatedProduct))
        .catch(err=>res.json(err))
}

module.exports.deleteProduct =(req, res) =>{
    Product.deleteOne({_id:req.params._id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}