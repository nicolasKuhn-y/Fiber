const mobileMenu = document.querySelector(".mobile-menu");
const navigation = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
    navigation.classList.toggle("active");
})