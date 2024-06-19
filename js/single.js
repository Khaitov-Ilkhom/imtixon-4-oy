import axios from "../api/axios.js";

const URL = location.search
const id = new URLSearchParams(URL).get('id')

const title = document.querySelector("#post-title")
const img = document.querySelector("#post-img")
const tag = document.querySelector("#post-tag")
const desc = document.querySelector("#post-description")
const renderDataBlogs = async (id) => {
    try {
        const response = await axios(`/blogs/${id}`)
        const data = response.data.data
        console.log(data)

        title.innerText = data.title
        img.src = data.image
        tag.innerText = data.tags[0] ? "#" + data.tags[0] : "#notags"
        desc.innerText = data.description
    }
    catch (error) {
        console.log(error)
    }
}
renderDataBlogs(id)