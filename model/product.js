const mongoose = require ('mongoose')
const Schema = new mongoose.Schema({

   name : String,
   des : String,
   price : Number, 
   rating : Number,
   review : Number,
   img : String,
   category : String,
})

const products = mongoose.model('product',Schema);
module.exports = products;