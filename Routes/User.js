const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User');
const { isAuth } = require('../Middlewares/isAuth');
const { validationLoggin, validationRegister, Validation } = require('../Middlewares/validatorRegister');
const userRouter = express.Router()

userRouter.post('/SignUp',validationRegister,Validation,SignUp)

userRouter.post('/SignIn',validationLoggin,Validation,SignIn)

userRouter.get('/getCurrentUser',isAuth,(req,res)=>{res.send(req.user)})

module.exports = userRouter