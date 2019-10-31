var i = 0;

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButtons = document.querySelectorAll(".deleteButton");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value + " "));
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  button.className = "deleteButton";
  button.setAttribute("type", "button");
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
  deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons[deleteButtons.length-1].addEventListener("click", removeElementList);
  li = document.getElementsByTagName("li");
  li[li.length-1].addEventListener("click", toggleLineThrough);
}

function addListAfterClick() {
  if(inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress() {
  if(inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function toggleLineThrough(e) {
  var selected = e.target;
  selected.classList.toggle("done");
}

function removeElementList(e) {
  var selected = e.target;
  var liTag = selected.parentNode;
  var list = liTag.parentNode;
  list.removeChild(liTag);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

for(i = 0; i < li.length; i++) {
  li[i].addEventListener("click", toggleLineThrough);
};

for(i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", removeElementList);
};
