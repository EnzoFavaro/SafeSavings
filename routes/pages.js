//rota das páginas html
const express = require("express");
const loggedIn = require("../controllers/loggedIn");
const logout = require("../controllers/logout");
const remove = require('../controllers/removeCart');
const fetchProducts = require('../controllers/fetchProducts');
const router = express.Router();




router.get("/",loggedIn ,(req, res) =>{
    if(req.user){
    res.render("index", {status:"LoggedIn", user: req.user});
    } else{
        res.render("index", {status:"Not loggedIn", user:"nothing"})
    }
})

router.get("/produtos",loggedIn ,fetchProducts,(req, res) =>{
		if(req.user){
            res.render("produtos", {status:"LoggedIn", user: req.user , products : req.products});
            } else{
                res.render("produtos", {status:"Not loggedIn", user:"nothing" , products : result})
            }

})

router.get("/login", (req, res) =>{
    res.sendFile('signin.html', {root:"./public"})
})
router.get("/cadastro", (req, res) =>{
    res.sendFile('signup.html', {root:"./public"})
})
router.get("/logout", logout)
// router.get("/remove", remove);

module.exports = router;