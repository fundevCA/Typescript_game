const { body } = document;
let candidate: number[];
let array: number[] = [];
const arr: [number, number] = [1, 2];

function chooseNumber() {
  candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  array = [];
  for (let i: number = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
}

chooseNumber();
console.log(array);

const result = document.createElement("h1");
body.append(result);
const form = document.createElement("form");
document.body.append(form);
const input = document.createElement("input");
form.append(input);
input.type = "text";
input.maxLength = 4;
const button = document.createElement("button");
button.textContent = "Submit!";
form.append(button);

let wrongCount = 0;
form.addEventListener("submit", event => {
  event.preventDefault();
  const answer = input.value;
  if (answer === array.join("")) {
    // Correct
    result.textContent = "HOMERUN!!!";
    input.value = "";
    input.focus();
    chooseNumber();
    wrongCount = 0;
  } else {
    // Wrong
    const answerArray = answer.split("");
    let strike = 0;
    let ball = 0;
    wrongCount += 1;
    if (wrongCount > 10) {
      // Over 10 Tries
      result.textContent = `You missed this time! The answer was ${array.join(
        ","
      )} !`;
      input.value = "";
      input.focus();
      chooseNumber();
      wrongCount = 0;
    } else {
      // Less than 10 tries

      for (let i: number = 0; i <= 3; i += 1) {
        if (Number(answerArray[i]) === array[i]) {
          // Check exact spot
          console.log("correct spot");
          strike += 1;
        } else if (array.indexOf(Number(answerArray[i])) > -1) {
          // Check if numbers are in the wrong place
          console.log("correct number");
          ball += 1;
        }
      }
      console.log("Try again");
      result.textContent = `${strike} Strike ${ball} Ball.`;
      input.value = "";
      input.focus();
    }
  }
});
