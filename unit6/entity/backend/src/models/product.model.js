const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    image:{ type: String, required: true } ,
    name: { type: String, required: true },
    main_price: { type: Number, required: true },
    discount_price:{type: Number, required: true},
    type: { type: String, required: true },
    color: { type: String, required: true }
})

module.exports = mongoose.model("product", productSchema)