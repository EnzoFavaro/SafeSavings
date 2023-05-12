//rota das páginas html
const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    res.render("index")
})

router.get("/login", (req, res) =>{
    res.sendFile('signin.html', {root:"./public"})
})
router.get("/cadastro", (req, res) =>{
    res.sendFile('signup.html', {root:"./public"})
})

module.exports = router;