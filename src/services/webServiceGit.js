const Octokit = require("@octokit/rest");


//Autenticção do git
const octokit = new Octokit({
  auth: process.env.git_token
});


module.exports = octokit
