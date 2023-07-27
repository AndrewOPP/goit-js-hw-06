
const incrButton = document.querySelector('[data-action="increment"]')
const decrButton = document.querySelector('[data-action="decrement"]')
const number = document.querySelector("#value")
let counterValue = 0
incrButton.addEventListener("click", () => {
    counterValue += 1
    number.innerHTML = counterValue
})
decrButton.addEventListener("click", () => {
    counterValue -= 1
    number.innerHTML = counterValue
})
