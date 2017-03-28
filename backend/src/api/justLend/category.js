const restful = require('node-restful')
const mongoose = restful.mongoose

const categorySchema = mongoose.Schema({
  name: { type: String, required: true }
})

module.exports = restful.model('Category', categorySchema);
