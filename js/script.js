const mobile = document.getElementById("menu-mobile");
const btnmenu = document.getElementById("btn-menu");

mobile.addEventListener("click", animarMenu);



function animarMenu() {
    const btn = document.getElementById("btn-menu");
    btn.classList.toggle("ativar");  
    mobile.classList.toggle("abrir-menu")
}
