const express = require('express');
const app = express();
const cors = require('cors');
const todoHandler = require('./src/handlers/todo.handler');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.use(cors());
app.options('*', cors());

app.get('/list', todoHandler.list);
app.post('/item', todoHandler.create);
app.put('/updateItemsOrder', todoHandler.updateItemsOrder);

app.listen(PORT, () => {
  console.log(`server started at:${PORT}`);
})
