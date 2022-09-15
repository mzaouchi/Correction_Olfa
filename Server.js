const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const multer = require ('multer')
const fs = require('fs')
const Product = require("./Models/Product")
const userRouter = require('./Routes/User')
const productRouter = require('./Routes/Product')


const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads')
//     },
//     filename: (req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({storage:storage})
// app.post('/api/prod/addProduct',upload.single('testImage'),(req,res)=>{
//     const saveImage = new Product ({
//         testImage:{
//             data: fs.readFileSync("uploads/" +  req.file.path,"utf8"),
//             contentType:"image/jpeg"
//         },
//         title: req.body.title,
//         price: req.body.price,
//         desc: req.body.desc,
//     });
//     saveImage.save()
//     .then((res) => {
//         console.log("image is saved");
//     })
//     .catch((err) => {
//         console.log(err,"error has occur");
//     });
//     res.send('image is saved')
// });

app.use('/api/auth',userRouter)
app.use('/api/prod',productRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))