const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const { showLogin,
    login,} = require('../controller/login.controller');

const authController = require('../controller/auth.controller');
const router = express.Router();

router.get("/", isNotLoggedIn, authController.getSignin);
router.post("/signin", isNotLoggedIn, authController.postSignin);
router.post("/signup", isNotLoggedIn, authController.postSignup);
router.get("/logout",isLoggedIn, authController.getOut);


module.exports = router