module.exports = app => {
    const mongoose = require('mongoose')

    // mongoose.connect('mongodb:127.0.0.1:27017/node-vue-model',{
    //     useNewUrlParser: true
    // })
    // .then(() => console.log('MongoDB Connected...'))
    // .catch((err) => console.log(err))
    mongoose.connect('mongodb://localhost/node-vue-model', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

}