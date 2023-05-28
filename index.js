//requisições do servidor

const express = require('express');
const db = require('./routes/db-config');
const app = express();
const body_parser = require('body-parser');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = process.env.PORT || 5000;
app.use(body_parser.urlencoded({ extended : false }));
app.use(body_parser.json());


//ferramentas do servidor
app.use("/js",express.static(__dirname + "/public/js"));
app.use("/css",express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/src"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(cookie());
app.use(express.json());
const fetchProducts = require('./controllers/fetchProducts');
const loggedIn = require("./controllers/loggedIn");
db.connect((err) =>{
  if(err) throw err;
});
app.use("/", require("./routes/pages"));
app.use("/api", require('./controllers/auth'));
app.listen(PORT, ()=>{
  console.log(`Servidor escutando em http://localhost:${PORT}`);
});

app.use(session({
	secret : '1234567dasateasd',
	resave : false,
	saveUninitialized : true,
	cookie : { secure : false }
}));

app.get("/produtos",loggedIn ,fetchProducts,(req, res) =>{
  if(req.user){
    if(!req.session.cart)
		{
			req.session.cart = [];
		}
      res.render("produtos", {status:"LoggedIn", user: req.user , products : req.products, cart : req.session.cart});
    } else{
      res.render("produtos", {status:"Not loggedIn", user:"nothing" , products : result})
    }

})

app.post('/add_cart', (request, response) => {

	const product_id = request.body.product_id;
  console.log(product_id)
	const product_name = request.body.product_name;

	const price = request.body.price;

	let count = 0;

	for(let i = 0; i < request.session.cart.length; i++)
	{

		if(request.session.cart[i].product_id === product_id)
		{
			request.session.cart[i].quantity += 1;

			count++;
		}

	}

	if(count === 0)
	{
		const cart_data = {
			product_id : product_id,
			product_name : product_name,
			price : parseFloat(price),
			quantity : 1
		};

		request.session.cart.push(cart_data);
	}

	response.redirect("/produtos");

});

app.get('/remove_item', (request, response) => {

	const product_id = request.query.id;

	for(let i = 0; i < request.session.cart.length; i++)
	{
		if(request.session.cart[i].product_id === product_id)
		{
			request.session.cart.splice(i, 1);
		}
	}

	response.redirect("/produtos");

});
