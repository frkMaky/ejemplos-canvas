const contenedorLienzo = document.querySelector('#contenedorLienzo');
const ampliarLienzo = document.querySelector('#lienzo');
const btnAmpliar = document.querySelector('#btnAmpliar');

function ampliar() {
    contenedorLienzo.style.width = "100%";
    contenedorLienzo.style.height= "100vh";
    contenedorLienzo.style.margin= "0";

    ampliarLienzo.style.width = "100%";
    ampliarLienzo.style.height= "100vh";
    ampliarLienzo.style.backgroundSize = "cover";
    ampliarLienzo.style.backgroundRepeat = "no-repeat";

    btnAmpliar.innerHTML = "Reducir";
    btnAmpliar.style.position = "fixed";
    btnAmpliar.style.top = "10px";
    btnAmpliar.style.left = "10px";
    btnAmpliar.style.zIndex = "1";

    btnAmpliar.setAttribute("onClick","reducir()");
}
function reducir() {
    contenedorLienzo.style.width = "1000px";
    contenedorLienzo.style.height= "500px";
    contenedorLienzo.style.margin= "5vh auto";

    ampliarLienzo.style.width = "1000px";
    ampliarLienzo.style.height= "500px";

    btnAmpliar.innerHTML = "Ampliar";
    btnAmpliar.style.position = "relative";
    btnAmpliar.style.top = "0";
    btnAmpliar.style.left = "0";
    btnAmpliar.style.zIndex = "0";

    btnAmpliar.setAttribute("onClick","ampliar()");
}