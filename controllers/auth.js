const express = require("express");
const router = express.Router();
const register = require('./register');
const login = require('./login');
const logout = require('./logout')

// router.post("/cadastrar", register)
// router.post("/login", register)
// router.get("/logout", logout)

module.exports = router;