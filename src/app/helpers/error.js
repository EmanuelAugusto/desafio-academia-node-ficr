const errorMessage = (error, status) => {

    return {
        erro: status, 
        about: "Ocorreu um erro interno no servidor"
    }
}

module.exports = errorMessage