const mongoose = require('mongoose');

const connect = () =>{
    return mongoose.connect("mongodb+srv://pankajKandpal:pankand@cluster0.g4xc3.mongodb.net/dbDesign?retryWrites=true&w=majority")
} 

module.exports = connect;