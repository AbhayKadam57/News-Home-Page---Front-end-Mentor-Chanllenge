const sidebar = document.querySelector(".sidebar")

const close = document.querySelector(".close")

const menu = document.querySelector(".hamburger")

const overlay = document.querySelector(".overlay") 

menu.addEventListener("click",()=>{


    sidebar.style.right="0%"
    sidebar.style.display="flex"
    overlay.style.opacity="1"
    overlay.style.display="flex"

})

close.addEventListener("click",()=>{

    sidebar.style.right="-100%"
    sidebar.style.display="none"
    overlay.style.opacity="0"

})