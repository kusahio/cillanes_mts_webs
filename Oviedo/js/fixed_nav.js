window.onscroll = function() { myFunction() };
window.onscroll = function() {
    funcionfixed()
};

var header = document.getElementById("store.menu");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}