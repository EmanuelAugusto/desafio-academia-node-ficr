const axios = require("axios");

//Cria o serviço de Conexão do axios
const ConectionFace = axios.create({
    baseURL: 'https://graph.facebook.com/v5.0/',
    timeout: 1000,
})

module.exports = ConectionFace