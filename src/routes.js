module.exports = function(app) {
    var curriculoController = require('./app/controllers/curriculoController')

    app.route('/api/curriculo')
    .get(curriculoController.find)
}