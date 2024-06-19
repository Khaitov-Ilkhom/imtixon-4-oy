import axios from "../api/axios.js";

const $carousel = document.querySelector(".swiper-wrapper")

const renderData = async () => {

    try {
        const response = await axios("/blogs")
        const data = response.data.data
        console.log(data)
        const $frag = document.createDocumentFragment()
        data.forEach(item => {
            const $div = document.createElement("div")
            $div.className = "swiper-slide"
            $div.innerHTML = `
                <div class="swiper-slide-img">
                    <a href="./src/pages/blog.html?blog-id=${item._id}">
                        <img id="swiper-slide-img" src="${item.image}" alt="${item.title}">
                    </a>
                </div>
                <div class="swiper-slide-body">
                    <strong class="swiper-slide-body-title" >
                    ${item.title.slice(0, 20)}  
                    </strong>
                    <p class="swiper-slide-body-description" >
                        ${item.description.slice(0, 60)}...
                    </p>
                </div>
                <div class="swiper-slide-footer">
                    <img src="../images/user.jpg" alt="img">
                    <div class="swiper-slide-footer-info">
                        <p class="blog-author">
                            
                        </p>
                        <span class="author">
                            Author
                        </span>
                    </div>
                </div>
            `
            $frag.appendChild($div)
        })
        $carousel.appendChild($frag)
    }
    catch (error) {
        console.log(error)
    }
}
renderData()

const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

