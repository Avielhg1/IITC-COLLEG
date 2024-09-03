const express = require('express');
const app = express();
const port = 3000;

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome all to my basic Express server!');
});

// Route for GET /about
app.get('/about', (req, res) => {
  res.send('This server was created by [Aviel]');
});

// Route for GET /contact
app.get('/contact', (req, res) => {
  res.json({
    email: 'aviel1950@gmail.com',
    phone: '050-9880982'
  });
});

// Route for GET /api/products
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'bamba', price: 10.99 },
        { id: 2, name: 'bisli', price: 20.99 },
        { id: 3, name: 'chips', price: 30.99 }
    ]);
});

// Dynamic Route GET /api/products/:id
app.get('/api/products/:id', (req, res) => {
  const products = [
    { id: 1, name: 'bamba', price: 10.00 },
    { id: 2, name: 'bisli', price: 20.00 },
    { id: 3, name: 'chips', price: 30.00 }
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// (npm start) write in the terminal of vs code, to check the port 3000