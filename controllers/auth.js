//módulos de autorização do roteador
const express = require("express");
const router = express.Router();
const register = require('./register');
const login = require('./login');
const add = require('./addCart');


router.post("/register", register);
router.post("/login", login);
// router.post("/add", add);

module.exports = router;