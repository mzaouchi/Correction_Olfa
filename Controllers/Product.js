
const Product = require("../Models/Product")

exports.AddProduct=async(req,res)=>{
    console.log('Rana',{...req.body,testImage : req.file.path})
    
    try {
        const newProduct = new Product({...req.body,testImage : req.file.path.replaceAll('\\','/')})
        
        // {...req.body,pic : req.file.path}
        const founded = await Product.findOne({title : req.body.title})
        console.log('Founded',founded)
        if(founded){
            return res.status(400).send('Product already exist')
        }
        console.log('New',newProduct)
        await newProduct.save()
        res.status(200).send({Msg :'Product Added',newProduct})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.GetProducts=async(req,res)=>{
    try {
        const products = await Product.find()
        res.status(200).send({Msg:'List of Product',products})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.GetOneProduct=async(req,res)=>{
    try {
        const {id} = req.params
        const oneProduct = await Product.findById(id)
        res.status(200).send({Msg : 'Product One :',oneProduct})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.DeleteProduct=async(req,res)=>{
    try {
        const {id} = req.params
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Product deleted',deleteProduct})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.UpdateProduct=async(req,res)=>{
    try {
        const {id} = req.params
        if(req.file){
            const updateProduct = await Product.findByIdAndUpdate(id,{$set : {...req.body,testImage : req.file.path.replaceAll('\\','/')}})
        }else{
            const updateProduct = await Product.findByIdAndUpdate(id,{$set : {...req.body}})
        }
        // const updateProduct = await Product.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Product updated',updateProduct})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}