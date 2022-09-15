const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema(
    {
        
        testImage : String,            
        // img : String,
        title : String,
        price : Number,
        desc : String
    }
)


module.exports = mongoose.model('Prod',ProductSchema)