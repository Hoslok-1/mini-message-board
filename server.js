const express = require('express')
const app = express()
const userRouter = require('./routes/users');
const indexRouter = require('./routes/index');

app.set('view engine','ejs')


app.use('/',indexRouter);
app.use('/users',userRouter)


app.listen(3000);