import axios from "../api/axios.js";


const $form = document.querySelector("#post-form")
const $title = document.querySelector("#post-title")
const $tag = document.querySelector("#post-tag")
const $desc = document.querySelector("#post-description")
const $img = document.querySelector("#post-img")

const $logOut = document.querySelector("#log-out")

const addingPost = async (e) => {
    e.preventDefault()

    const post = {
        title : $title.value,
        tags : $tag.value.split(","),
        image : $img.value,
        description : $desc.value
    }

    try {
        const response = await axios.post("/blogs", post)
        const data = response.data
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }

    $form.reset()
}

$form.addEventListener("submit", addingPost)

$logOut.addEventListener("click", () => {
    localStorage.removeItem("token")
})
