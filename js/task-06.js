const input = document.querySelector("#validation-input")
const inputLength = document.querySelector("#validation-input")
input.addEventListener("blur", (event) => {
    if (String(event.currentTarget.value.length) === input.attributes[2].textContent) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    } 
    if (String(event.currentTarget.value.length) !== input.attributes[2].textContent) { 
        input.classList.add("invalid")
        input.classList.remove("valid")
    } 
    if (event.currentTarget.value.length === 0) {
        input.classList.remove("valid")
        input.classList.remove("invalid")
    }

})