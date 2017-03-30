const port = 3003

const bodyParser  = require('body-parser')
const express     = require('express')
const server      = express()
const allowCors   = require('./cors')
const queryParser = require('express-query-int')

server
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(allowCors)
  .use(queryParser)


server.listen(port, function(){
  console.log(`Backend is running on port ${port}`)
})

module.exports = server
