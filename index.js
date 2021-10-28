
const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

//user: TestDBUser
//pass: i9e2a0dFwzkwggSl

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.p6wrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try {
        await client.connect();
        console.log("database is connected")
    }
    finally {
      //  await client.close()
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World !!!!! This is me Abdul kader Akash');
})

app.listen(port, () => {
    console.log('listening at http://localhost',port)
})