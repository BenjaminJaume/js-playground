var database = [
  {
    username: "Benjamin",
    password: "secret"
  },
  {
    username: "Alan",
    password: "!123!"
  },
  {
    username: "Beth",
    password: "fistule"
  }
];

var newsfeed = [
  {
    username: "Mitch",
    timeline: "That's is a lot of lessons",
    datestamp: "08/04/2019"
  },
  {
    username: "Conor",
    timeline: "I don\'t know if I like JavaScript yet",
    datestamp: "18/03/2012"
  },
  {
    username: "Simon",
    timeline: "Why though?",
    datestamp: "12/19/2020"
  }
];

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if(database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(user, pass) {
    if(isUserValid(user, pass)) {
        alert("Welcome back, " + user);
        console.log(newsfeed);
    } else {
        alert("There is a problem in the authentification");
    }
  }

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt);
