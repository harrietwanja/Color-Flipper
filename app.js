const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(".btn-hero");
const color = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
