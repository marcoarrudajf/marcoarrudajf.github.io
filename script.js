//javascript para navegação bar efeito scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript sidebar responsivo navegação.

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});
//Javascript para o botão scroll voltar para o topo.

const scrollBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//Javascript para voltar ao topo da pagina.
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Javascript para reveal website elements on scroll

// window.addEventListener("scroll", reveal);

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");

//     for (var i = 0; i < reveals.length; i++); {

//         var windowHeight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientReact().top;
//         var revealPoint = 50;

//         if (revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add("active");
//         }
//     }
// }