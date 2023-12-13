const express = require('express');

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const Auth={}


Auth.getSignin = (req, res) => {
    res.render("login");
};

Auth.postSignin = async (req, res, next) => {

  passport.authenticate('local.signin', {
    successRedirect: '/inicio2',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next);
 

};



Auth.postSignup = async (req, res, next) => {
    passport.authenticate('local.signup',{
  successRedirect: '/inicio2',
  failureRedirect: '/',
  failureFlash: true
    })(req, res, next);
};

Auth.getOut = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
};

module.exports = Auth