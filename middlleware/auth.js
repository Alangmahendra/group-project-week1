const jwt = require('jsonwebtoken')


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


// const auth = (decode) => {
//   fb.api('4', { fields: ['id', 'name'] }, function (res) {
//     if (!res || res.error) {
//       console.log(!res ? 'error occurred' : res.error);
//       return;
//     }
//     console.log(res.id);
//     console.log(res.name);
//   });
// }

module.exports = {
  cekToken
}