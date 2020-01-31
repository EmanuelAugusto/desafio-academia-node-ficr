const skeleton = (objs, gitRepoSort) => {
  //Ajuda a montar o esqueleto do json
  let repos = [];

  const repositorios =  gitRepoSort.sort( (a,b) => {
    if(a.size > b.size) return -1
    if(b.size > a.size) return 1
    return 0
  })

  for(let i in repositorios){
    const reposOrder =  gitRepoSort[i].size;
    const reposName =  gitRepoSort[i].name;
    const reposUrl =  gitRepoSort[i].url;
    repos.push({size: reposOrder, name: reposName, url: reposUrl })
    if(i > 1)
    break;
  }

    let molde =  {
        nome: objs[0].first_name + " " + objs[0].last_name,
        data_nascimento: objs[0].birthday,
        endereco: objs[0].location.name,
        email: objs[0].email,
        genero: objs[0].gender,
        bio: objs[1].bio,
        foto: objs[0].picture.data.url,
        formacao: [
          {
            instituicao: "Faculdade Católica Imaculada Conceição do Recife",
            curso: "Análise e Desenvolvimento de Sistemas",
            inicio: "18/02/2019",
            termino: "25/12/2020"
          }
        ],
        experiencia_profissional: [
          {
            empresa: "UNU DIGITAL",
            funcao: "Estágiario em Desenvolvimento de Softwares",
            atividade: "Desenvolver e fazer manutenção em sites, aplicativos com as seguintes tecnologias:  PHP, Javascript, Swift, Java, APi's(Node.js e PhP), React Native e Swift",
            inicio: "12/09/2019",
            termino: "atual"
          }
        ],
        github: {
          perfil: objs[1].url,
          alguns_repositorios: repos
        }
      }

      return molde
}

module.exports = skeleton