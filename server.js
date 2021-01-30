const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const cors = require('cors');

const password = "rex841018";
const dbname = "Cart";
const SECRET = "pionmall_secret"

// Driver ^3.6
// const uri = `mongodb+srv://Proladon:${password}@cart.rqkkm.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Driver ^2.2.12
const uri = `mongodb://Proladon:${password}@cart-shard-00-00.rqkkm.mongodb.net:27017,cart-shard-00-01.rqkkm.mongodb.net:27017,cart-shard-00-02.rqkkm.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-5r86oi-shard-0&authSource=admin&retryWrites=true&w=majority`


// get db Collection
const dbCollention = (client, collection)=> client.db(dbname).collection(collection)


// Express Server
const app = express();
const port = 3000;

// use middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static("dist"));


app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Get all Data
app.get("/getAll", (req, res) => {
    MongoClient.connect(uri, (err, db) =>{
        if (err) throw err
        dbCollention(db, 'customer').find().toArray((err, data) => {
            console.log(data)
            res.send(data)
        })
      db.close();
    });
});


// Sign up create user
app.post("/createUser", (req, res) => {

    MongoClient.connect(uri, (err, db)=>{
        if (err) { res.send('err') }
        else {
            // todo: check existing

            // create user
            dbCollention(db, 'customer').insertOne({name:req.body.name})
            db.close();
            res.send('success')
        }
    });
});


//:: user signin
app.post("/user/signin", (req, response) => {
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
                    response.send(token)
                })
            } 
            else {
                response.send("Not found user")
            }
        })
    })
})


// todo: signup new user
app.post("/user/signup", (req, response) => {
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
 

app.listen(port, () => {
    console.log(`listen on: http://localhost:${port}`);
});
