const express = require('express')
const router = express.Router()
const User = require('../model/User')
const { registerValidation, loginValidation } = require('../../validation/validation')
const verifyToken = require('../middleware/verifyToken')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


//:: user sign up
router.post('/signup', async (req, res) => {
    console.log(req.body)

    // Validate input data
    const {error} = registerValidation(req.body)
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


router.post('/signin', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    // Check if email already in database
    const user = await User.findOne({ email: req.body.email })
    if (!user) {return res.status(401).send('Email is not found')}

    // Check password
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')

    // assign  jet token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})


router.get('/verifyToken', verifyToken ,(req, res) => {
    res.send('?')
})


module.exports = router