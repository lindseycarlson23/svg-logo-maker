const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your first name?',
      name: 'firstname',
    },
    {
      type: 'input',
      message: 'What is your last name?',
      name: 'lastname',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your bio?',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
  ])

  .then((response) =>  ///response is the object created by inquirer after user answers
      fs.writeFile('index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

    <title>Document</title>
</head>
<body>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Location</th>
            <th scope="col">Bio</th>
            <th scope="col">LinkedIn</th>
            <th scope="col">GitHub</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" id="first-name">${response.firstname}</th>
            <th scope="row" id="last-name">${response.lastname}</th>
            <th scope="row" id="location">${response.location}</th>
            <th scope="row" id="bio">${response.bio}</th>
            <th scope="row" id="linkedin">${response.linkedin}</th>
            <th scope="row" id="github">${response.github}</th>
          </tr>
         
        </tbody>
      </table>
      <script src= "script.js"></script>
</body>
</html>
      `, (err) =>
      err? console.log(error) : console.log('Success, written to file!')
    )
  );