import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector('#logout')

logout?.addEventListener('click', async () => {
    window.location.reload()
    await signOut(auth)
    console.log("Signout")
})

