const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./database/index');
const routes = require('./routes/routes')

const app = express();

app.use(express.json())
app.use(routes)

app.listen(3000, ()=>console.log('rodando na porta 3000'))