import { updateProfile, getAuth, sendPasswordResetEmail, deleteUser } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDatabase, set, ref, get, child, onValue, push, update } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { showMessage } from "./showMessage.js";
import { app, auth, db, database } from "./firebase.js";


let changeName = document.querySelector("#changeNameButton")

/* let changePhone = document.querySelector("#changePhoneButton") */

/* const auth = getAuth(); */
;

changeName?.addEventListener("click", function (e) {
    /* e.preventDefault();
    let updateNameInput = document.querySelector("#updateNameInput").value
    updateProfile(auth.currentUser, {
        displayName: updateNameInput
    }).then(() => {
        window.location.reload()
        // Profile updated!
        // ...
    }).catch((error) => {
        console.log(error)
    }); */

    





    /* function writeNewPost(user, uid) {
        let updateNameInput = document.querySelector("#updateNameInput").value
         */
        /* const userUid = user.uid */
        // A post entry.
        /* const postData = {
            password: updateNameInput */
            /* uid: uid,
            body: body,
            title: title,
            starCount: 0,
            authorPic: picture */
       /*  }; */

        // Get a key for a new Post.
       /*  const newPostKey = push(child(ref(database), 'users/')).key; */

        // Write the new post's data simultaneously in the posts list and the user's post list.
        /* const updates = {}; */
        //updates['/users/' + newPostKey] = postData;
       /*  updates['/users/' + uid + '/' + newPostKey] = postData; */

     /*    return update(ref(database), updates);
    }

    writeNewPost()




 */


})

/* changePhone?.addEventListener("click", function (e) {
    e.preventDefault();
    let updatePhoneInput = document.querySelector("#updatePhoneInput").value
    updateProfile(auth.currentUser, {
        phoneNumber: updatePhoneInput
    }).then(() => {
        window.location.reload()
        // Profile updated!
        // ...
    }).catch((error) => {
        console.log(error)
    });
}) */