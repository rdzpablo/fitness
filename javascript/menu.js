const menu =document.querySelector(".menu-icono");
const ulmenu = document.querySelector(".ul-menu");
console.log(menu);
console.log(ulmenu);
menu.addEventListener("click",function(){
    ulmenu.classList.toggle("mostrar-ul");
    console.log("hola");
})




