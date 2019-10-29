// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log);

async function fetchUsers() {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const data = await response.json();
  console.log(data);
}

fetchUsers();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

let urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

async function getData() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('An error occured:', error);
  }
}

getData();

const getData_for = async function() {
  const array = urls.map(url => fetch(url));
  for await (let request of array) {
    const data = await request.json();
    console.log(data);
  }
};

getData_for();
