
const api = require('../../services/webServiceGit');
const Conection = require('../../services/connection');
const skeleton = require('../helpers/skeleton');




module.exports = {

    find:async (req, res) => {

        let profiles = [];
        try{
            const git  = await api.request('/user/repos')

            const face = await Conection.get(`me?fields=picture%2Cfirst_name%2Clast_name%2Caddress%2Clocation%2Cgender%2Cbirthday%2Cemail&access_token=${process.env.face_token}`)
             //console.log(JSON.stringify(facebook))

             profiles.push(face.data);

             profiles.push(git.data[0])

             res.send(skeleton(profiles))

        
        }catch (error){
            console.log('error', error)
            res.sendStatus(500)
        }
    }
}