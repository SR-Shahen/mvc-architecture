const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productRouter = require("./routers/products.router");
const userRouter = require("./routers/users.router");
app.use(express.urlencoded({ extended: true }));
app.use(productRouter);
app.use(userRouter);
app.get('/', (req, res) => {
    res.send('Mvc Architecture server is running')
})

app.use((req, res, next) => {
    res.status(400).json({
        message: "Page not found"
    })
})
app.listen(port, (req, res) => {
    console.log('server is running');
})