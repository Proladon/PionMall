const MongoClient = require("mongodb").MongoClient;
const express = require('express')
const router = express.Router()
const {uri, SECRET} = require('../dbClient')
const jwt = require('jsonwebtoken')

const dbname = "Cart";
// Get db Collection
const dbCollention = (client, collection) => client.db(dbname).collection(collection)


//:: user signin
router.post("/signin", (req, response) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    // check user is existing
    MongoClient.connect(uri, (err, db) => {
        if (err) console.log(err)
        
        dbCollention(db, 'customer').findOne(user, (err, result) => {
            if (result) {
                if (err) console.log(err)
                // Sign Token
                jwt.sign({ _id: user.username }, SECRET, { expiresIn: '1h' }, (err,token) => {
                    if (err) throw err
                    response.send({user:user.username, token:token})
                })
            } 
            else {
                response.send("Not found user")
            }
        })
    })
})


// todo: signup new user
router.post("/signup", (req, response) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }

    MongoClient.connect(uri, (err, db) => {
        if(err)console.log(err)
        dbCollention(db, 'customer').insertOne(user, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                response.send('success')
            }
        })
    })
    
})


module.exports = router