const express = require('express')
const app = express()
const indexRouter = require('./routes/index');

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}));

app.use('/',indexRouter);


app.listen(3000);