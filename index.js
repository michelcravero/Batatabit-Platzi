
let arrow_left = document.getElementById("left_arrow");
let arrow_right = document.getElementById("right_arrow");

let muller = document.getElementById('cards_container-kei');

let size = 0;

arrow_left.addEventListener("click", function() {
muller.style.left = size;
if (size == 0) {
    recomendado = arrow_left.style.transform = "rotate(360deg)";
}
}, true);


arrow_right.addEventListener("click", function() {
    muller.style.right = size;
    if (size == 0) {
        arrow_right.style.transform = "rotate(180deg)";
    }
    }, true);

/* 
arrow_left.addEventListener("click", function() {
    muller.style.right = centro;
    if (centro == -203) {
        console.log('hola')
        arrow_left.style.transform = "rotate(360deg)";
    }
    }, true); */

