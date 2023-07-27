function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes")
const buttonCreate = document.querySelector("[data-create]")
const input = document.querySelector("input")
const buttonReset = document.querySelector("[data-destroy]")

let step = 10
let size = 30
  
console.log(buttonCreate)
const createBoxes = () => {
  let result = ""
  for (let index = 1; index <= input.value; index += 1) {
    const square = `<div style = "width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    result += square
    size += step
  }
  boxes.insertAdjacentHTML("beforeend", result)
}

buttonCreate.addEventListener("click", createBoxes)
buttonReset.addEventListener("click", () => {
  size = 30
  boxes.innerHTML = ""
})

