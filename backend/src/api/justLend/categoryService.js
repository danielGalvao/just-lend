const categoryService = require('./category')

categoryService.methods(['get', 'post', 'put', 'delete'])
categoryService.updateOptions({new: true, runValidators: true})

module.exports = categoryService
