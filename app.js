const btnToggle = document.querySelector(".toggle-btn")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

btnToggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar")
});

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
})