const express = require("express");
const Product = require("../models/Product.model");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).send(err);
  }
});


router.get("/", async (req, res) => {

  const page = req.query.page || 1;
  const item = req.query.items || 3;
  let sort = req.query.sort || "sort_acc";

  try {
    let product;
    let filter = {};

    if (req.query.color) {
      const color = req.query.color.split(",");
      filter.color = { $in: color };
    }
 
    if (req.query.name) {
      const name = req.query.name.split(",");
      filter.name = { $in: name };
    }
 
    if (req.query.type) {
      const type = req.query.type.split(",");
      filter.type = { $in: type };
    }



    if (sort == "sort_acc") {
      sort = { discount_price: 1 };
    } else {
      sort = { discount_price: -1 };
    }

 
    product = await Product.find(filter)
      .skip((page - 1) * item)
      .sort(sort)
      .limit(item)
      .lean()
      .exec();
    let p = await Product.find(filter).countDocuments();

    p = Math.ceil(p / item);
    res.status(200).send({ product, p });
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log("nhi");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
