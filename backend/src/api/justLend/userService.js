const userService = require('./user')

userService.methods(['get', 'post', 'put', 'delete'])
userService.updateOptions({new: true, runValidators: true})

module.exports = userService
