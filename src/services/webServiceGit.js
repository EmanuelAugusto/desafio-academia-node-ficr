const Octokit = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.git_token
  
});

//octokit.repos.listForOrg({
//  org
//})

module.exports = octokit
