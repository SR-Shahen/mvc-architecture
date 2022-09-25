const products = require("../models/products.models");
const path = require('path');
exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"))
};

exports.saveProducts = (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
        name,
        price
    }
    products.push(product);
    res.status(201).json({
        success: true,

        products,
    });
};