module.exports = function(app) {
    var curriculoController = require('./app/controllers/curriculoController')

    app.route('/api/curriculo')
    .get(curriculoController.find)

    app.get('*', function(req, res){
        res.json({
            error: 404,
            about: "Rota não encontrada"
        });
    });
}