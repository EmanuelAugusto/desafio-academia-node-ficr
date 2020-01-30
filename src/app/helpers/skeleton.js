const skeleton = (objs) => {

console.log(objs);


    let molde =  {
        nome: objs[0].first_name + " " + objs[0].last_name,
        data_nascimento: objs[0].birthday,
        endereco: objs[0].location.name,
        email: objs[0].email,
        genero: objs[0].gender,
        bio: "Full Stack developer and Mobile developer",
        foto: objs[0].picture.data.url,
        formacao: [
          {
            instituicao: "ficr",
            curso: "ADS",
            inicio: "12/12/2014",
            termino: "01/04/2020"
          }
        ],
        experiencia_profissional: [
          {
            empresa: "Accenture",
            funcao: "Engenheiro de Software",
            atividade: "Desenvolver api de integraçoes com servicos externos",
            inicio: "12/12/2014",
            termino: "atual"
          },
          {
            empres: "Ficr",
            funcao: "Engenheiro de Software",
            atividade: "Desenvolver api de integraçoes com servicos externos",
            inicio: "12/12/2014",
            termino: "atual"
          },
          {
            empresa: "Google",
            funcao: "Engenheiro de Software",
            atividade: "Desenvolver api de integraçoes com servicos externos",
            inicio: "12/12/2014",
            termino: "atual"
          }
        ],
        "github": {
          "perfil": "https://github.com/fulano",
          "alguns_repositorios": [
            {
              "size": 49,
              "name": "academia-nodejs-ficr",
              "url": "https://api.github.com/repos/mizamelo/academia-nodejs-ficr"
            },
            {
              "size": 37,
              "name": "academia-php",
              "url": "https://api.github.com/repos/mizamelo/academia-php"
            },
            {
              "size": 23,
              "name": "academia-php2",
              "url": "https://api.github.com/repos/mizamelo/academia-php2"
            }
          ]
        }
      }

      return molde
}

module.exports = skeleton