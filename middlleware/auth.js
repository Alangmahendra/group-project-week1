const jwt = require('jsonwebtoken')
// const FB = require('fb'),
//   fb = new FB.Facebook({ appSecret: process.env.APP_SECRET })


const cekToken = (req, res, next) => {
  if (req.headers.token) {
    jwt.verify(req.headers.token, 'foobar', function (err, decoded) {
      console.log('decode', decoded)
    })
    next()
  } else {
    res.status(403).send({
      msg: 'Login Dulu',
    })
  }
}


const getProfile = (req, res, next) => {
  let tokenFb = req.body.accessToken
  fb.api('/me', { fields: ['id', 'name'] }, function (tokenFb) {
    if (!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    console.log(res.id);
    console.log(res.name);
    //next()
  });
}

module.exports = {
  cekToken,
  getProfile
}