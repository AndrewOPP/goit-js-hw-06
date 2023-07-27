function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body")
const changeButton = document.querySelector(".change-color")
const colorName =  document.querySelector(".color")

changeButton.addEventListener("click", () => {
  body.style.backgroundColor = `${getRandomHexColor()}`
  colorName.textContent = body.style.backgroundColor
})
