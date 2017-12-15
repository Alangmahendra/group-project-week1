const User = require('../models/user-schema')
const jwt = require('jsonwebtoken')
let message = ''

const createUser = (req, res) => {
  console.log(req.body)
  User.create({
    username: req.body.username
  })
  .then(user => {
    message = 'Succes Create One Data'
    res.status(200).send({ user: user, msg: message })
  })
  .catch(err => {
    console.log('err')
  })
}

const getAllUsers = (req, res) => {
  User.find()
  .then(users => {
    res.status(200).send(users)
  })
  .catch(err => {
    console.log('err')
  })
}

const findById = (req, res) => {
  User.find({ username: req.params.username })
  .then(user => {
    res.status(200).send({ user })
  })
  .catch(err => {
    console.log(err)
  })
}

const findByIdAndUpdate = (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }, {
    username: req.body.username
  })
  .then(user => {
    res.status(200).send(user)
  })
  .catch(err => {
    console.log(err)
  })
}

const findByIdAndRemove = (req, res) => {
  User.findByIdAndRemove({ _id: req.params.id })
  .then(user => {
    res.status(200).send(user)
  })
  .catch(err => {
    console.log(err)
  })
}

const login = (req, res) => {
  console.log(req.body, '-----')
  User.findOrCreate({ username: req.body.username }, (err, result) => {
    if (!err) {
      let payload = {
        userId: req.body.userId,
        accesToken: req.body.accesToken
      }
      let token = jwt.sign(payload, 'foobar')
      console.log(token, 'ini token server')
      res.status(200).send(token)
    } else {
      res.status(500).send({ msg: 'wrong input', err: err })
    }
  })
}


module.exports = {
  createUser,
  getAllUsers,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove,
  login
}