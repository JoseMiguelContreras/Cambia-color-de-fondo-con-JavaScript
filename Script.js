
const colorButton = document.getElementById("color-buttom");

const paragraphButton = document.getElementById("paragraph-buttom");


//funcion para el fondo
colorButton.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

//funcion para los parrafos
paragraphButton.addEventListener("click", function () {
    const randomColor = getRandomColor();
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = randomColor;
    }
});


function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}