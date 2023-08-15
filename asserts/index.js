const burger = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
})

burger.addEventListener("click", () => {
    navigation.classList.toggle("active")
})

const date = new Date();
document.getElementById("js-date").innerHTML = date;
