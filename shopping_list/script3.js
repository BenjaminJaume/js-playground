var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

var todosImportant = [
  "clean room!",
  "brush teeth!",
  "exercise!",
  "study javascript!",
  "eat healthy!"
];

function logTodos(todo, i) {
  console.log(todo + " : " + i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);
