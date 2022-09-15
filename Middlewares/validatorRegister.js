const { body, validationResult } = require('express-validator');

exports.validationRegister = [
    body('name','Name must contain at last 5 caractere').isLength({min : 5}),
    body('email','Please enter a valid email').isEmail(),
    body('password','Name must contain 6 char').isLength({min : 6})
]

exports.validationLoggin = [
    body('email','Please enter a valid email').isEmail(),
    body('password','Name must contain at last 6 caractere').isLength({min : 6})
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}