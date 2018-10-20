const mongoose = require('mongoose')

mongoose.connect('mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash', () => {
  console.log('DB connected')
})

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: String
})

const imagesModel = mongoose.model('image', imageSchema)

module.exports = imagesModel