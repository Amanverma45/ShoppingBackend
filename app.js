const express = require('express')
const app = express()

require('./db/connection.js')

const port = 1000;

const products = require('./model/product.js')
const defaultData = require('./default/dafault.js')

const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/getProducts',async(req,res)=>{
    try{
        const data = await products.find({})
        res.json(data)
    }catch(err){
        res.json(err)
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

defaultData()









