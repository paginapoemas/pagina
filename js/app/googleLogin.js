import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin")

googleButton?.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        /* console.log(credentials) */

        document.querySelector("#signupModal2")
        modalLogIn.classList.toggle("modal-close2");
        modalCLogIn.style.opacity = "0";
        modalCLogIn.style.visibility = "hidden";

        showMessage("Welcome " + credentials.user.displayName, 'success')

    } catch (error) {
        console.log(error)
    }

})