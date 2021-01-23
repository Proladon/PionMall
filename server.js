const express = require("express");
const cors = require('cors');
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require('body-parser');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const port = 3000;

const password = "rex841018";
const dbname = "Cart";

// Driver ^3.6
// const uri = `mongodb+srv://Proladon:${password}@cart.rqkkm.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Driver ^2.2.12
var uri = `mongodb://Proladon:${password}@cart-shard-00-00.rqkkm.mongodb.net:27017,cart-shard-00-01.rqkkm.mongodb.net:27017,cart-shard-00-02.rqkkm.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-5r86oi-shard-0&authSource=admin&retryWrites=true&w=majority`


app.use(express.static("dist"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    MongoClient.connect(uri, function (err, client) {
        client.db('Cart').collection('customer').find().toArray((err, data) => {
            res.send(data)
        })
      // perform actions on the collection object
      client.close();
    });
});

app.post("/send", (req, res) => {
    MongoClient.connect(uri, function (err, client) {
        if (err) { res.send('err') }
        else {
            client.db('Cart').collection('customer').insertOne({name:req.body.name})
            // perform actions on the collection object
            client.close();
            res.send('success')
        }
    });
});

app.listen(port, () => {
    console.log(`listen on: http://localhost:${port}`);
});
