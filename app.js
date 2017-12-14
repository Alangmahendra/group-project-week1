const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/footyvid`)
 .then(() => console.log('db connection succesfull to footyvid'))
 .catch((err) => console.log(err))

app.get('/', function(req, res){
res.send('hello world')
})

const api = require('./routes/api')
app.use('/api', api )
app.use('/api/football', require('./routes/score'))
app.use('/api/youtube', require('./routes/youtube'))

app.listen(8000)
