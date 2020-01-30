const express = require('express');
const app = express();
const route = require('./routes');
const port = 3000;
require('dotenv').config()

route(app)


app.listen(port, () => {
    console.log("APi rodando")
})

