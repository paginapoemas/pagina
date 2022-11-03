const loggedOutlinks = document.querySelectorAll('#logged-out')
const loggedInlinks = document.querySelectorAll('#logout')
const profile = document.querySelector("#profile")
const settings = document.querySelector("#settings")
const help = document.querySelector("#help")



export const loginCheck = user => {
    if (user) {
        loggedInlinks.forEach(link => link.style.display = 'block')
        loggedOutlinks.forEach(link => link.style.display = 'none')
        profile.style.display = 'block'
        settings.style.display = 'block'
        help.style.display = 'block'
    } else {
        loggedInlinks.forEach(link => link.style.display = 'none')
        loggedOutlinks.forEach(link => link.style.display = 'block')
        profile.style.display = 'none'
        settings.style.display = 'none'
        help.style.display = 'none'
    }
}