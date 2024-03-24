let textField = document.getElementById("text");
let speedInput = document.getElementById("speed");

let text = textField.innerText;
let speed = speedInput.value;

let index = 0;
let length = text.length;
let timer = null;

const typeWriter = () => {
  timer = setInterval(() => {
    textField.innerText = text.slice(0, (index = (index + 1) % length));
  }, 550 - speed * 50);
};

typeWriter();

speedInput.addEventListener("input", () => {
  clearInterval(timer);
  speed = Number(speedInput.value);
  typeWriter();
});
