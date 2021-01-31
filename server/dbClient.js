require('dotenv').config()

const dbname = "Cart";

// Driver ^3.6
// const uri = `mongodb+srv://Proladon:${password}@cart.rqkkm.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Driver ^2.2.12
const uri = `mongodb://Proladon:${process.env["PASSWORD"]}@cart-shard-00-00.rqkkm.mongodb.net:27017,cart-shard-00-01.rqkkm.mongodb.net:27017,cart-shard-00-02.rqkkm.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-5r86oi-shard-0&authSource=admin&retryWrites=true&w=majority`
const SECRET = process.env["SECRET"]
module.exports = {uri, SECRET}


