var modal = document.getElementById("PopUp");

var ver = document.getElementById("ver-resumen");

var btnClose = document.getElementById("close");


ver.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}