const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductsSchema");

router.get("/products", async (req, res) => {
  try {
    console.log("GET /products");
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;