// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, set, ref, child, update, remove } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
/* import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
 */// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgTZanS92EtgLJLfXoxi1iYEyyCuEuNlk",
  authDomain: "db-users-af370.firebaseapp.com",
  projectId: "db-users-af370",
  databaseURL: "https://db-users-af370-default-rtdb.firebaseio.com/",
  storageBucket: "db-users-af370.appspot.com",
  messagingSenderId: "669784987564",
  appId: "1:669784987564:web:89abc659bad2becf244c09",
  measurementId: "G-Y4S13M467F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const database = getDatabase(app);
/* const analytics = getAnalytics(app); */


