import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { app, auth, db } from "./app/firebase.js";
import { loginCheck } from './app/loginCheck.js';
import { setupPosts } from "./app/postList.js";


import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js'
import './app/logout.js';

let h5 = document.querySelector("#h5")

let showProfile = document.querySelector("#showProfile")



onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user)
        let hr = document.querySelector(".hr").style.display = 'block'
        /* const querySnapshot = await getDocs(collection(db, 'post'))
        setupPosts(querySnapshot.docs) */
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        if (user.displayName === null) {
            showProfile.innerHTML += `${user.email}
            <br>
            <div class="profile-container">
                <i class="fa-solid fa-user icon__account"></i>
                <p class="p-profile">Go to profile</p>
            </div>
            `
        } else {
            showProfile.innerHTML += `${user.displayName}
            <br>
            <div class="profile-container">
                <i class="fa-solid fa-user icon__account"></i>
                <p class="p-profile">Go to profile</p>
            </div>
            `
        }

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;

        h5.innerHTML += `
            
        `
    } else {
        loginCheck(user)
        if (window.location == 'http://127.0.0.1:5505/profile.html' 
        || window.location == 'http://127.0.0.1:5505/profile.html#' 
        || window.location == 'http://127.0.0.1:5505/profile.html?') {
            location.href = 'http://127.0.0.1:5505/error.html'
        }
        if (window.location == 'https://paginapoemas.000webhostapp.com/profile.html'
        || window.location == 'https://paginapoemas.000webhostapp.com/profile.html#'
        || window.location == 'https://paginapoemas.000webhostapp.com/profile.html?') {
            location.href = 'https://paginapoemas.000webhostapp.com/error.html'
        }
        if (window.location == 'http://localhost:5505/profile.html'
        || window.location == 'http://localhost:5505/profile.html#'
        || window.location == 'http://localhost:5505/profile.html?' ) {
            location.href = 'http://localhost:5505/error.html'
        }
    }
})