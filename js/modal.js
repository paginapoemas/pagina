let borrarEmail = document.querySelector("#login-email")
let borrarPassword = document.querySelector("#login-password")
let borrarEmail2 = document.querySelector("#signup-email")
let borrarPassword2 = document.querySelector("#signup-password")
let borrarEmail3 = document.querySelector("#reset-email")

let cambiarLogIn = document.querySelector("#run_login")
let cambiarSignUp = document.querySelector("#run_signup")
let cambiarResetPassword = document.querySelector("#run_reset_password")

/* SignUp */
let cerrarSignUp = document.querySelectorAll(".close-SignUp")[0];
let abrirSignUp = document.querySelectorAll(".cta")[0];
let modalSignUp = document.querySelectorAll(".modal-SignUp")[0];
let modalCSignUp = document.querySelectorAll(".modal-container-SignUp")[0];
/* ----------------------------------------------------- */

/* LogIn */
let cerrarLogIn = document.querySelectorAll(".close-LogIn")[0];
let abrirLogIn = document.querySelectorAll(".cta2")[0];
let modalLogIn = document.querySelectorAll(".modal-LogIn")[0];
let modalCLogIn = document.querySelectorAll(".modal-container-LogIn")[0];
/* ----------------------------------------------------- */

/* ResetPassword */
let cerrarResetPassword = document.querySelectorAll(".close-ResetPassword")[0];
let abrirResetPassword = document.querySelectorAll(".cta3")[0];
let modalResetPassword = document.querySelectorAll(".modal-ResetPassword")[0];
let modalCResetPassword = document.querySelectorAll(".modal-container-ResetPassword")[0];
/* ----------------------------------------------------- */

/* ResetPasswordConfirm */
let cerrarResetPasswordConfirm = document.querySelectorAll(".close-ResetPasswordConfirm")[0];
let abrirResetPasswordConfirm = document.querySelectorAll(".cta4")[0];
let modalResetPasswordConfirm = document.querySelectorAll(".modal-ResetPasswordConfirm")[0];
let modalCResetPasswordConfirm = document.querySelectorAll(".modal-container-ResetPasswordConfirm")[0];
/* ----------------------------------------------------- */

/* ChangeName */
let cerrarChangeName = document.querySelectorAll(".close-ChangeName")[0];
let abrirChangeName = document.querySelectorAll(".cta5")[0];
let modalChangeName = document.querySelectorAll(".modal-ChangeName")[0];
let modalCChangeName = document.querySelectorAll(".modal-container-ChangeName")[0];
/* ----------------------------------------------------- */

/* ChangeImg */
let cerrarChangeImg = document.querySelectorAll(".close-ChangeImg")[0];
let abrirChangeImg = document.querySelectorAll(".cta6")[0];
let modalChangeImg = document.querySelectorAll(".modal-ChangeImg")[0];
let modalCChangeImg = document.querySelectorAll(".modal-container-ChangeImg")[0];
/* ----------------------------------------------------- */

/* NewPoem */
let cerrarNewPoem = document.querySelectorAll(".close-NewPoem")[0];
let abrirNewPoem = document.querySelectorAll(".cta7")[0];
let modalNewPoem = document.querySelectorAll(".modal-NewPoem")[0];
let modalCNewPoem = document.querySelectorAll(".modal-container-NewPoem")[0];


/* Cambiar LogIn */
cambiarLogIn?.addEventListener("click", function (e) {
    e.preventDefault()
    modalSignUp.classList.toggle("modal-close-SignUp");
    setTimeout(function () {
        modalCSignUp.style.opacity = "0";
        modalCSignUp.style.visibility = "hidden";
    }, 500);
    modalCLogIn.style.opacity = "1";
    modalCLogIn.style.visibility = "visible";
    modalLogIn.classList.toggle("modal-close-LogIn");
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
});
/* ----------------------------------------------------- */

