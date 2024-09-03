const express = require('express');
const app = express();
const port = 3000;

// Route GET /
app.get('/', (req, res) => {
    res.send('Welcome to my basic Express server!');
});

// Route GET /about
app.get('/about', (req, res) => {
    res.send('This server was created by [Your Name]');
});

// Route GET /contact
app.get('/contact', (req, res) => {
    res.json({
        email: 'your.email@example.com',
        phone: '123-456-7890'
    });
});

// Route GET /api/products
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 30.99 }
    ]);
});

// Dynamic Route GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 },
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 30.99 }
    ];
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// (npm start) write in the terminal of vs code, to check the port 3000