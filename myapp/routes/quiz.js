const express = require('express');

const router = express.Router();

// check active session.
function authorize(req, res, next) {
  if (!req.session.userId) {
    return next({
      status: 401,
      message: 'Unauthorized',
    });
  }
  return next();
}

router.get('/', authorize, (req, res) => {
  const { userId } = req.session;
  const id = userId;
  res.render('quiz');
});

module.exports = router;
