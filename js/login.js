import axios from "../api/axios.js";
import {saveLocalStorageToken} from "../utils/utils.js";

const $loginForm = document.querySelector("#form")
const $inputEmail = document.querySelector("#input-email")
const $inputPassword = document.querySelector("#input-password")
const $box = document.querySelector(".wrapper")

function User (email, password) {
    this.email = email
    this.password = password
}

const loginUser = async (e) => {
    e.preventDefault()

    const email = $inputEmail.value
    const password = $inputPassword.value
    const user = new User(email, password)

    try {
        const response = await axios.post("/user/login", user)
        const data = response.data
        if (data.data.token) {
            saveLocalStorageToken("token", data.data.token)
            $box.innerHTML = "Please Wait..."
            setTimeout( () => {
                console.log(location.origin)
                location.replace(location.origin + "/imtixon/pages/home.html")
            }, 2000)
        }
    } catch (error) {
        $loginForm.innerHTML = error.message
        console.log("error")
    }
}

$loginForm.addEventListener("submit", loginUser)