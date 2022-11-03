import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin")

googleButton?.addEventListener('click', async () => {

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        document.querySelector("#signupModal2")
        modal2.classList.toggle("modal-close2");
        modalC2.style.opacity = "0";
        modalC2.style.visibility = "hidden";

        showMessage("Welcome " + credentials.user.displayName, 'success')

    } catch (error) {
        console.log(error)
    }

})