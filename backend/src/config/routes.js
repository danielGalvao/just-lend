const express = require('express')
const auth = require('./auth')

module.exports = function(server) {
  /*
  * Protected routes
  */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)
  //protectedApi.use(auth)

  const categoryService = require('../api/justLend/categoryService')
  categoryService.register(protectedApi, '/categories')

  const objetoService = require('../api/justLend/objetoService')
  objetoService.register(protectedApi, '/objetos')

  /*
  * Public routes
  */
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const AuthService = require('../api/user/UserService')
  openApi.post('/login', AuthService.login)
  openApi.post('/singunp', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)
}
