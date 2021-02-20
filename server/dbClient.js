require('dotenv').config()

const dbname = "Cluster0";

// Driver ^3.6
// const uri = `mongodb+srv://Proladon:${password}@cart.rqkkm.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Driver ^2.2.12
const uri = `mongodb://Proladon:${process.env["PASSWORD"]}@cluster0-shard-00-00.rqkkm.mongodb.net:27017,cluster0-shard-00-01.rqkkm.mongodb.net:27017,cluster0-shard-00-02.rqkkm.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-dslk13-shard-0&authSource=admin&retryWrites=true&w=majority`
const SECRET = process.env["SECRET"]
module.exports = {uri, SECRET}


