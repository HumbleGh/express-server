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

const customers = [
    {
        id: 1,
        name: "Regan Kofi Marfo",
        gender: "Male"
    },
    {
        id: 2,
        name: "Kwame Nkrumah",
        gender: "Male"
    },
    {
        id: 1,
        name: "Yaa Asantewaa",
        gender: "Female"
    }
]
// This wil print the mesage 
app.get('/', function (req, res) {
    res.json({message: 'Hello World'})
})
// This is a callback of products
app.get('/products', (req, res) => {
    res.json(products);
});
// This is a callback for customers
app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:customerID', (req, res) => {
    const {customerID} = req.params;
    console.log(`The customer's id is ${customerID}`)
    res.json(customers[customerID -1]);
});

