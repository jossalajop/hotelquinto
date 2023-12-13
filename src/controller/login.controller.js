const loginCtl = {};
const passport = require("passport");

loginCtl.showLogin = (req, res) => {
  res.render("login");
};

loginCtl.login = passport.authenticate("local.signin", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true,
});

loginCtl.logout = (req, res) => {
    req.logOut();
    res.redirect("/");
  };

  
module.exports = loginCtl;