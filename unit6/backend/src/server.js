const express = require('express');
const app = express();
const connect = require('./configs/db')
const cors = require('cors')
const ProductController = require('./controllers/product.controllers')
app.use(express.json());
app.use(cors())

app.use('/product',ProductController)

app.listen(5000, async()=>{
    try {
        await connect()
        console.log('Pankaj listening on port 5000')
    } catch (err) {
        console.log(err)
    }
})

module.exports = app;