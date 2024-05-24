const express = require('express')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')
const DB_URL="mongodb+srv://Aysel123:Aysel.0803@cluster0.inzfizw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express()
const port = 8080
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const Schema = mongoose.Schema;
const ProductModel = new Schema({
    ImageUrl: String,
    title: String,
    price: Number,
    desc: String
});
const MyModel = mongoose.model('products', ProductModel);

app.get ('/api/shop/', async (req, res) => {
    const shop= await MyModel.find({});
    try {
        res.status(200).send({
            message:" success",
            Data:shop,

        })
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
});
app.get('/api/shop/:id', async(req, res) => {
    const id= req.params
    const shop= await MyModel.findById(id)
    try {
        res.status(200).send({
            message:" success",
            Data:shop,

        })
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})
app.delete  ('/api/shop/:id', async(req, res) => {
    const id= req.params
    const deleteProducts= await MyModel.findByIdAndDelete(id)
    try {
        res.status(200).send({
            message:"deleted success",
            deleteData:deleteProducts,

        })
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})
app.post('/api/shop/', async(req, res) => {
    const newProducts=new ProductModel({...req.body})
    await newProducts.save()
    try {
        res.status(200).send({message:"succes",newdata:newProducts})
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})

mongoose.connect(DB_URL)
  .then(() =>{ console.log('Connected!')
  app.listen(port, () => {
    console.log(`Link:http://localhost: ${port}`)
  })
  });
