const mobileMenu = document.querySelector(".mobile-menu");
const navigation = document.querySelector(".navigation");

mobileMenu.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

document.querySelector(".header_btn")
    .addEventListener("click", () => window.location.replace("./sign-up-page.html")
    );
