const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Mvc Architecture server is running')
})
app.get('/product', (req, res) => {
    res.send(`
    <From>
    <input placeholder:"enter your product Name" name:"name">name</input>

    <input placeholder:"enter your product Name" name:"price">name</input>
    <button type:"submit">Save</button>
    </From>
    
    `)
})

app.listen(port, (req, res) => {
    console.log('server is running');
})