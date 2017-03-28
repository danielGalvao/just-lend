const objetoService = require('./objeto')

objetoService.methods(['get', 'post', 'put', 'delete'])
objetoService.updateOptions({new: true, runValidators: true})

module.exports = objetoService
