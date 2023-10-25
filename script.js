// Light and dark mode
let html = document.getElementById('html');
let change_btn = document.getElementById('change_btn');
let change_img = document.getElementById('change_img');

change_btn.addEventListener("click", ()=>{
    html.classList.toggle("dark");
})