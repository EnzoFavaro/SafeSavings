//requisições do servidor

const express = require('express');
const db = require('./routes/db-config');
const app = express();
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;


//ferramentas do servidor
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
app.listen(PORT, ()=>{
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});
