let header = document.getElementById("mainNav");
let topPosition = header.offsetTop;

scrollHeader = () => {
    if (window.pageYOffset > topPosition) {
        header.classList.add("topHeader");
    } 
    else {
        header.classList.remove("topHeader");
    }
}

window.addEventListener("scroll", scrollHeader);