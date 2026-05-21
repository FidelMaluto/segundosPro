const formulario = document.getElementsById('login-form');
const errorMessage = document.getElementById('error-message');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.success){
            window.location.href = '/dashboard';
        }else{
            errorMessage.textContent = 'Usuário ou senha inválidos!';
        }
    })
    .catch((error) => console.error(error));
})
