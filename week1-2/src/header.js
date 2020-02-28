let header = document.getElementById("mainNav");
let topPosition = header.offsetTop;

scrollHeader = () => {
    if (window.pageYOffset > topPosition) {
        header.classList.add("topHeader");
    } 
    else {
        header.classList.remove("topHeader");
    }
    
    console.log("El script funciona!");
}

window.addEventListener("scroll", scrollHeader);