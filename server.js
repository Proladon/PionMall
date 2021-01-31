const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

// Express Server
const app = express();
const port = 3000;

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static("dist"));

// Router
const user = require('./server/router/user')

app.use('/user/', user)

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});
