import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

let borrarEmail = document.querySelector("#login-email")
let borrarPassword = document.querySelector("#login-password")

signInForm?.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;



    try {

        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        document.querySelector("#signupModal2")
        modalLogIn.classList.toggle("modal-close2");
        modalCLogIn.style.opacity = "0";
        modalCLogIn.style.visibility = "hidden";


        showMessage("Welcome " + credentials.user.email, 'success')
        borrarEmail.value = ''
        borrarPassword.value = ''
        window.location.reload()
    } catch (error) {
        console.log(error)
        if (error.code === "auth/wrong-password") {
            showMessage("Wrong password", "error")
        } else if (error.code === "auth/user-not-found") {
            showMessage("User not found or invalid email", "error")
        } else if (error.code == "auth/too-many-requests") {
            showMessage("too many tries, please try again later", "error")
        } else if (error.code == "auth/user-disabled") {
            showMessage("account disabled", "error")
        } else {
            showMessage(error.message, 'error')
        }
    }

})