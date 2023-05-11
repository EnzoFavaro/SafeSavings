//controles do servidor

const express = require('express');
const db = require('./routes/db-config');
const app = express();
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

app.use("/js",express.static(__dirname + "/public/js"));
app.use("/css",express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/src"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());
db.connect((err) =>{
  if(err) throw err;
});


app.use("/", require("./routes/pages"));
app.use("/api", require('./controllers/auth'));
app.listen(PORT);


// const path = require('path');
// const port = 3000;

// app.use(express.static(path.join(__dirname, 'src')));

// //Rota Home 
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/home', 'home.html'));
// });

// // Rota Cadastro
// app.get('/cadastro', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/sign up', 'signup.html'));
// });

// // Rota Login
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/sign in', 'signin.html'));
// });

// // app.get('/checkout', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public/paginas', 'checkout.html'));
// // });

// app.listen(port, () => {
//   console.log(`Servidor escutando em http://localhost:${port}`);
// });

