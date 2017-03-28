const JustLend = require('./justLend')

JustLend.methods(['get', 'post', 'put', 'delete'])
JustLend.updateOptions({new: true, runValidators: true})

module.exports = JustLend
