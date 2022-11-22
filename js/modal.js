let borrarEmail = document.querySelector("#login-email")
let borrarPassword = document.querySelector("#login-password")
let borrarEmail2 = document.querySelector("#signup-email")
let borrarPassword2 = document.querySelector("#signup-password")
let borrarEmail3 = document.querySelector("#reset-email")

let cambiarLogIn = document.querySelector("#run_login")
let cambiarSignUp = document.querySelector("#run_signup")
let cambiarResetPassword = document.querySelector("#run_reset_password")

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

let cerrar2 = document.querySelectorAll(".close2")[0];
let abrir2 = document.querySelectorAll(".cta2")[0];
let modal2 = document.querySelectorAll(".modal2")[0];
let modalC2 = document.querySelectorAll(".modal-container2")[0];

let cerrar3 = document.querySelectorAll(".close3")[0];
let abrir3 = document.querySelectorAll(".cta3")[0];
let modal3 = document.querySelectorAll(".modal3")[0];
let modalC3 = document.querySelectorAll(".modal-container3")[0];


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
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
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
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
});

cambiarResetPassword?.addEventListener("click", function (e) {
    e.preventDefault()
    modal3.classList.toggle("modal-close3");
    setTimeout(function () {
        modalC3.style.opacity = "0";
        modalC3.style.visibility = "hidden";
    }, 500);
    modalC2.style.opacity = "1";
    modalC2.style.visibility = "visible";
    modal2.classList.toggle("modal-close2");
    borrarEmail3.value = ''
})

let cerrarPassword = document.querySelector("#resetPassword")?.addEventListener("click", function (e) { 
    e.preventDefault() 
    modal3.classList.toggle("modal-close3");
    setTimeout(function () {
        modalC3.style.opacity = "0";
        modalC3.style.visibility = "hidden";
    }, 500);

})

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
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");
        setTimeout(function () {
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        }, 500);
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail3.value = ''
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
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail3.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalC2) {
        modal2.classList.toggle("modal-close2");
        setTimeout(function () {
            modalC2.style.opacity = "0";
            modalC2.style.visibility = "hidden";
        }, 500);
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail3.value = ''
    }
})

abrir3.addEventListener("click", function (e) {
    e.preventDefault();
    e.preventDefault()
    modal2.classList.toggle("modal-close2");
    setTimeout(function () {
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";
    }, 500);
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    modalC3.style.opacity = "1";
    modalC3.style.visibility = "visible";
    modal3.classList.toggle("modal-close3");
});

cerrar3.addEventListener("click", function (e) {
    modal3.classList.toggle("modal-close3");
    setTimeout(function () {
        modalC3.style.opacity = "0";
        modalC3.style.visibility = "hidden";
    }, 500);
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalC3) {
        modal3.classList.toggle("modal-close3");
        setTimeout(function () {
            modalC3.style.opacity = "0";
            modalC3.style.visibility = "hidden";
        }, 500);
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail3.value = ''
    }
})