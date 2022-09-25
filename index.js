const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Mvc Architecture server is running')
})
const products = [
    {
        name: "rice",
        price: '35'
    },
    {
        name: "biryani",
        price: '54'
    }
]
app.get('/products', (req, res) => {
    res.send(htmlFrom)
})

const htmlFrom = `
<form method="POST" action="/products" >
    <input type="text" name="name" placeholder="Enter name"/>
    <input type="number" name="price" placeholder="Enter price"/>
    <button type="submit">Save Products</button>
</form>
`
app.post('/products', (req, res) => {
    const name = req.body.name;
    const price = Number(req.body.price);
    const product = {
        name,
        price
    }
    products.push(product);
    res.status(201).json({
        success: true,

        products,
    });
});
app.use((req, res, next) => {
    res.status(400).json({
        message: "Page not found"
    })
})
app.listen(port, (req, res) => {
    console.log('server is running');
})