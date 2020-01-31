module.exports = function(app) {
    var curriculoController = require('./app/controllers/curriculoController')
  
    app.route('/api/curriculo')
    .get(curriculoController.find)

    app.get('*', function(req, res){
        res.json({
            code: 404,
            about: "Rota não encontrada Acesse: https://emanuel-curriculo.herokuapp.com/api/curriculo"
        });
    });
}