const input = document.querySelector("#name-input")
const userName = document.querySelector("#name-output")

input.addEventListener("input", (event) => {
    userName.innerHTML = event.currentTarget.value
    if (event.currentTarget.value === "") {
        userName.innerHTML = "Anonymous"
    }
})