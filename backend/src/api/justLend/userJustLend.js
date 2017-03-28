const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: false },
  email: { type: String, required: true },
  passwd: { type: String, required: true}
})

module.exports = restful.model('User', userSchema);
