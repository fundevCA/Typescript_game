var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var answer = numberOne * numberTwo;
var boolean = true;
var word = document.createElement("div");
word.textContent = numberOne + " Times " + numberTwo;
document.body.append(word);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
input.type = "number";
form.append(input);
var button = document.createElement("button");
button.textContent = "Submit";
form.append(button);
var string = document.createElement("span");
document.body.append(string);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (answer === Number(input.value)) {
        string.textContent = "Correct! Try another one";
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        answer = numberOne * numberTwo;
        word.textContent = numberOne + " Times " + numberTwo;
        input.value = "";
    }
    else {
        string.textContent = "Wrong! Try Again...";
        input.value = "";
    }
    input.focus();
});