/* Cambiar SignUp */
cambiarSignUp?.addEventListener("click", function (e) {
    e.preventDefault()
    modalLogIn.classList.toggle("modal-close-LogIn");
    setTimeout(function () {
        modalCLogIn.style.opacity = "0";
        modalCLogIn.style.visibility = "hidden";
    }, 500);
    modalCSignUp.style.opacity = "1";
    modalCSignUp.style.visibility = "visible";
    modalSignUp.classList.toggle("modal-close-SignUp");
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
});
/* ----------------------------------------------------- */

/* Cambiar ResetPassword */
cambiarResetPassword?.addEventListener("click", function (e) {
    e.preventDefault()
    modalResetPassword.classList.toggle("modal-close-ResetPassword");
    setTimeout(function () {
        modalCResetPassword.style.opacity = "0";
        modalCResetPassword.style.visibility = "hidden";
    }, 500);
    modalCLogIn.style.opacity = "1";
    modalCLogIn.style.visibility = "visible";
    modalLogIn.classList.toggle("modal-close-LogIn");
    borrarEmail3.value = ''
})
/* ----------------------------------------------------- */

/* ResetPassword */
let cerrarPassword = document.querySelector("#resetPassword")?.addEventListener("click", function (e) { 
    e.preventDefault() 
    modalResetPassword.classList.toggle("modal-close-ResetPassword");
    setTimeout(function () {
        modalCResetPassword.style.opacity = "0";
        modalCResetPassword.style.visibility = "hidden";
    }, 500);

})

abrirResetPassword.addEventListener("click", function (e) {
    e.preventDefault();
    modalLogIn.classList.toggle("modal-close-LogIn");
    setTimeout(function () {
        modalCLogIn.style.opacity = "0";
        modalCLogIn.style.visibility = "hidden";
    }, 500);
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    modalCResetPassword.style.opacity = "1";
    modalCResetPassword.style.visibility = "visible";
    modalResetPassword.classList.toggle("modal-close-ResetPassword");
});

cerrarResetPassword.addEventListener("click", function (e) {
    modalResetPassword.classList.toggle("modal-close3");
    setTimeout(function () {
        modalCResetPassword.style.opacity = "0";
        modalCResetPassword.style.visibility = "hidden";
    }, 500);
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCResetPassword) {
        modalResetPassword.classList.toggle("modal-close-ResetPassword");
        setTimeout(function () {
            modalCResetPassword.style.opacity = "0";
            modalCResetPassword.style.visibility = "hidden";
        }, 500);
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail3.value = ''
    }
})
/* ----------------------------------------------------------------------- */

/* Modal SignUp */
abrirSignUp.addEventListener("click", function (e) {
    e.preventDefault();
    modalCSignUp.style.opacity = "1";
    modalCSignUp.style.visibility = "visible";
    modalSignUp.classList.toggle("modal-close-SignUp");
});

cerrarSignUp.addEventListener("click", function (e) {
    modalSignUp.classList.toggle("modal-close-SignUp");
    setTimeout(function () {
        modalCSignUp.style.opacity = "0";
        modalCSignUp.style.visibility = "hidden";
    }, 500);
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail3.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCSignUp) {
        modalSignUp.classList.toggle("modal-close-SignUp");
        setTimeout(function () {
            modalCSignUp.style.opacity = "0";
            modalCSignUp.style.visibility = "hidden";
        }, 500);
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail3.value = ''
    }
})
/* ----------------------------------------------------------------------- */

/* Modal LogIn */
abrirLogIn.addEventListener("click", function (e) {
    e.preventDefault();
    modalCLogIn.style.opacity = "1";
    modalCLogIn.style.visibility = "visible";
    modalLogIn.classList.toggle("modal-close-LogIn");
});

