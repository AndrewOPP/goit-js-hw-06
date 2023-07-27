const form = document.querySelector(".login-form")
const result = {}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    if (email.value == "" || password.value == "") {
       return alert("Всі поля повинні бути заповнені.")
    }
    result[email.name] = email.value
    result[password.name] = password.value
    form.reset()
    console.log(result)
})

