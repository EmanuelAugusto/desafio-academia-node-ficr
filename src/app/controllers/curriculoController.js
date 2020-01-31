
const api = require('../../services/webServiceGit');
const Conection = require('../../services/connection');
const skeleton = require('../helpers/skeleton');
const errorMessage = require('../helpers/error');

module.exports = {

    find:async (req, res) => {

        let profiles = [];
        try{
            const gitRepos  = await api.request('/user/repos')

            const gitProfile  = await api.request('/user')

            const face = await Conection.get(`me?fields=picture%2Cfirst_name%2Clast_name%2Caddress%2Clocation%2Cgender%2Cbirthday%2Cemail&access_token=${process.env.face_token}`)

             profiles.push(face.data);

             profiles.push(gitProfile.data)

             res.send(skeleton(profiles, gitRepos.data))
        
        }catch (error){
            res.send(errorMessage(error, 500));
        }
    }
}