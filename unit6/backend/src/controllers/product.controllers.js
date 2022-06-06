const express = require("express");
const Product = require("../models/Product.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send(error);
  }
});
router.get("/", async (req, res) => {
  const page = req.query.page || 1;
  const item = req.query.items || 6;
  let sort = req.query.sort;
  const offset = (page - 1) * item;

  try {
    let product;
    let options = {};

    if (req.query.color) {
      const color = req.query.color.split(",");
      options.color = { $in: color };
    }

    if (req.query.category) {
      const category = req.query.category.split(",");
      options.category = { $in: category };
    }

    if (sort) {
      if (sort == "sort_asc") {
        sort = { price: 1 };
      } else {
        sort = { price: -1 };
      }
    }

    product = await Product.find(options)
      .skip(offset)
      .sort(sort)
      .limit(item)
      .lean()
      .exec();
    let total_page = await Product.find(options).countDocuments();

    total_page = Math.ceil(total_page / item);
    res.status(201).send({ product, total_page });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send({ error });
  }
});
module.exports = router;
