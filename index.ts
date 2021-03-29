let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let answer = numberOne * numberTwo;
let boolean = true;

const word = document.createElement("div");
word.textContent = `${numberOne} Times ${numberTwo}`;
document.body.append(word);

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
input.type = "number";
form.append(input);

const button = document.createElement("button");
button.textContent = "Submit";
form.append(button);

const string = document.createElement("span");
document.body.append(string);

form.addEventListener("submit", e => {
  e.preventDefault();
  if (answer === Number(input.value)) {
    string.textContent = "Correct! Try another one";
    numberOne = Math.ceil(Math.random() * 9);
    numberTwo = Math.ceil(Math.random() * 9);
    answer = numberOne * numberTwo;
    word.textContent = `${numberOne} Times ${numberTwo}`;
    input.value = "";
  } else {
    string.textContent = "Wrong! Try Again...";
    input.value = "";
  }
  input.focus();
});
