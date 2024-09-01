document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí normalmente se realizaría una verificación de credenciales con el servidor
        // Por ahora, usaremos una verificación simple para demostración
        if (username === 'admin' && password === 'password') {
            // Inicio de sesión exitoso
            loginError.textContent = '';
            // Redirigir al dashboard
            window.location.href = '../navbar/dashboard.html';
        } else {
            // Inicio de sesión fallido
            loginError.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});