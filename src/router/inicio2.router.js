const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const { Mostrar, mandar } = require('../controller/inicio2.controller');

const router = express.Router();

router.get ('/inicio2',isLoggedIn, Mostrar)
router.post ('/inicio2',isLoggedIn, mandar)

module.exports = router