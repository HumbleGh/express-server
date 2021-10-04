const express = require('express')
const app = express()
const products = [
    {
        id: 1,
        name: "iphone 13 pro max",
        category: "Electronis",
        price: 9900,
        currency: "USD",
        images: "",
        Stars: 4,
        review: "This is an amazing product"
    },
    {
        id: 2,
        name: "Butter Bread",
        category: "Food",
        price: 5,
        currency: "USD",
        images: "",
        Stars: 5,
        review: "This is onre of the breadon the merket"
    }
];

app.get('/', function (req, res) {
    res.json({message: 'Hello World'})
})

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(3000, ()=> {
    console.log("up and running")
})