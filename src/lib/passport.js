const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require('../Database/dataBase.orm');
const pool = require('..//Database/dataBase.sql');
const helpers = require("../lib/helpers");


passport.use('local.signin', new LocalStrategy({
  usernameField: 'username_terminal',
  passwordField: 'password_terminal',
  passReqToCallback: true
}, async (req, username_terminal, password_terminal, done) => {
  const rows = await pool.query('SELECT * FROM usuarios WHERE username_terminal = ?', [username_terminal]);
  if (rows.length > 0) {
    const user = rows[0];
	console.log(user);

    const validPassword = await helpers.matchPassword(password_terminal, user.password_terminal);

    if (validPassword ) {
      done(null, user, req.flash('success', 'Bienvenido ' + user.nombre_terminal));
    } else {
      done(null, false, req.flash('message', 'Contraseña Incorecta'));
    }
  } else {
    return done(null, false, req.flash('message', 'El nombre de usuario no existe'));
  }
}));

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username_terminal",
      passwordField: "password_terminal",
      passReqToCallback: true
    },
    async (req, username_terminal, password_terminal, done) => {
      const { nombre_terminal } = req.body;

      const newUser = {
        username_terminal,
        password_terminal,
        nombre_terminal
      };
      newUser.password_terminal = await helpers.encryptPassword(password_terminal);
      // Saving in the Database
      const result = await pool.query('INSERT INTO usuarios SET ? ', newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

/* 
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM terminales WHERE id_terminal = ?', [id]);
  done(null, rows[0]);
}); */

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});