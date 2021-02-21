const express = require('express')
const router = express.Router()
const User = require('../model/User')
const {registerValidation} = require('../validation')
const bcrypt = require('bcryptjs')


//:: user sign up
router.post('/', async (req, res) => {

    // Validate input data
    const {error} = await registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // Check if email already in database
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('Email already exists')
    
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await  bcrypt.hash(req.body.password, salt)
    // Create new user model
    const user = new User({
        username: req.body.username,
        password: hashpassword,
        email: req.body.email,
    })

    try {
        const saveUser = await user.save()
        res.send({user: user._id})
    } catch (err) {
        res.status(400).send(err)
    }
})




router.get('/getall', (req, response) => {

    dbCollention(db, 'Customer').find().toArray((err, data) => {
        response.send(data)
    })
})


module.exports = router