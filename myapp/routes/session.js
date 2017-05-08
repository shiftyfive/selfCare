const express = require('express');
const knex = require('../db');
const bcrypt = require('bcrypt-as-promised');

const router = express.Router();

// Checks if session exists, to do auth stuff on website
router.get('/', (req, res) => {
  if (req.session.userId) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
});

// Login and create session
router.post('/new', (req, res, next) => {
  const { email, password } = req.body;
  const loginError = new Error('Bad Username or Password');

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw loginError;
      }

      user = row;

      return bcrypt.compare(password, user.hashed_password);
    })
    .then(() => {
      delete user.hashed_password;

      req.session.userId = user.id;

      res.redirect('/quiz');
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw loginError;
    })
    .catch((err) => {
      next(err);
    });
});

// Logout and delete session
router.delete('/', (req, res) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
