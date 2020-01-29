const Octokit = require("@octokit/rest");

const octokit = new Octokit({
  auth: ""
  
});

//octokit.repos.listForOrg({
//  org
//})

module.exports = octokit
