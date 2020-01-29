
const api = require('../../services/webServiceGit')
const Conection = require('../../services/connection');

module.exports = {

    find:async (req, res) => {
        try{
            const { data } = await api.request('/user/repos')
             
            res.json(data)
        }catch (error){
            console.log('error', error)
            res.sendStatus(500)
        }
    }
}