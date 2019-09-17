
function togglePop(){
    let element = document.querySelector("section");
    element.classList.toggle("show");
}

let element = document.querySelector("footer");
element.addEventListener("click", togglePop);