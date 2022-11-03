import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { app, auth, db } from "./app/firebase.js";
import { loginCheck } from './app/loginCheck.js';
import { setupPosts } from "./app/postList.js";


import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js'
import './app/logout.js';



onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user)
        /* const querySnapshot = await getDocs(collection(db, 'post'))
        setupPosts(querySnapshot.docs) */
    } else {
        loginCheck(user)
    
    }
})