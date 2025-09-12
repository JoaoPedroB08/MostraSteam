const btnSubir = document.getElementById("btn-subir");
const btnDescer = document.getElementById("btn-descer");
const navbar = document.getElementById("navbar");
const rodape = document.getElementById("rodape");

// Ao clicar em subir
btnSubir.addEventListener("click", () => {
    navbar.scrollIntoView({ behavior: "smooth" });
});

// Ao clicar em descer
btnDescer.addEventListener("click", () => {
    rodape.scrollIntoView({ behavior: "smooth" });
});