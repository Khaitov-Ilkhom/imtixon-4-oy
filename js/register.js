import axios from "../api/axios.js";

const $registerForm = document.querySelector("#form")
const $inputName = document.querySelector("#input-name")
const $inputEmail = document.querySelector("#input-email")
const $inputPassword = document.querySelector("#input-password")

function User (name, email, password) {
    this.name = name
    this.email =email
    this.password = password
}

const createUser = async (e) => {
    e.preventDefault()

    const name = $inputName.value
    const email = $inputEmail.value
    const password = $inputPassword.value
    const user = new User(name, email, password)

    try {
        const response = await axios.post("/user/register", user)
        const data = response.data
        if (data.data._id) {
            $registerForm.innerHTML = "Please Wait..."
            setTimeout( () => {
                location.replace(location.origin + "/imtixon/pages/login.html")
            }, 2000)
        }
    } catch (error) {
        $registerForm.innerHTML = error
        console.log(error)
    }
}

$registerForm.addEventListener("submit", createUser)