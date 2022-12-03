document.querySelector('#show').addEventListener('click', e => {
    const passwordInput = document.querySelector('#signup-password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Hide';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Show';
        passwordInput.type = 'password';
    }
});

document.querySelector('#show2').addEventListener('click', e => {
    const passwordInput = document.querySelector('#login-password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Hide';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Show';
        passwordInput.type = 'password';
    }
});

document.querySelector('#show3')?.addEventListener('click', e => {
    const passwordInput = document.querySelector('#signup-password2');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Hide';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Show';
        passwordInput.type = 'password';
    }
});