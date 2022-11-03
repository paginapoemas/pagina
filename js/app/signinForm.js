import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');
let modificar = document.querySelector('#profile')

signInForm?.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;



    try {

        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        document.querySelector("#signupModal2")
        modal2.classList.toggle("modal-close2");
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";


        showMessage("Welcome " + credentials.user.email, 'success')
    } catch (error) {
        console.log(error)
        if (error.code === "auth/wrong-password") {
            showMessage("Wrong password", "error")
        } else if (error.code === "auth/user-not-found") {
            showMessage("User not found or invalid email", "error")
        } else if (error.code == "auth/too-many-requests") {
            showMessage("too many tries, please try again later", "error")
        } else {
            showMessage(error.message, 'error')
        }
    }

})