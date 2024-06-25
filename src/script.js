let poemFormElement = document.querySelector("#poem-generator-form");
let inputBtn = document.querySelector("#topic-input");
let poemElement = document.querySelector("#poem");

poemFormElement.addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
  let context =
    "You are very knowledgeable about the poetry of Li-Young Lee, Frank O'Hara, Yoko Ono and Louise Glück and you are brilliant at writing short poems inspired by these writers. Please sign the poem at the end with 'SheCodes AI' between a <strong> element in the HTML";
  let prompt = `Generate an original poem with two stanzas in the style of Li-Young Lee, Frank O'Hara, Yoko Ono and Louise Glück mixed together about ${inputBtn.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemElement.innerHTML = "Generating poem...";
  axios.get(apiUrl).then(doSomething);
}

function doSomething(response) {
  let answer = response.data.answer.replace(/\n/g, "<br>");
  console.log(answer);

  new Typewriter(poemElement, {
    strings: answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}
