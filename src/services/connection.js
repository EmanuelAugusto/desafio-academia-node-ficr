const axios = require("axios");

const Conection = axios.create({
    baseURL: 'https://api.github.com/users/repos',
    timeout: 1000,
})

module.exports = Conection