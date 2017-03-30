const objetoService = require('./objeto')

objetoService.methods(['get', 'post', 'put', 'delete'])
objetoService.updateOptions({new: true, runValidators: true})

objetoService.route('count', (req, res, next) => {
  objetoService.count((error, value) => {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = objetoService
