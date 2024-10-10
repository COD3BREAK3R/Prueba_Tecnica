const acordeones = document.querySelectorAll(".acordeon__header");
const cuerposAcordeones = document.querySelectorAll(".cuerpo");
const flechitas = document.querySelectorAll(".flechita");

acordeones.forEach((element, i) => {
    element.addEventListener("click", () => {
        acordeones[i].classList.toggle("activo");
        cuerposAcordeones[i].classList.toggle("activo");
        flechitas[i].classList.toggle("activo");
    });
});
