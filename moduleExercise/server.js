// Server.js
// const express = require('express');
const fs = require('fs');

// const app = express();

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('errrror');
  }
  console.log('1', data.toString());
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// fs.appendFile('./hello.txt', `\nI think I did useful things today`, err => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.writeFile('bye.txt', 'Sad to see you go', err => {
  if (err) {
    console.log(err);
  }
});
