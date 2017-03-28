const express = require('express')

module.exports = function(server) {
  // URL base
  const router = express.Router()
  server.use('/api', router)

  // Rotas
  const userService = require('../api/justLend/userService')
  userService.register(router, '/users')

  const categoryService = require('../api/justLend/categoryService')
  categoryService.register(router, '/categories')

  const objetoService = require('../api/justLend/objetoService')
  objetoService.register(router, '/objetos')

}
