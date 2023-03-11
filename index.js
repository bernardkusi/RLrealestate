let bars=document.getElementsByClassName("bars")[0];
let nav=document.querySelector(".nav2");

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})