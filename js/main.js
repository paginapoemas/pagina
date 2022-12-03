import { onAuthStateChanged, getAuth, deleteUser } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { getDatabase, set, ref, get, child, onValue, update, remove, push } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { app, auth, db, database } from "./app/firebase.js";
import { loginCheck } from './app/loginCheck.js';
import { setupPosts } from "./app/postList.js";
import { showMessage } from "./app/showMessage.js";


import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js'
import './app/logout.js';

let h5 = document.querySelector("#h5")

let showProfile = document.querySelector("#showProfile")

const signupForm = document.querySelector("#signup-form")


onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user)

        document.querySelector(".hr").style.display = 'block'

        /* const querySnapshot = await getDocs(collection(db, 'post'))
        setupPosts(querySnapshot.docs) */

        /* Variables Firebase auth */
        const displayName = user.displayName;
        const emailAuth = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const creationTime = user.metadata.creationTime
        const phoneNumber = user.phoneNumber
        const userUid = user.uid

        function selectData() {
            /* Variables para mostrar resultados */
            const data_displayName = document.querySelector("#topImgName")
            const data_img = document.querySelector(".img-container")
            const data_name = document.querySelector("#data_name")
            const data_email = document.querySelector("#data_email")
            const data_password = document.querySelector("#data_password")
            const data_age = document.querySelector("#data_age")
            const data_favoritesAuthors = document.querySelector("#data_favoritesAuthors")
            const data_country = document.querySelector("#data_country")
            const data_city = document.querySelector("#data_city")
            const data_phoneNumber = document.querySelector("#data_phoneNumber")
            const data_creationDate = document.querySelector("#data_creationTime")

            const starCountRef = ref(database, 'users/' + userUid);
            onValue(starCountRef, (snapshot) => {
                /* Variables Realtime Firebase */
                var name = snapshot.val().name;
                var img = snapshot.val().imgURL;
                var email = snapshot.val().email;
                var password = snapshot.val().password;
                var age = snapshot.val().age;
                var favoriteAuthors = snapshot.val().favoriteAuthors;
                var country = snapshot.val().country;
                var city = snapshot.val().city;
                var phoneNumber = snapshot.val().phoneNumber;
                var creationDate = snapshot.val().creationDate;
                /* Manu top Usuario */
                showProfile.innerHTML += `${name}
                <br>
                <div class="profile-container">
                    <i class="fa-solid fa-user icon__account"></i>
                    <p class="p-profile">Go to profile</p>
                    <div class="r" style="background-image: url('${img}'); "></div>
                </div>
                `
                /* ------------------------------------------ */
                /* Menu Name and Image */
                data_displayName.innerHTML += `${name}`
                data_img.innerHTML += `<div class="img-profile" style="background-image: url('${img}');"></div>`
                /* ------------------------------------------ */
                /* Menu "About Me" */
                data_name.innerHTML += `${name}`
                data_email.innerHTML += `${emailAuth}`
                data_password.innerHTML += `${password}`
                data_age.innerHTML += `${age}`
                data_favoritesAuthors.innerHTML += `${favoriteAuthors}`
                data_country.innerHTML += `${country}`
                data_city.innerHTML += `${city}`
                data_phoneNumber.innerHTML += `${phoneNumber}`
                data_creationDate.innerHTML += `${creationDate}`



            })
        }

        selectData()


        /* Actualizar "About Me" */

        /* Cambiar nombre */
        const changeName = document.querySelector("#changeNameButton")
        changeName?.addEventListener("click", function (e) {
            let updateNameInput = document.querySelector("#updateNameInput").value
            if (updateNameInput !== '') {
                update(ref(database, 'users/' + userUid), {
                    name: updateNameInput
                }).then(() => {
                    window.location.reload()
                }).catch((error) => {
                    console.log(error)
                });
            }
        })

        /* Cambiar Img */
        const changeImg = document.querySelector("#changeImgButton")
        changeImg?.addEventListener("click", function (e) {
            let updateImgInput = document.querySelector("#updateImgInput").value
            if (updateImgInput !== '') {
                update(ref(database, 'users/' + userUid), {
                    imgURL: updateImgInput
                }).then(() => {
                    window.location.reload()
                }).catch((error) => {
                    console.log(error)
                });

            }
        })

        /* ------------------------------------------ */

        /* Borrar usuario */
        const borrarUser = document.querySelector("#borrar")
        borrarUser?.addEventListener("click", function (e) {
            deleteUser(user).then(() => {
                window.location.reload()
                remove(ref(database, 'users/' + userUid))
                alert("User deleted")
            }).catch((error) => {
                console.log(error.message)
                console.log(error.code)
                if (error.code === 'auth/requires-recent-login') {
                    showMessage("You must have recently logged in", "error")
                } else {
                    showMessage(error.message, "error")
                }

            });


        })


        const createPoemForm = document.querySelector("#createPoem-form")


        //const titlePoem = document.querySelector("#titlePoem").value
        //const contenPoem = document.querySelector("#contenPoem").value
        //const savePoem = document.querySelector("#savePoem")

        const newPoemKey = push(child(ref(database), "users/" + user.uid + "/poems/")).key;

        createPoemForm?.addEventListener("submit", function (e) {
            const contenPoem = createPoemForm['contenPoem'].value
            const titlePoem = createPoemForm['titlePoem'].value

            var today = new Date();
            var day = today.getDate();
            var month = today.getMonth() + 1;
            var year = today.getFullYear();

            var hora = today.getHours() + " hrs";
            var minutos = today.getMinutes() + " min";
            var segundos = today.getSeconds() + " sec";


            try {
                if (!editStatus) {
                    set(ref(database, "users/" + user.uid + "/poems/" + newPoemKey), {
                        title: titlePoem,
                        conten: contenPoem,
                        creationDate: `${month}/${day}/${year}`,
                        creationTimeDate: `${hora} ${minutos} ${segundos} - ${month}/${day}/${year}`,
                        lastEditionDate: `${month}/${day}/${year}`,
                        lastEditionTimeDate: `${hora} ${minutos} ${segundos} - ${month}/${day}/${year}`,
                        public: false
                    })
                } else {
                    update(ref(database, "users/" + user.uid + "/poems/" + id), {
                        title: titlePoem,
                        conten: contenPoem,
                        lastEditionDate: `${month}/${day}/${year}`,
                        lastEditionTimeDate: `${hora} ${minutos} ${segundos} - ${month}/${day}/${year}`
                    })
                    update(ref(database, "publicPoems/" + id), {
                        title: titlePoem,
                        conten: contenPoem
                    })
                    console.log("editando")
                    editStatus = false;
                    window.location.reload()
                }
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        })

        const viewPoems = document.querySelector(".poemsUser")

        const burars = document.querySelector(".basuras")

        const starCountRef = ref(database, "users/" + user.uid + "/poems/");

        let editStatus = false;
        let id = ''

        onValue(starCountRef, (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                var pos = snapshot.child(key).val();
                var childDataTitle = childSnapshot.val().title;
                var childDataConten = childSnapshot.val().conten;
                var childDataDate = childSnapshot.val().lastEditionDate;
                /* console.log(key) */
                viewPoems.innerHTML += `
                <div class="poems" id="poems">
                    <h1 class="titlePoem">${childDataTitle}</h1>
                    <br>
                    <p class="as">${childDataConten}</p>                    
                    <button id="borrarPoema" class="basura" data-id="${key}">Delete</button>
                    <button id="editarPoema" class="basura2 cta7" data-id="${key}">Edit</button>
                    <p class="basura3">Last edition: ${childDataDate}</p> 
                    <button id="publicarPoema" class="basura4" data-id="${key}">Public</button>
                </div>
                `

                /* <textarea cols="47" rows="6">${childDataConten}</textarea> */

                const btnPublic = viewPoems.querySelectorAll("#publicarPoema")
                btnPublic.forEach(btn => {
                    btn.addEventListener('click', ({ target: { dataset } }) => {
                        const starCountRef2 = ref(database, "users/" + user.uid + "/poems/" + dataset.id);
                        onValue(starCountRef2, (snapshot) => {
                            var childDataTitlePoem = snapshot.val().title;
                            var childDataContenPoem = snapshot.val().conten;

                            var today = new Date();
                            var day = today.getDate();
                            var month = today.getMonth() + 1;
                            var year = today.getFullYear();

                            var hora = today.getHours() + " hrs";
                            var minutos = today.getMinutes() + " min";
                            var segundos = today.getSeconds() + " sec";

                            console.log(childDataTitlePoem)
                            console.log(childDataContenPoem)
                            console.log(dataset.id)
                            set(ref(database, "publicPoems/" + dataset.id), {
                                title: childDataTitlePoem,
                                conten: childDataContenPoem,
                                publicDate: `${month}/${day}/${year}`,
                                publicTimeDate: `${hora} ${minutos} ${segundos} - ${month}/${day}/${year}`
                            }).then(() => {
                                window.location.reload()
                            })
                        })
                        /* alert(dataset.id) */
                    })
                })

                const btnDelete = viewPoems.querySelectorAll("#borrarPoema")
                btnDelete.forEach(btn => {
                    btn.addEventListener('click', ({ target: { dataset } }) => {
                        /* console.log(dataset.id) */
                        remove(ref(database, "users/" + user.uid + "/poems/" + dataset.id))
                        remove(ref(database, "publicPoems/" + dataset.id))
                        window.location.reload()
                    })
                })


                const modalNewPoem = document.querySelectorAll(".modal-NewPoem")[0];
                const modalCNewPoem = document.querySelectorAll(".modal-container-NewPoem")[0];
                const btnEdit = viewPoems.querySelectorAll("#editarPoema")

                btnEdit.forEach(btn => {
                    btn.addEventListener('click', ({ target: { dataset } }) => {
                        console.log(dataset.id)


                        const starCountRef = ref(database, "users/" + user.uid + "/poems/" + dataset.id);
                        onValue(starCountRef, (snapshot) => {
                            var childDataTitlePoem = snapshot.val().title;
                            var childDataContenPoem = snapshot.val().conten;
                            var childDataEditionDatePoem = snapshot.val().lastEditionDate;
                            var childDataEditionTimePoem = snapshot.val().lastEditionTimeDate

                            const titlePoem = createPoemForm['titlePoem'].value = childDataTitlePoem
                            const contenPoem = createPoemForm['contenPoem'].value = childDataContenPoem

                            console.log(childDataEditionDatePoem)
                            console.log(childDataEditionTimePoem)
                        })

                        modalCNewPoem.style.opacity = "1";
                        modalCNewPoem.style.visibility = "visible";
                        modalNewPoem.classList.toggle("modal-close-NewPoem");



                        editStatus = true;
                        id = dataset.id

                        let textTitle = document.querySelector("#text-Title").innerText = 'Edit Poem'

                        createPoemForm['savePoem'].innerText = 'Update'


                    })
                })
                /* const borrarPoema = document.querySelector("#borrarPoema")

                borrarPoema?.addEventListener("click", function () {
                    var key = childSnapshot.key;
                    console.log(pos)
                    remove(ref(database, "users/" + user.uid + "/poems/" + pos))
                    alert("Poem deleted")
                }) */

            })
        })



        //const borrarPoema = document.querySelector("#borrarPoema")

        /* btnDelete?.addEventListener("click", function () {
            console.log(pos)
            remove(ref(database, "users/" + user.uid + "/poems/" + pos))
            alert("Poem deleted")
        }) */

        let sec = document.querySelector(".poemsHome")

        const starCountRef2 = ref(database, "publicPoems/");
        onValue(starCountRef2, (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childTitle = childSnapshot.val().title
                var childConten = childSnapshot.val().conten
                var childDate = childSnapshot.val().publicDate
                sec.innerHTML += `
                <div class="poems" id="poems">
                <h1 class="titlePoem">${childTitle}</h1>
                <br>
                <p class="as">${childConten}</p>
                <p class="datePublic">Publication date: ${childDate}</p>                    
                
            </div>
                `
            })
        })




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
            || window.location == 'http://localhost:5505/profile.html?') {
            location.href = 'http://localhost:5505/error.html'
        }

        let sec = document.querySelector(".poemsHome")

        const starCountRef2 = ref(database, "publicPoems/");
        onValue(starCountRef2, (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childTitle = childSnapshot.val().title
                var childConten = childSnapshot.val().conten
                var childDate = childSnapshot.val().publicDate
                sec.innerHTML += `
                <div class="poems" id="poems">
                <h1 class="titlePoem">${childTitle}</h1>
                <br>
                <p class="as">${childConten}</p>
                <p class="datePublic">Publication date: ${childDate}</p>                    
                
            </div>
                `
            })
        })

    }
})