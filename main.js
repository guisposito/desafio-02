const texto = document.querySelector("#texto");

texto.addEventListener('click', () => {
    texto.innerText = "O inverno já chegou";
    return
})

setTimeout(() => {
    texto.innerText = "O inverno está mudando";
}, 2000);