
const express =require('express')
const { AddProduct, GetProducts, GetOneProduct, DeleteProduct, UpdateProduct } = require('../Controllers/Product')
const { upload } = require('../Middlewares/Multer')
const Product = require('../Models/Product')


const productRouter = express.Router()


productRouter.post('/addProduct',upload.single('testImage'),AddProduct)

productRouter.get('/getProducts',GetProducts)

productRouter.get('/getOneProduct/:id',GetOneProduct)

productRouter.delete('/deleteProduct/:id',DeleteProduct)

productRouter.put('/updateProduct/:id',upload.single('testImage'),UpdateProduct)


module.exports = productRouter