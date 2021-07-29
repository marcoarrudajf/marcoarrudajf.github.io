

//pagina 1
//javascript para navegação bar efeito scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript sidebar responsivo navegação.

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation")

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
    });
}
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
if(scrollBtn){
    scrollBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

//pagina 2
var contar = 1;
setInterval(function () {
var pos = document.getElementById('radio' + contar);

if(!pos) return;

pos.checked = true;
contar++;
if (contar > 5) {
         contar = 1;
        }
}, 3000);
