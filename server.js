'use strict'

// Express Server
const express = require('express')
const app = express()
const port = 3000

// DataBase

var MongoClient = require('mongodb').MongoClient;
const password = 'rex841018'
const dbname = 'Test'
// 3.6 
//const uri = `mongodb+srv://Proladon:${password}@cart.rqkkm.mongodb.net/${dbname}?retryWrites=true&w=majority`

// 2.2.12
const uri = `mongodb://Proladon:${password}@cart-shard-00-00.rqkkm.mongodb.net:27017,cart-shard-00-01.rqkkm.mongodb.net:27017,cart-shard-00-02.rqkkm.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-5r86oi-shard-0&authSource=admin&retryWrites=true&w=majority`


app.use(express.static('dist'))



app.get('/login', (req, res) => {
    console.log("He")
    console.log(req)
})

app.get('/test', (req, server) => {
    MongoClient.connect(uri, (err, db) => {
        const Cart = db.db('Cart')
        Cart.collection('customer').find({}).toArray((err, res) => {
            server.send(res)
        })
        db.close()
    })
    
})


app.listen(port, () => {
    console.log(`listen on: http://localhost:${port}`)
})