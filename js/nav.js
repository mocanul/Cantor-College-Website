const mobileMenu = document.querySelector(".mobileDropMenu");
const hamburger = document.querySelector(".hamburger");

const dropBtn = document.querySelector(".dropBtn");
const dropContent = document.querySelector(".dropContent");
const dropBtn2 = document.querySelector(".dropBtn2");
const dropContent2 = document.querySelector(".dropContent2");

hamburger.addEventListener("click", () =>{
    mobileMenu.classList.toggle("active");
})

dropBtn.addEventListener("click", () =>{
    dropContent.classList.toggle("active");
})

dropBtn2.addEventListener("click", () =>{
    dropContent2.classList.toggle("active");
})
