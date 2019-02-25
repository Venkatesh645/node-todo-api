const express = require('express');
const app = express();
const todoHandler = require('./src/handlers/todo.handler');



app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Request-With, Content-Type, Accept");
  next();
});

app.get('/list', todoHandler.list);

app.listen(PORT, () => {
  console.log(`server started at:${PORT}`);
})
