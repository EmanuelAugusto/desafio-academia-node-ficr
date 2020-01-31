const express = require('express');
const app = express();
const route = require('./routes');
const port = process.env.PORT || 3000;
require('dotenv').config()

app.set('json spaces',4)

route(app)

app.listen(port, () => {
    console.log("APi rodando")
})

