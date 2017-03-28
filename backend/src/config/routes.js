const express = require('express')

module.exports = function(server) {
  // URL base
  const router = express.Router()
  server.use('/api', router)

  // Rotas
  const justLend = require('../api/justLend/justLendService')
  justLend.register(router, '/justLends')
}
