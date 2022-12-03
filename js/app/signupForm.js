import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDocs, collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { getDatabase, set, ref, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
/* import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js' */
import { app, auth, db, database } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form")

let borrarEmail2 = document.querySelector("#signup-email")
let borrarPassword2 = document.querySelector("#signup-password")




signupForm?.addEventListener("submit", async function (e) {
    e.preventDefault()

    const name = signupForm['signup-name'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    const password2 = signupForm['signup-password2'].value

    /* console.log(email, password); */

    try {
        if (password === password2) {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredentials.user

            /* Obtener fecha */
            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();

            var hora = today.getHours() + " hrs";
            var minutos = today.getMinutes() + " min";
            var segundos = today.getSeconds() + " sec";

            /* Dotos usuario */
            function setDataUser() {
                set(ref(database, "users/" + user.uid), {
                    name: name,
                    email: email,
                    password: password,
                    age: '',
                    phoneNumber: '',
                    imgURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
                    favoriteAuthors: '',
                    country: '',
                    city: '',
                    sex: '',
                    creationDate: `${month}/${day}/${year}`,
                    creationTimeDate: `${hora} ${minutos} ${segundos} - ${month}/${day}/${year}`,
                })
            }
            setDataUser()



            /* .then(() => {
                //Usuario creado correctamente
            }).catch((error) => {
                console.log(error);
            }) */

            /* console.log(userCredentials) */

            /* Ocultar modal "SignUp" */
            document.querySelector("#signupModal")
            modalSignUp.classList.toggle("modal-close");
            modalCSignUp.style.opacity = "0";
            modalCSignUp.style.visibility = "hidden";

            showMessage("Welcome " + userCredentials.user.email, 'success')
            borrarEmail2.value = ''
            borrarPassword2.value = ''

            window.location.reload()
        } else {
            showMessage("The password does not match", 'error')
        }
    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'/* || 'auth/network-request-failed' */) {
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




