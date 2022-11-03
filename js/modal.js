let cambiarLogIn = document.querySelector("#run_login")
let cambiarSignUp = document.querySelector("#run_signup")

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];


cambiarLogIn?.addEventListener("click", function (e) {
    e.preventDefault()
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 500);
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");
});

cambiarSignUp?.addEventListener("click", function (e) {
    e.preventDefault()
    modal2.classList.toggle("modal-close2");
    setTimeout(function () {
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    }, 500);
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});


abrir.addEventListener("click", function (e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function (e) {
    modal.classList.toggle("modal-close");
    setTimeout(function () {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 500);
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 500);
    }
})


abrir2.addEventListener("click", function (e) {
    e.preventDefault();
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");
});

cerrar2.addEventListener("click", function (e) {
    modal2.classList.toggle("modal-close2");
    setTimeout(function () {
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    }, 500);
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalC2) {
        modal2.classList.toggle("modal-close2");
        setTimeout(function () {
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        }, 500);
    }
})