'use strict';

// to make a unit work w/mock needs to be a constructor or a class
export default {

  authenticate: (auth) => {
    if ( (!!auth.username && !!auth.password) ) {
      return Promise.resolve({
        generateToken: () => {return 'token!';},
      });
    }
    else {
      return Promise.resolve(null);
    }
  },
};
