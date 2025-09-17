const products = require('../model/product.js')
const Data = require('../Data.js')

const data = async () => {
  await products.deleteMany({})   
  await products.insertMany(Data) 
}

module.exports = data
