let poemFormElement = document.querySelector("#poem-generator-form");
let inputBtn = document.querySelector("#topic-input");
let poemElement = document.querySelector("#poem");
// let prompt = inputBtn.value;

poemFormElement.addEventListener("submit", writePoem);

function writePoem(event) {
  event.preventDefault();
  new Typewriter(poemElement, {
    strings: "Threads of Memory", // answer
    autoStart: true,
    cursor: "",
    delay: 80,
  });
}
