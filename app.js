const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

//USED FOR LATER
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw err;
    
    //   console.log('Portfolio complete! Check out index.html to see the output!');
    // });
    
    
    
    
    
    //NO LONGER IN USE
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;
// console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

//   printProfileData(profileDataArgs);
