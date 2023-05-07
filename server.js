const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

//Rota Home 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/home', 'home.html'));
});

// Rota Cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/sign up', 'signup.html'));
});

// Rota Login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/sign in', 'signin.html'));
});

// app.get('/checkout', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/paginas', 'checkout.html'));
// });

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});