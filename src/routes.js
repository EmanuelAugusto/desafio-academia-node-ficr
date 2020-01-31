module.exports = function(app) {
    var curriculoController = require('./app/controllers/curriculoController')

    app.route('/', function(req, res){
        res.json({
            status: "Api rodando",
            code: 200
        });
    })   
    app.route('/api/curriculo')
    .get(curriculoController.find)

    app.get('*', function(req, res){
        res.json({
            error: 404,
            about: "Rota não encontrada"
        });
    });
}