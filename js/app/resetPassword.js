import { updateProfile, getAuth, sendPasswordResetEmail, deleteUser } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";

const resetPassword = document.getElementById('resetPassword');
const mailField = document.getElementById('reset-email')

const borrarUser = document.querySelector("#borrar")

let modal3 = document.querySelectorAll(".modal3")[0];
let modalC3 = document.querySelectorAll(".modal-container3")[0];

let modal4 = document.querySelectorAll(".modal4")[0];
let modalC4 = document.querySelectorAll(".modal-container4")[0];

resetPassword?.addEventListener("click", function () {
    try {
        const auth = getAuth();
        const email = mailField.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                modal3.classList.toggle("modal-close2");
                setTimeout(function () {
                    modalC3.style.opacity = "0";
                    modalC3.style.visibility = "hidden";
                }, 500);
                modalC4.style.opacity = "1";
                modalC4.style.visibility = "visible";
                modal4.classList.toggle("modal-close4");
                showMessage("Send email", 'success')
                mailField.value = ''
                //alert('If the email is not in the inbox, look at spam')
            })
    } catch (error) {
        console.log(error)
    }

})
/* let a = document.querySelector("#a")
a?.addEventListener("click", function (e) {
    e.preventDefault();
    let s = document.querySelector("#s").value
    let d = document.querySelector("#d").value
    updateProfile(auth.currentUser, {
        displayName: s, photoURL: d
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}) */


