const restful = require('node-restful')
const mongoose = restful.mongoose

const objetoSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  descr: { type: String, required: false, max: 2000 },
  image: { type: String, required: false },
  status: {
    type: String, required: false, uppercase: true,
    enum: ['ENABLE', 'DISABLE', 'LENDED']
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = restful.model('Objeto', objetoSchema);
