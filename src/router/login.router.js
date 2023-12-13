const express = require("express");
const {
  showLogin,
  login,
  showRegister,
  registro,
  cerrarSesion,
} = require("../controller/login.controller");
const router = express.Router();

router.get("/login", showLogin);
router.post("/login", login);
router.get("/registro", showRegister);
router.post("/registro", registro);
router.get("/cierreSesion", cerrarSesion);

module.exports = router;