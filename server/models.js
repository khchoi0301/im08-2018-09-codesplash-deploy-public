const images = require('./config');

module.exports = {
    images: {
        get: (callback) => {
            images.find((err, data) => {
                if (err) throw err;
                callback(data)
            })
        }
    },
    author: {
        get: (authorName, callback) => {
            console.log(authorName, 'authorName')
            images.find({ author: authorName }, (err, data) => {
                if (err) throw err
                callback(data)
            })
        }
    }
}