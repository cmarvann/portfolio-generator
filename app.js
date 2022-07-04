// fs statement
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
console.log(profileDataArgs);

// // one way to store argument in distinct variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// another way to store argument in single expression
// same as above distince variables
const [name, github] = profileDataArgs;
console.log(name, github);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]) ;
//   }

//   console.log('jane', 'janehub');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem)); 

// };

// printProfileData(profileDataArgs);



// // With template literals, we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax
// const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

// // interpolated the text using variables passed into the function that created the output
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

// Assignemnt destructuring


// Argu 1 file name - output file
// Argu 2 date bing written
// Argu 3 call back func - hamdle errors & success messages

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
