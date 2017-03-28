const restful = require('node-restful')
const mongoose = restful.mongoose

const CategorySchema = mongoose.Schema({
  name: { type: String, required: true }
})

module.exports = restful.model('Category', categorySchema);
