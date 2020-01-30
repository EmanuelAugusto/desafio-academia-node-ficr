const axios = require("axios");

const ConectionFace = axios.create({
    baseURL: 'https://graph.facebook.com/v5.0/',
    timeout: 1000,
})

module.exports = ConectionFace