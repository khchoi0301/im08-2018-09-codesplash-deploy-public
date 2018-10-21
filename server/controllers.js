const model = require('./models');

module.exports = {
  images: {
    get: (req, res) => {
      console.log('images_get')
      model.images.get((data) => {
        console.log('images_get')
        res.header("Access-Control-Allow-Origin", "*")
        res.send(data)
      })
    }
  },
  author: {
    get: (req, res) => {
      console.log('req', req.params)
      const authorName = req.params.author
      model.author.get(authorName, (data) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.send(data)
      })
    }
  }
}
