const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let scoreEl = document.getElementById("score");
let questionEl = document.getElementById("question");
let inputEl = document.getElementById("input");
let submitEl = document.getElementById("btn");
let formEl = document.getElementById("form");

correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `score: ${score}`;
if (!score) {
  score = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalstorage();
  } else {
    score--;
    updateLocalstorage();
  }
});

function updateLocalstorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