cerrarLogIn.addEventListener("click", function (e) {
    modalLogIn.classList.toggle("modal-close-LogIn");
    setTimeout(function () {
        modalCLogIn.style.opacity = "0";
        modalCLogIn.style.visibility = "hidden";
    }, 500);
    borrarEmail.value = ''
    borrarPassword.value = ''
    borrarEmail2.value = ''
    borrarPassword2.value = ''
    borrarEmail3.value = ''
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCLogIn) {
        modalLogIn.classList.toggle("modal-close-LogIn");
        setTimeout(function () {
            modalCLogIn.style.opacity = "0";
            modalCLogIn.style.visibility = "hidden";
        }, 500);
        borrarEmail.value = ''
        borrarPassword.value = ''
        borrarEmail2.value = ''
        borrarPassword2.value = ''
        borrarEmail3.value = ''
    }
})
/* ----------------------------------------------------------------------- */

/* Modal ResetPasswordConfirm */
cerrarResetPasswordConfirm?.addEventListener("click", function (e) {
    modalResetPasswordConfirm.classList.toggle("modal-close4");
    setTimeout(function () {
        modalCResetPasswordConfirm.style.opacity = "0";
        modalCResetPasswordConfirm.style.visibility = "hidden";
    }, 500);
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCResetPasswordConfirm) {
        modalResetPassword.classList.toggle("modal-close4");
        setTimeout(function () {
            modalCResetPassword.style.opacity = "0";
            modalCResetPassword.style.visibility = "hidden";
        }, 500);
    }
})
/* ----------------------------------------------------- */

/* Modal ChangeName */
abrirChangeName?.addEventListener("click", function (e) {
    e.preventDefault();
    modalCChangeName.style.opacity = "1";
    modalCChangeName.style.visibility = "visible";
    modalChangeName.classList.toggle("modal-close-ChangeName");
});

cerrarChangeName?.addEventListener("click", function (e) {
    modalChangeName.classList.toggle("modal-close-ChangeName");
    setTimeout(function () {
        modalCChangeName.style.opacity = "0";
        modalCChangeName.style.visibility = "hidden";
    }, 500);
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCChangeName) {
        modalChangeName.classList.toggle("modal-close-ChangeName");
        setTimeout(function () {
            modalCChangeName.style.opacity = "0";
            modalCChangeName.style.visibility = "hidden";
        }, 500);
    }
})
/* ----------------------------------------------------- */

/*  */
abrirChangeImg?.addEventListener("click", function (e) {
    e.preventDefault();
    modalCChangeImg.style.opacity = "1";
    modalCChangeImg.style.visibility = "visible";
    modalChangeImg.classList.toggle("modal-close-ChangeImg");
});

cerrarChangeImg?.addEventListener("click", function (e) {
    modalChangeImg.classList.toggle("modal-close-ChangeImg");
    setTimeout(function () {
        modalCChangeImg.style.opacity = "0";
        modalCChangeImg.style.visibility = "hidden";
    }, 500);
});

window.addEventListener("click", function (e) {
    /* this.console.log(e.target) */
    if (e.target == modalCChangeImg) {
        modalChangeImg.classList.toggle("modal-close-ChangeImg");
        setTimeout(function () {
            modalCChangeImg.style.opacity = "0";
            modalCChangeImg.style.visibility = "hidden";
        }, 500);
    }
})



abrirNewPoem?.addEventListener("click", function (e) {
    e.preventDefault();
    modalCNewPoem.style.opacity = "1";
    modalCNewPoem.style.visibility = "visible";
    modalNewPoem.classList.toggle("modal-close-NewPoem");
});

cerrarNewPoem?.addEventListener("click", function (e) {
    modalNewPoem.classList.toggle("modal-close-NewPoem");
    setTimeout(function () {
        modalCNewPoem.style.opacity = "0";
        modalCNewPoem.style.visibility = "hidden";
        window.location.reload()
    }, 500);
    
});

/* window.addEventListener("click", function (e) {
    if (e.target == modalCNewPoem) {
        modalNewPoem.classList.toggle("modal-close-NewPoem");
        setTimeout(function () {
            modalCNewPoem.style.opacity = "0";
            modalCNewPoem.style.visibility = "hidden";
        }, 500);
    }
}) */