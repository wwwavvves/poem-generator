let poemFormElement = document.querySelector("#poem-generator-form");
let inputBtn = document.querySelector("#topic-input");
let poemElement = document.querySelector("#poem");

poemFormElement.addEventListener("submit", writePoem);

function writePoem(event) {
  event.preventDefault();
  alert(inputBtn.value);
}
