const categoryServ = require('./category')

categoryServ.methods(['get', 'post', 'put', 'delete'])
categoryServ.updateOptions({new: true, runValidators: true})

module.exports = categoryServ
