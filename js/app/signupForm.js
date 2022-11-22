import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form")

let borrarEmail2 = document.querySelector("#signup-email")
let borrarPassword2 = document.querySelector("#signup-password")

signupForm?.addEventListener("submit", async function (e) {
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value


    /* console.log(email, password); */

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        //console.log(userCredentials)

        document.querySelector("#signupModal")
        modal.classList.toggle("modal-close");
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";

        showMessage("Welcome " + userCredentials.user.email, 'success')
        borrarEmail2.value = ''
        borrarPassword2.value = ''
    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use' || 'auth/network-request-failed') {
            showMessage("Email already is use", "error")
        }
        else if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("Password is too weak", "error")
        } else if (error.code) {
            showMessage(error.message, "error")
        }
    }
})




