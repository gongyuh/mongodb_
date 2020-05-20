const express = require('express')

const app = express()

app.use(require('cors')())

app.use(express.json())

require('./routes/admin')(app)
require('./plugins/db')(app)

app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type', 'Authorization']
}));
app.listen(3000,()=>{
    console.log('APP is listen at 3000!')
});

// 允许所有的请求形式 
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});