const router = reqiure("express").Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require("./verifyToken");
const Product = require("../models/Product");

// CREATE
route.post("/", verifyTokenAndAdmin, async (req, res) =>{
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;