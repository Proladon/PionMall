const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const { SECRET } = require('./server/dbClient')
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(
    `mongodb://Proladon:${process.env["PASSWORD"]}@cluster0-shard-00-00.rqkkm.mongodb.net:27017,cluster0-shard-00-01.rqkkm.mongodb.net:27017,cluster0-shard-00-02.rqkkm.mongodb.net:27017/${process.env["DB_NAME"]}?ssl=true&replicaSet=atlas-dslk13-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useUnifiedTopology: true, useUnifiedTopology: true },
)

const db = mongoose.connection
db.on('error',  console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("DB Connected!")
})



// Express Server
const app = express();
const port = 3000;

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static("dist"));


// todo: check token exp
// const checkTokenExp = (req, res, next) => {
//     const token = req.body.token
//     try {
//         jwt.verify(token, SECRET);
//         next()
//       } catch(err) {
//         console.log("過期")
//         next()
//       }
// }

// app.use(checkTokenExp)

app.post('/check', (req, res) => {
    console.log("check")
})





// Router
const user = require('./server/router/users')

app.use('/users/', user)

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});
