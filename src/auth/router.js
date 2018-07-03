'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('api/signup', (req, res, next) => {
  let user = new User(req.body);
  if (Object.keys(req.body).length === 0) {
    res.status(400).send('Bad Request');
  }
  else {
    user.save()
      .then(user => res.send(user.generateToken()))
      .catch(err => console.error(err));
  }
});

authRouter.get('api/signin',auth, (req, res, next) => {
  if (req.body === null) {
    res.status(401).send('Unauthorized');
  }
  else {
    res.cookie('Token', req.token);
    res.send('This is a test');
  }
});

export default authRouter;
