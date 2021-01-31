const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const {SECRET} = require('./server/dbClient')

// Express Server
const app = express();
const port = 3000;

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static("dist"));


// todo: check token exp
const checkTokenExp = (req, res, next) => {
    const token = req.body.token
    try {
        jwt.verify(token, SECRET);
        next()
      } catch(err) {
        console.log("過期")
        next()
      }
}

app.use(checkTokenExp)

app.post('/check', (req, res) => {
    console.log("check")
})



// Router
const user = require('./server/router/user')

app.use('/user/', user)

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});
